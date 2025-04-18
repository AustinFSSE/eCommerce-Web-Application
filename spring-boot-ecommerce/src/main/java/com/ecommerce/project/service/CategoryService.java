package com.ecommerce.project.service;

import com.ecommerce.project.payload.CategoryDTO;
import com.ecommerce.project.payload.CategoryResponse;


public interface CategoryService {

    CategoryDTO createCategory(CategoryDTO category);
    CategoryResponse getAllCategories();

    CategoryDTO deleteCategory(Long categoryId);

    CategoryDTO updateCategory(CategoryDTO categoryDTO, Long categoryId);
}
