package com.example.orionhealth.service;


import com.example.orionhealth.domain.Medication;
import com.example.orionhealth.repository.MedicationRepository;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.List;

@Service
public class MedicationService {

    private MedicationRepository medicationRepository;

    public MedicationService(MedicationRepository medicationRepository) {
        this.medicationRepository = medicationRepository;
    }

    public Iterable<Medication> list() {
        return medicationRepository.findAll();
    }

    public Medication save(Medication medication) {
        return medicationRepository.save(medication);
    }

    public List<Medication> byUser(int user_id){
        return medicationRepository.findAllByUserId(user_id);
    }

    public List<Medication> getLastSevenDaysMedications(int user_id, Date today, Date sevenDaysBefore) {
        return medicationRepository.findByUserIdAndCreatedAtAfter(user_id, sevenDaysBefore);
    }
}
