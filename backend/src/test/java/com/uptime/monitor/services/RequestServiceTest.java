package com.uptime.monitor.services;

import com.uptime.monitor.models.Environment;
import com.uptime.monitor.models.Monitor;
import org.junit.jupiter.api.Test;

import java.io.IOException;

import static org.junit.jupiter.api.Assertions.*;

class RequestServiceTest {

    @Test
    void makeRequest() {
        Monitor monitor = new Monitor("example", "http", "example.com", 80, Environment.DEV);
        RequestService service = new RequestService();

        service.create(monitor);


    }
}