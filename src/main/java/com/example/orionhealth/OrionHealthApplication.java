package com.example.orionhealth;

import com.example.orionhealth.domain.Medication;
import com.example.orionhealth.service.MedicationService;
import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;

import com.example.orionhealth.domain.User;
import com.example.orionhealth.service.UserService;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;

import java.io.IOException;
import java.io.InputStream;
import java.util.List;

@SpringBootApplication
public class OrionHealthApplication {

    public static void main(String[] args) {
        SpringApplication.run(OrionHealthApplication.class, args);
    }

    @Bean
    CommandLineRunner runner(UserService userService, MedicationService medicationService){
        return args -> {
            // read JSON and load json
            ObjectMapper mapper = new ObjectMapper();
            TypeReference<List<User>> typeReference = new TypeReference<List<User>>(){};
            InputStream inputStream = TypeReference.class.getResourceAsStream("/json/users.json");
            try {
                List<User> users = mapper.readValue(inputStream,typeReference);
                userService.save(users.get(0));
                userService.save(users.get(1));
                userService.save(users.get(2));
                userService.save(users.get(3));
                userService.save(users.get(4));
                System.out.println("Users Saved!");
            } catch (IOException e){
                System.out.println("Unable to save users: " + e.getMessage());
            }


            mapper = new ObjectMapper();
            TypeReference<List<Medication>> medicationTypeReference = new TypeReference<List<Medication>>(){};
            inputStream = TypeReference.class.getResourceAsStream("/json/medication.json");
            try {
                List<Medication> medications = mapper.readValue(inputStream,medicationTypeReference);
                medicationService.save(medications.get(0));
                medicationService.save(medications.get(1));
                medicationService.save(medications.get(2));
                medicationService.save(medications.get(3));
                System.out.println("Medications Saved!");
            } catch (IOException e){
                System.out.println("Unable to save medications: " + e.getMessage());
            }
        };
    }
}
