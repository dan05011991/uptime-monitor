package com.uptime.monitor.models;

import java.time.LocalDate;
import java.util.*;

import static com.uptime.monitor.constants.Constants.MAX_NO_OF_CALLS;

public class Monitor {
    private String endpoint;
    private Environment environment;
    private List<Call> calls;

    public Monitor() {
    }

    public Monitor(String endpoint, Environment environment) {
        this.endpoint = endpoint;
        this.environment = environment;
        this.calls = new ArrayList<>();
    }

    public String getEndpoint() {
        return endpoint;
    }

    public void setEndpoint(String endpoint) {
        this.endpoint = endpoint;
    }

    public Environment getEnvironment() {
        return environment;
    }

    public void setEnvironment(Environment environment) {
        this.environment = environment;
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
        return this.endpoint;
    }
}
