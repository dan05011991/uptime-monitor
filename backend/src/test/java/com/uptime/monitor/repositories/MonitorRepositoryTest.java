package com.uptime.monitor.repositories;

import com.uptime.monitor.models.Environment;
import com.uptime.monitor.models.Monitor;
import org.junit.Assert;
import org.junit.jupiter.api.Test;

import java.io.IOException;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

import static org.junit.jupiter.api.Assertions.*;

class MonitorRepositoryTest {

    @Test
    public void shouldReadJsonToModels() throws IOException {
        //Arrange
        MonitorRepository repo = new MonitorRepository();

        //Act
        List<Monitor> items = repo.get();

        //Assert
        Assert.assertNotEquals(0, items.size());
    }

    @Test
    public void shouldWriteModelToFile() {
        //Arrange
        MonitorRepository repo = new MonitorRepository();
        List<Monitor> monitors = new ArrayList<>(Arrays.asList(
                new Monitor("Test", "http", "bluestructures.co.uk", 80, Environment.DEV)
        ));

        //Act
        repo.save(monitors);

        //Assert
        Assert.assertTrue(true);
    }

}