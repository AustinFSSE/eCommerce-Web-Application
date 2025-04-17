package com.ecommerce.project.model;

import jakarta.persistence.*;
import lombok.Data;


@Entity(name = "categories")
@Table
@Data
public class Category {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long categoryId;
    private String categoryName;

}
