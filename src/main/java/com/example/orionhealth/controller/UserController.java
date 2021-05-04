package com.example.orionhealth.controller;


import com.example.orionhealth.domain.Medication;
import com.example.orionhealth.domain.User;
import com.example.orionhealth.service.UserService;
import com.example.orionhealth.service.MedicationService;
import org.springframework.web.bind.annotation.*;

import java.util.Date;

@RestController
@RequestMapping("/users")
public class UserController {

    private UserService userService;

    public UserController(UserService userService) {
        this.userService = userService;
    }

    @GetMapping("/list")
    public Iterable<User> list(){
        return userService.list();
    }

    @PostMapping("add")
    public String add(@RequestBody User newUser){
        User user = new User();
        user.setName(newUser.getName());
        user.setUsername(newUser.getUsername());
        user.setEmail(newUser.getEmail());
        user.setPhone(newUser.getPhone());
        user.setRole(newUser.getRole());
        user.setStatus(newUser.getStatus());
        userService.save(user);

        return "Users Successfully Inserted";
    }

}
