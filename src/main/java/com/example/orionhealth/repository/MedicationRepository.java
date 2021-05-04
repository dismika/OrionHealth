package com.example.orionhealth.repository;

import com.example.orionhealth.domain.Medication;
import org.springframework.data.repository.CrudRepository;

import java.util.Date;
import java.util.List;

public interface MedicationRepository extends CrudRepository<Medication, Long> {

    List<Medication> findAllByUserId(int user_id);

    List<Medication> findByUserIdAndCreatedAtAfter(int user_id, Date sevenDaysBefore);
}
