package com.healthcare.j76backend.controller;

import com.healthcare.j76backend.model.Device;
import com.healthcare.j76backend.repository.DeviceRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/charts")
public class ChartController {

    @Autowired
    private DeviceRepository deviceRepository;

    @GetMapping("/reports")
    public List<Device> getReportsChartData() {
        return deviceRepository.findAll();
    }
}
