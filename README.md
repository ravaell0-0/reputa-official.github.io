<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Reputa Organization</title>
    <style>
        :root {
            --primary-color: #8E1616;
            --secondary-color: #1D1616;
            --white: #EEE;
        }

        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            font-family: Arial, sans-serif;
        }

        body {
            background-color: var(--white);
        }

        /* Navigation Styles */
        .nav {
            display: flex;
            justify-content: space-between;
            padding: 0.8rem 10%;
            align-items: center;
            background-color: var(--white);
            margin-bottom: 2rem;
            box-shadow: 0 2px 4px rgba(0,0,0,0.05);
            position: sticky;
            top: 0;
            z-index: 1000;
            font-weight: bold;
        }

        .logo {
            color: var(--primary-color);
            font-size: 2rem;
            font-weight: bold;
            text-decoration: none;
            transition: transform 0.3s ease;
        }

        .logo:hover {
            transform: scale(1.05);
        }
        .nav-links {
            display: flex;
            gap: 2rem;
            font-weight: bold;
        }

        .nav-links a {
            color: var(--primary-color);
            text-decoration: none;
            font-weight: 500;
            padding: 0.5rem 1rem;
            border-radius: 4px;
            transition: all 0.3s ease;
            font-weight: bold;
        }

        .nav-links a:hover {
            background-color: var(--primary-color);
            color: var(--white);
        }
        /* Main Content */
        .main-content {
            padding: 2rem 10%;
        }

        .organization-section {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 4rem;
        }

        .org-text {
            flex: 1;
        }

        .org-logo {
            flex: 1;
            text-align: center;
        }

        .photo_6059989368082384152_x.jpg {
            width: 300px;
            height: auto;
        }

        h1 {
            color: var(--primary-color);
            font-size: 3rem;
            margin-bottom: 1rem;
        }

        /* About Section */
        .about-section {
            display: flex;
            gap: 2rem;
            margin-top: 2rem;
        }

        .about-text {
            flex: 1;
        }

        h2 {
            color: var(--secondary-color)
        }   

        .ab0 {
            color: var(--primary-color)
        }

        .about-image {
            flex: 1;
            background-color: #ffffff;
            min-height: 300px;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 2rem;
            color: #666;
        }

        /* Footer */
        .footer {
            text-align: center;
            padding: 2rem;
            margin-top: 4rem;
        }

        .social-links {
            display: flex;
            justify-content: center;
            gap: 2rem;
        }

        .social-links a {
            color: var(--primary-color);
            text-decoration: none;
        }

        @media (max-width: 768px) {
            .organization-section,
            .about-section {
                flex-direction: column;
                gap: 2rem;
            }

            .photo_6059989368082384152_x.jpg {
                width: 200px;
            }

            .nav {
                flex-direction: column;
                gap: 1rem;
                font-weight: bold;
            }
        }
    </style>
</head>
<body>
    <nav class="nav">
        <a href="reputa.html" class="logo">REPUTA</a>
        <div class="nav-links">
            <a href="stuk.html">STRUCTURE</a>
            <a href="reputa-documentation-minimal.html">DOCUMENTATION</a>
            <a href="co.html">CONTACT</a>
        </div>
    </nav>

    <main class="main-content">
        <section class="organization-section">
            <div class="org-text">
                <h1>ORGANIZATION OF REPUTA</h1>
                <p>haahahhahahaahahahahahhahahaahhahah
                ahahhahaaahhahaahahhahahahahahhhahah
                aahhahahahahahahahaahhahahhhahaha
                hahahahahahahahahahahahahahahhahhaha
                hahahhshshshshahahahaahhahahhahhhhh
                ahhhahahahahaahhhahahahahahahahhhaha
                hahahhahhahhahhahaahhaahahahahahaha
                hahahhahahahahhahhahaahahhahah</p>
            </div>
            <div class="org-logo">
                <img src="Logo_Reputa_Fix_BANGET-01-removebg-preview.png"/>
                </svg>
            </div>
        </section>

        <section class="about-section">
            <div class="about-text">
                <h2 class="ab0">-ABOUT</h2>
                <h2>REPUTA</h2>
                <p>haahahhahahaahahahahahhahahaa
                ahhahaahahhahaaahhahaahahhahahah
                ahahhhahahahahaahhhahahahahahhaha
                ahahahaahhahhhahaahahaahahhahaha
                ahahahahahahahahahahhhahahhshshsh
                shshaha</p>
            </div>
            <div class="about-image">
                FOTO 1
            </div>
        </section>
    </main>

    <footer class="footer">
        <div class="social-links">
            <a href="https://instagram.com/reputa.official">@reputa.official</a>
            <a href="https://youtube.com/PuripermataTV">PuripermataTV</a>
        </div>
    </footer>
</body>
</html>
