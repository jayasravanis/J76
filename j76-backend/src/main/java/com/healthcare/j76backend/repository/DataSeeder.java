package com.healthcare.j76backend.repository;

import com.healthcare.j76backend.model.Device;
import com.healthcare.j76backend.repository.DeviceRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
public class DataSeeder implements CommandLineRunner {

    private final DeviceRepository deviceRepository;

    public DataSeeder(DeviceRepository deviceRepository) {
        this.deviceRepository = deviceRepository;
    }

    @Override
    public void run(String... args) throws Exception {
        if (deviceRepository.count() == 0) {
            deviceRepository.saveAll(List.of(
                new Device(null, "Apple Watch (Steps)", 99.1, "€480"),
                new Device(null, "MisFit Shine", 98.3, "€185"),
                new Device(null, "Samsung Gear 1", 97.0, "€150"),
                new Device(null, "Apple Watch (Heart Rate)", 99.9, "€480"),
                new Device(null, "Motorola Moto 360", 92.8, "€110"),
                new Device(null, "Samsung Gear Fit", 97.4, "€150"),
                new Device(null, "Samsung Gear 2", 97.7, "€130"),
                new Device(null, "Samsung Gear S", 89.4, "€110"),
                new Device(null, "Apple iPhone 6", 99.2, "€180")
            ));
        }
    }
}
