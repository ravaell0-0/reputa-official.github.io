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

// Get photos from database
$sql = "SELECT * FROM photos ORDER BY upload_date DESC";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    // Display photos
    while($row = $result->fetch_assoc()) {
        $id = $row["id"];
        $filename = htmlspecialchars($row["original_filename"]);
        $file_path = htmlspecialchars($row["file_path"]);
        $description = htmlspecialchars($row["description"]);
        $upload_date = date("F j, Y, g:i a", strtotime($row["upload_date"]));
        
        echo '<div class="gallery-item">';
        echo '<div class="gallery-image">';
        echo '<img src="' . $file_path . '" alt="' . $filename . '">';
        echo '</div>';
        echo '<div class="gallery-description">';
        echo '<h3>' . $filename . '</h3>';
        
        if (!empty($description)) {
            echo '<p>' . $description . '</p>';
        } else {
            echo '<p class="text-light">No description provided</p>';
        }
        
        echo '<p class="date">Uploaded on ' . $upload_date . '</p>';
        echo '</div>';
        echo '</div>';
    }
} else {
    // No photos found
    echo '<div class="empty-gallery">';
    echo '<i class="fas fa-images"></i>';
    echo '<p>No photos yet. Upload some to get started!</p>';
    echo '</div>';
}

$conn->close();
?>