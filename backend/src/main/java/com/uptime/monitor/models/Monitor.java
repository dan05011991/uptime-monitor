package com.uptime.monitor.models;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.Collections;
import java.util.Date;
import java.util.List;

import static com.uptime.monitor.constants.Constants.MAX_NO_OF_CALLS;

public class Monitor {
    private String name;
    private String protocol;
    private String endpoint;
    private int port;
    private List<Call> calls;

    public Monitor() {
    }

    public Monitor(String name, String protocol, String endpoint, int port) {
        this.name = name;
        this.protocol = protocol;
        this.endpoint = endpoint;
        this.port = port;
        this.calls = new ArrayList<>();
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getProtocol() {
        return protocol;
    }

    public void setProtocol(String protocol) {
        this.protocol = protocol;
    }

    public String getEndpoint() {
        return endpoint;
    }

    public void setEndpoint(String endpoint) {
        this.endpoint = endpoint;
    }

    public int getPort() {
        return port;
    }

    public void setPort(int port) {
        this.port = port;
    }

    public List<Call> getCalls() {
        return calls;
    }

    public void setCalls(List<Call> calls) {
        this.calls = calls;
    }

    public void addCall(int statusCode, long latency, Date date) {
        this.calls.add(new Call(statusCode, latency, date));
        if(this.calls.size() > MAX_NO_OF_CALLS) {
            Collections.rotate(this.calls, -1);
            this.calls.subList(MAX_NO_OF_CALLS, this.calls.size()).clear();
        }
    }

    @Override
    public String toString() {
        return String.format("%s://%s:%s", protocol, endpoint, port);
    }
}
