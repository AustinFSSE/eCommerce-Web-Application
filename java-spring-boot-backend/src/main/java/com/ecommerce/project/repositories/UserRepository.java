package com.ecommerce.project.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import com.ecommerce.project.model.User;
import org.springframework.stereotype.Repository;
import java.util.Optional;

@Repository
public interface UserRepository extends JpaRepository <User, Long> {

    boolean existsByUserName(String userName);

    boolean existsByEmail(String email);

    Optional<User> findByUserName(String userName);
}
