package com.uptime.monitor.services;

import com.uptime.monitor.models.Monitor;
import org.springframework.stereotype.Service;

import javax.net.ssl.HttpsURLConnection;
import javax.net.ssl.SSLSocketFactory;
import java.io.IOException;
import java.net.HttpURLConnection;
import java.net.URL;
import java.time.Duration;
import java.time.Instant;
import java.time.LocalDate;
import java.util.Date;

@Service
public class RequestService {

    public void create(Monitor monitor) {
        try {

            HttpURLConnection con = monitor.getEndpoint().startsWith("https")
                    ? this.createSecure(monitor) : this.createInsecure(monitor);

            Instant start = Instant.now();

            int status = con.getResponseCode();

            Instant end = Instant.now();
            Duration timeElapsed = Duration.between(start, end);

            monitor.addCall(status, timeElapsed.toMillis(), new Date());
        } catch(Exception ex) {
            monitor.addCall(0, 0, new Date());
        }
    }

    private HttpURLConnection createInsecure(Monitor monitor) throws IOException {
        URL url = new URL(monitor.toString());
        HttpURLConnection con = (HttpURLConnection) url.openConnection();
        con.setRequestMethod("GET");
        con.setConnectTimeout(5000);
        con.setReadTimeout(5000);
        con.setInstanceFollowRedirects(true);
        return con;
    }

    private HttpURLConnection createSecure(Monitor monitor) throws IOException {
        HttpsURLConnection con = (HttpsURLConnection)createInsecure(monitor);
        SSLSocketFactory sslsocketfactory = (SSLSocketFactory) SSLSocketFactory.getDefault();
        con.setSSLSocketFactory(sslsocketfactory);
        return con;
    }
}
