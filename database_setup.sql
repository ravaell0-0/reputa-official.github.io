-- Create database (if not already created)
CREATE DATABASE IF NOT EXISTS photo_gallery;

-- Use the database
USE photo_gallery;

-- Create table for storing photos and descriptions
CREATE TABLE IF NOT EXISTS photos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    filename VARCHAR(255) NOT NULL,
    original_filename VARCHAR(255) NOT NULL,
    file_path VARCHAR(255) NOT NULL,
    description TEXT,
    upload_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);