package com.healthcare.j76backend.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "devices") // Collection name in MongoDB
public class Device {
    @Id
    private String id;

    private String device;
    private double accuracy;
    private String cost;

    public Device() {
    }

    public Device(String id, String device, double accuracy, String cost) {
        this.id = id;
        this.device = device;
        this.accuracy = accuracy;
        this.cost = cost;
    }

    // Getters and Setters
    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getDevice() {
        return device;
    }

    public void setDevice(String device) {
        this.device = device;
    }

    public double getAccuracy() {
        return accuracy;
    }

    public void setAccuracy(double accuracy) {
        this.accuracy = accuracy;
    }

    public String getCost() {
        return cost;
    }

    public void setCost(String cost) {
        this.cost = cost;
    }
}
