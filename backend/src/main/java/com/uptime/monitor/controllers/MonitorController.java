package com.uptime.monitor.controllers;

import com.uptime.monitor.models.Environment;
import com.uptime.monitor.models.Monitor;
import com.uptime.monitor.services.MonitorService;
import com.uptime.monitor.services.RequestService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.io.IOException;
import java.util.List;

import static com.uptime.monitor.constants.Constants.executeInterval;
import static com.uptime.monitor.constants.Constants.saveInterval;

@RestController
@Controller
@CrossOrigin(origins = "*")
public class MonitorController {

    @Autowired
    private MonitorService service;

    @Autowired
    private RequestService requestService;

    @RequestMapping(value = "/monitor", method = RequestMethod.GET)
    public List<Monitor> get() throws IOException {
        return service.get();
    }

    @RequestMapping(value = "/monitor", method = RequestMethod.POST)
    public void post(String endpoint, Environment environment) throws Exception {
        Monitor monitor = new Monitor(endpoint, environment);
        if(service.get().stream().anyMatch(x -> x.toString().equalsIgnoreCase(monitor.toString()))) {
            throw new Exception("Duplicate record");
        }
        service.get().add(monitor);
    }

    @Scheduled(fixedRate = executeInterval)
    public void execute() throws IOException {
        this.get().parallelStream().forEach(x -> requestService.create(x));
    }

    @Scheduled(fixedRate = saveInterval)
    public void save() throws IOException {
        service.save(this.get());
    }
}
