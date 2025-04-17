package com.ecommerce.project.service;

import com.ecommerce.project.model.Category;

import java.util.List;


public interface CategoryService {

    void createCategory(Category category);
    List <Category> getAllCategories();

    String deleteCategory(Long categoryId);

    Category updateCategory(Category category, Long categoryId);
}
