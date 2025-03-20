<?php
// Database connection
$db_host = 'localhost';
$db_user = 'root'; // Change to your database username
$db_pass = ''; // Change to your database password
$db_name = 'photo_gallery';

$conn = new mysqli($db_host, $db_user, $db_pass, $db_name);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Upload directory
$upload_dir = 'uploads/';

// Create directory if it doesn't exist
if (!file_exists($upload_dir)) {
    mkdir($upload_dir, 0777, true);
}

// Check if form was submitted
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Check if file was uploaded without errors
    if (isset($_FILES["photo"]) && $_FILES["photo"]["error"] == 0) {
        $allowed_types = ["image/jpeg", "image/jpg", "image/png", "image/gif"];
        $max_size = 5 * 1024 * 1024; // 5MB
        
        $file_name = $_FILES["photo"]["name"];
        $file_type = $_FILES["photo"]["type"];
        $file_size = $_FILES["photo"]["size"];
        $file_tmp = $_FILES["photo"]["tmp_name"];
        
        // Validate file type
        if (!in_array($file_type, $allowed_types)) {
            header("Location: index.php?error=Invalid file type. Only JPG, PNG, and GIF are allowed.");
            exit();
        }
        
        // Validate file size
        if ($file_size > $max_size) {
            header("Location: index.php?error=File is too large. Maximum size is 5MB.");
            exit();
        }
        
        // Generate unique filename
        $new_file_name = uniqid() . '_' . $file_name;
        $file_path = $upload_dir . $new_file_name;
        
        // Move uploaded file to destination
        if (move_uploaded_file($file_tmp, $file_path)) {
            // Get description
            $description = isset($_POST["description"]) ? $_POST["description"] : "";
            
            // Prepare SQL statement
            $stmt = $conn->prepare("INSERT INTO photos (filename, original_filename, file_path, description) VALUES (?, ?, ?, ?)");
            $stmt->bind_param("ssss", $new_file_name, $file_name, $file_path, $description);
            
            // Execute statement
            if ($stmt->execute()) {
                header("Location: index.php?success=Photo uploaded successfully!");
                exit();
            } else {
                header("Location: index.php?error=Database error: " . $conn->error);
                exit();
            }
        } else {
            header("Location: index.php?error=Failed to upload file.");
            exit();
        }
    } else {
        header("Location: index.php?error=No file uploaded or upload error occurred.");
        exit();
    }
} else {
    // Not a POST request
    header("Location: index.php");
    exit();
}
?>