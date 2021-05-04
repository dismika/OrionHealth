package com.example.orionhealth.domain;

import lombok.AllArgsConstructor;
import lombok.Data;

import javax.persistence.*;
import java.util.Date;

@Data
@AllArgsConstructor
@Entity
@Table(name = "user")
public class User {

    @Id
    @GeneratedValue( strategy = GenerationType.AUTO )
    private int id;
    private String name;
    private String username;
    private String email;
    private String phone;
    private int role;
    private int status;
    private Date createdAt;
    private Date updatedAt;

    public User() {}
}