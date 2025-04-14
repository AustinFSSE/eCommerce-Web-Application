package com.ecommerce.project.service;

import com.ecommerce.project.model.Category;

import java.util.List;

public interface CategoryService {

    public String createCategory(Category category);
    public List <Category> getAllCategories();

    String deleteCategory(Long categoryId);
}
