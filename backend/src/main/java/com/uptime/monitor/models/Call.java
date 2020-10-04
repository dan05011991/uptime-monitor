package com.uptime.monitor.models;

import java.text.SimpleDateFormat;
import java.time.LocalDate;
import java.util.Date;

public class Call {
    private static final SimpleDateFormat formatter = new SimpleDateFormat("dd/MM/yyyy HH:mm:ss");
    private int statusCode;
    private long latency;
    private String date;

    public Call() {
    }

    public Call(int statusCode, long latency, Date date) {
        this.statusCode = statusCode;
        this.latency = latency;
        this.date = getDateString(date);
    }

    public int getStatusCode() {
        return statusCode;
    }

    public void setStatusCode(int statusCode) {
        this.statusCode = statusCode;
    }

    public long getLatency() {
        return latency;
    }

    public void setLatency(long latency) {
        this.latency = latency;
    }

    public String getDate() {
        return date;
    }

    public void setDate(Date date) {
        this.date = getDateString(date);
    }

    public void setDate(String date) {
        this.date = date;
    }

    private String getDateString(Date date) {
        return formatter.format(date);
    }
}
