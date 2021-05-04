package com.example.orionhealth.controller;

import com.example.orionhealth.domain.Medication;
import com.example.orionhealth.domain.User;
import com.example.orionhealth.service.MedicationService;
import org.springframework.web.bind.annotation.*;

import java.util.Calendar;
import java.util.Date;
import java.util.List;

@RestController
@RequestMapping("/medication")
public class MedicationController {
    private MedicationService medicationService;

    public MedicationController(MedicationService medicationService) {
        this.medicationService = medicationService;
    }

    @GetMapping("/list")
    public Iterable<Medication> list(){
        return medicationService.list();
    }

    @GetMapping("/view/{user_id}")
    public List<Medication> view(@PathVariable(value = "user_id") int user_id){
        Calendar calendar = Calendar.getInstance();
        Date today = calendar.getTime();

        calendar.add(Calendar.DAY_OF_MONTH, -7);
        Date sevenDaysBefore = calendar.getTime();
        return medicationService.getLastSevenDaysMedications(user_id, today, sevenDaysBefore);
    }

    @PostMapping("add")
    public String save(@RequestBody Medication newMedication){
        User user = new User();
        user.setId(newMedication.getUser().getId());
        Medication medication = new Medication();
        medication.setDescription(newMedication.getDescription());
        medication.setUser(user);

        medicationService.save(medication);

        return "Medications Successfully Inserted";
    }
}
