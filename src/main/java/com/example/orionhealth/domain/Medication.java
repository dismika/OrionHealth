package com.example.orionhealth.domain;

import lombok.AllArgsConstructor;
import lombok.Data;

import javax.persistence.*;
import java.util.Date;

@Data
@AllArgsConstructor
@Entity
@Table(name = "medication")
public class Medication {
    @Id
    @GeneratedValue( strategy = GenerationType.AUTO )
    private int id;

    @ManyToOne
    private User user;

    private String description;
    @Temporal(TemporalType.TIMESTAMP)
    private Date createdAt;
    private Date updatedAt;

    public Medication() {}
}
