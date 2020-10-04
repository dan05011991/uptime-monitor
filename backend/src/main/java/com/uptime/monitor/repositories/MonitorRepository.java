package com.uptime.monitor.repositories;

import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.core.util.DefaultPrettyPrinter;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.ObjectWriter;
import com.uptime.monitor.models.Monitor;
import org.springframework.stereotype.Repository;

import java.io.File;
import java.io.IOException;
import java.util.Collections;
import java.util.List;

@Repository
public class MonitorRepository {
    private List<Monitor> monitors;

    public List<Monitor> get() throws IOException {
        if(monitors != null) {
            return monitors;
        }

        ObjectMapper mapper = new ObjectMapper();

        monitors = Collections.synchronizedList
                (mapper.readValue(new File("data"), new TypeReference<List<Monitor>>(){}));

        return monitors;
    }

    public void save(List<Monitor> monitors) {
        if(monitors.size() == 0) {
            return;
        }

        ObjectMapper mapper = new ObjectMapper();
        ObjectWriter writer = mapper.writer(new DefaultPrettyPrinter());
        try {
            writer.writeValue(new File("data"), monitors);
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}
