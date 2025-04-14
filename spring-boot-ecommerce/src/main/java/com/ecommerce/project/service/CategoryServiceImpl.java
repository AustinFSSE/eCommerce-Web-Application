package com.ecommerce.project.service;

import com.ecommerce.project.model.Category;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class CategoryServiceImpl implements CategoryService {

    private final List<Category> categories = new ArrayList <>();
    @Override
    public String createCategory(Category category) {
        categories.add(category);
        return category.toString();
    }

    @Override
    public List <Category> getAllCategories() {
        return categories;
    }

    @Override
    public String deleteCategory(Long categoryId) {
        Category category = categories.stream()
                .filter(c -> c.getCategoryId().equals(categoryId))
                .findFirst().orElse(null);

        if (category == null) {
            return "Category not found";
        }
        categories.remove(category);
        return "Category deleted";
    }
}
