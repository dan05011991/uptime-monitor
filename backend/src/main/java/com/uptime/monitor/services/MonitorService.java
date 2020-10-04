package com.uptime.monitor.services;

import com.uptime.monitor.models.Monitor;
import com.uptime.monitor.repositories.MonitorRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.io.IOException;
import java.util.List;

@Service
public class MonitorService {

    @Autowired
    private MonitorRepository repository;

    public List<Monitor> get() throws IOException {
        return repository.get();
    }

    public void save(List<Monitor> monitors) {
        repository.save(monitors);
    }

}
