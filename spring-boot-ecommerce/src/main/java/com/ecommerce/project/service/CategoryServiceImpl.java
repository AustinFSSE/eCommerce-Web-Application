package com.ecommerce.project.service;

import com.ecommerce.project.exceptions.APIException;
import com.ecommerce.project.exceptions.ResourceNotFoundException;
import com.ecommerce.project.model.Category;
import com.ecommerce.project.payload.CategoryDTO;
import com.ecommerce.project.payload.CategoryResponse;
import com.ecommerce.project.repositories.CategoryRepository;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;


import java.util.List;
import java.util.Optional;


@Service
public class CategoryServiceImpl implements CategoryService {
    private final CategoryRepository categoryRepository;

    private final ModelMapper modelMapper;

    public CategoryServiceImpl(CategoryRepository categoryRepository, ModelMapper modelMapper) {
        this.categoryRepository = categoryRepository;

        this.modelMapper = modelMapper;
    }
    @Override
    public CategoryDTO createCategory(CategoryDTO categoryDTO) {
        Category category = modelMapper.map(categoryDTO, Category.class);
        Category categoryFromDB = categoryRepository.findByCategoryName((category.getCategoryName()));
        if (categoryFromDB != null) {
              throw new APIException("Category already exists: " + categoryDTO.getCategoryName());
        }
        Category savedCategory = categoryRepository.save(category);
        return modelMapper.map(savedCategory, CategoryDTO.class);
    }
    @Override
    public CategoryResponse getAllCategories() {

        List<Category> categories = categoryRepository.findAll();
        if (categories.isEmpty()) {
            throw new APIException("No categories found");
        }
        List<CategoryDTO> categoryDTOS = categories.stream()
                .map(c -> modelMapper.map(c, CategoryDTO.class))
                .toList();
        CategoryResponse categoryResponse = new CategoryResponse();
        categoryResponse.setContent(categoryDTOS);
        return categoryResponse;
    }
    @Override
    public CategoryDTO deleteCategory(Long categoryId) {

        Category categoryOptional = categoryRepository.findById(categoryId)
                .orElseThrow(() -> new ResourceNotFoundException("Category", "categoryId", categoryId));

        categoryRepository.delete(categoryOptional);
        return modelMapper.map(categoryOptional, CategoryDTO.class);
    }

    @Override
    public CategoryDTO updateCategory(CategoryDTO categoryDTO, Long categoryId) {

        Category category = modelMapper.map(categoryDTO, Category.class);
        Optional <Category> categoryFromDB = categoryRepository.findById(categoryId);

        if (categoryFromDB.isPresent()) {

            Category categoryToUpdate = categoryFromDB.get();
            categoryToUpdate.setCategoryName(category.getCategoryName());

            Category savedCategory = categoryRepository.save(categoryToUpdate);
            return modelMapper.map(savedCategory, CategoryDTO.class);

        } else {
            throw new ResourceNotFoundException("Category", "categoryId", categoryId);
        }

    }
}
