<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Photo Gallery Upload</title>
    <link rel="stylesheet" href="asst/styles.css">
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
</head>
<body>
<header class="head">
        <div class="container2">
            <div class="logo">
                <h1>REPUTA</h1>
            </div>
            <nav>
                <button class="mobile-menu-toggle" aria-label="Toggle menu">
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
                <ul class="nav-menu">
                    <li><a href="index.html" class="active">Home</a></li>
                </ul>
            </nav>
        </div>
    </header>

    <div class="container1">
        
        <h1>
            <p>Report</p>
            <p class="subtitle">Upload foto Anda dan tambahkan deskripsi untuk melaporkan suatu kejadian</p>
        </h1>

        <main>
            <!-- Upload Section -->
            <section class="upload-section">
                <div class="card">
                    <h2>Upload Photos</h2>
                    
                    <?php
                    // Display success or error messages if they exist
                    if (isset($_GET['success'])) {
                        echo '<div class="alert success"><i class="fas fa-check-circle"></i> ' . htmlspecialchars($_GET['success']) . '</div>';
                    }
                    if (isset($_GET['error'])) {
                        echo '<div class="alert error"><i class="fas fa-exclamation-circle"></i> ' . htmlspecialchars($_GET['error']) . '</div>';
                    }
                    ?>
                    
                    <form action="upload.php" method="post" enctype="multipart/form-data" id="upload-form">
                        <div id="upload-area" class="upload-area">
                            <div class="upload-prompt">
                                <i class="fas fa-cloud-upload-alt"></i>
                                <h3>Drag & Drop Photos Here</h3>
                                <p>or</p>
                                <label for="file-input" class="btn btn-primary">Select Files</label>
                                <input type="file" id="file-input" name="photo" accept="image/*" hidden>
                            </div>
                        </div>
                        
                        <div id="preview-container" class="preview-container hidden">
                            <div class="preview-header">
                                <h3>Preview</h3>
                                <button type="button" id="cancel-upload" class="btn btn-text">
                                    <i class="fas fa-times"></i> Cancel
                                </button>
                            </div>
                            
                            <div id="image-preview" class="image-preview"></div>
                            
                            <div class="form-group">
                                <label for="description">Description:</label>
                                <textarea id="description" name="description" rows="4" placeholder="Add a description for this photo..."></textarea>
                            </div>
                            
                            <button type="submit" class="btn btn-primary">
                                <i class="fas fa-upload"></i> Upload Photo
                            </button>
                        </div>
                    </form>
                </div>
            </section>

            <!-- Gallery Section -->
            <section class="gallery-section">
                <div class="card">
                    <h2>Report</h2>
                    <div id="photo-gallery" class="photo-gallery">
                        <?php include 'gallery.php'; ?>
                    </div>
                </div>
            </section>
        </main>
    </div>

    <footer>
    <p>&copy; 2025 Organization REPUTA. All rights reserved.</p>
        <div class="container">
            <div class="footer-content">
                <div class="footer-info">
                    <h3>Organization Name</h3>
                    <p>Cluster Puri Permata 1. RT.002/RW.015, Larangan Sel, Kec. Larangan, Kota Tangerang, Banten
                        15154<br>Phone: +62 878-8561-3949<br><a
                            href="mailto:reputa.official@gmail.com">reputa.official@gmail.com</a></p>
                </div>
                <div class="footer-links">
                    <h4>Quick Links</h4>
                    <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#about">About</a></li>
                        <li><a href="#services">Services</a></li>
                        <li><a href="#events">Events</a></li>
                        <li><a href="#documentation">Documentation</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                </div>
                <div class="footer-newsletter">
                    <h4>Stay Updated</h4>
                    <p>Jangan sampai ketinggalan informasi terbaru dari kami!</p>
                </div>
            </div>
            <div class="footer-bottom">
                <p>&copy; 2025 Organization REPUTA. All rights reserved.</p>
            </div>
        </div>
    </footer>

    <script src="asst/script.js"></script>
</body>
</html>