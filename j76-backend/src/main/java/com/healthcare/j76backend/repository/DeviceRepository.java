package com.healthcare.j76backend.repository;

import com.healthcare.j76backend.model.Device;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface DeviceRepository extends MongoRepository<Device, String> {
    // Custom query methods can be defined here if needed
}
