package com.ecommerce.project.service;

import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.util.UUID;

@Service
public class FileServiceImpl implements FileService {
    @Override
    public String uploadImage(String path, MultipartFile file) throws IOException {
        String originalFilename = file.getOriginalFilename();
        assert originalFilename != null;

        String randomId = UUID.randomUUID().toString();
        String fileName = randomId.concat(originalFilename.substring(originalFilename.lastIndexOf(".")));

        // Ensure directory exists
        File dir = new File(path);
        if (!dir.exists()) {
            dir.mkdir();
        }

        String filePath = path + File.pathSeparator + fileName;

        // Upload the file
        Files.copy(file.getInputStream(), Paths.get(filePath));

        return fileName;
    }
}
