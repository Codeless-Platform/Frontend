company1 = (editor, opts = {}) => {
  // Company1 Landing Page
  editor.Components.addType('company_landing_page', {
    model: {
      defaults: {
        tagName: 'main',
        components: `
<header id="header">
<div class="container">
<div id="logo" class="pull-left">
<h1><a href="#intro" class="scrollto">Company Name</a></h1>
</div>
<nav id="nav-menu-container">
<ul class="nav-menu">
    <li class="menu-active"><a href="#intro">Home</a></li>
    <li><a href="#about">About Us</a></li>
    <li><a href="#features">Features</a></li>
    <li><a href="#team">Team</a></li>
    <li><a href="#contact">Contact Us</a></li>
</ul>
</nav>
</div>
</header>
<section id="intro">
<div class="intro-text">
<h2>Welcome to Company Name</h2>
<p>Write a specific description of what your company does</p>
<a href="#about" class="btn-get-started scrollto">Get Started</a>
</div>
<div class="product-screens">
<div class="product-screen-1" data-aos="fade-up" data-aos-delay="400">
<img src="./imgs/1.jpg" alt="" width="314px" height="600px">
</div>
<div class="product-screen-2" data-aos="fade-up" data-aos-delay="200">
<img src="./imgs/1.jpg" alt="" width="314px" height="600px">
</div>
<div class="product-screen-3" data-aos="fade-up">
<img src="./imgs/1.jpg" alt="" width="314px" height="600px">
</div>
</div>
</section>
<section id="about" class="section-bg">
    <div class="container-fluid">
        <div class="section-header">
            <h3 class="section-title">About Us</h3>
            <span class="section-divider"></span>
            <p class="section-description">
                Tell us more abour your company and your services
            </p>
        </div>

        <div class="row">
            <div class="col-lg-6 about-img" data-aos="fade-right">
                <img src="img/about-img.jpg" alt="">
            </div>

            <div class="col-lg-6 content" data-aos="fade-left">
                <h2>You can change all of this to whatever you need </h2>
                <h3>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit
                    anim id est laborum.</h3>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                    labore et dolore magna aliqua ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>

                <ul>
                    <li><i class="ion-android-checkmark-circle"></i> Ullamco laboris nisi ut aliquip ex ea
                        commodo consequat.</li>
                    <li><i class="ion-android-checkmark-circle"></i> Duis aute irure dolor in reprehenderit in
                        voluptate velit.</li>
                    <li><i class="ion-android-checkmark-circle"></i> Ullamco laboris nisi ut aliquip ex ea
                        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate trideta
                        storacalaperda mastiro dolore eu fugiat nulla pariatur.</li>
                </ul>

                <p>
                    Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim
                    id est laborum Libero justo laoreet sit amet cursus sit amet dictum sit. Commodo sed egestas
                    egestas fringilla phasellus faucibus scelerisque eleifend donec
                </p>
            </div>
        </div>

    </div>
</section>
<!-- #about -->

<!--==========================
Product Featuress Section
============================-->
<section id="features">
    <div class="container">

        <div class="row">

            <div class="col-lg-8 offset-lg-4">
                <div class="section-header" data-aos="fade" data-aos-duration="1000">
                    <h3 class="section-title">Product Featuress</h3>
                    <span class="section-divider"></span>
                </div>
            </div>

            <div class="col-lg-4 col-md-5 features-img">
                <img src="img/product-features.png" alt="" data-aos="fade-right"
                    data-aos-easing="ease-out-back">
            </div>

            <div class="col-lg-8 col-md-7 ">

                <div class="row">

                    <div class="col-lg-6 col-md-6 box" data-aos="fade-left">
                        <div class="icon"><i class="ion-ios-speedometer-outline"></i></div>
                        <h4 class="title"><a href="">Lorem Ipsum</a></h4>
                        <p class="description">Voluptatum deleniti atque corrupti quos dolores et quas molestias
                            excepturi sint occaecati cupiditate non provident clarida perendo.</p>
                    </div>
                    <div class="col-lg-6 col-md-6 box" data-aos="fade-left" data-aos-delay="100">
                        <div class="icon"><i class="ion-ios-flask-outline"></i></div>
                        <h4 class="title"><a href="">Dolor Sitema</a></h4>
                        <p class="description">Minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                            aliquip ex ea commodo consequat tarad limino ata noble dynala mark.</p>
                    </div>
                    <div class="col-lg-6 col-md-6 box" data-aos="fade-left" data-aos-delay="200">
                        <div class="icon"><i class="ion-social-buffer-outline"></i></div>
                        <h4 class="title"><a href="">Sed ut perspiciatis</a></h4>
                        <p class="description">Duis aute irure dolor in reprehenderit in voluptate velit esse
                            cillum dolore eu fugiat nulla pariatur teleca starter sinode park ledo.</p>
                    </div>
                    <div class="col-lg-6 col-md-6 box" data-aos="fade-left" data-aos-delay="300">
                        <div class="icon"><i class="ion-ios-analytics-outline"></i></div>
                        <h4 class="title"><a href="">Magni Dolores</a></h4>
                        <p class="description">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
                            officia deserunt mollit anim id est laborum dinoun trade capsule.</p>
                    </div>
                </div>

            </div>

        </div>

    </div>

</section>
<!--==========================
Our Team Section
============================-->
<section id="team" class="section-bg">
    <div class="container">
        <div class="section-header">
            <h3 class="section-title">Our Team</h3>
            <span class="section-divider"></span>
            <p class="section-description">Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque</p>
        </div>
        <div class="row" data-aos="fade-up">
            <div class="col-lg-3 col-md-6">
                <div class="member">
                    <div class="pic"><img src="img/team/team-1.jpg" alt=""></div>
                    <h4>Name</h4>
                    <span>Job Title</span>
                    <div class="social">
                        <a href=""><img src="./imgs/facebook.png" width=20px height=20px></a>
                        <a href=""><img src="./imgs/twitter.png" width=20px height=20px></a>
                        <a href=""><img src="./imgs/linkedin.png" width=20px height=20px></a>
                    </div>
                </div>
            </div>

            <div class="col-lg-3 col-md-6">
                <div class="member">
                    <div class="pic"><img src="img/team/team-2.jpg" alt=""></div>
                    <h4>Name</h4>
                    <span>Job Title</span>
                    <div class="social">
                        <a href=""><img src="./imgs/facebook.png" width=20px height=20px></a>
                        <a href=""><img src="./imgs/twitter.png" width=20px height=20px></a>
                        <a href=""><img src="./imgs/linkedin.png" width=20px height=20px></a>
                    </div>
                </div>
            </div>

            <div class="col-lg-3 col-md-6">
                <div class="member">
                    <div class="pic"><img src="img/team/team-3.jpg" alt=""></div>
                    <h4>Name</h4>
                    <span>Job Title</span>
                    <div class="social">
                        <a href=""><img src="./imgs/facebook.png" width=20px height=20px></a>
                        <a href=""><img src="./imgs/twitter.png" width=20px height=20px></a>
                        <a href=""><img src="./imgs/linkedin.png" width=20px height=20px></a>
                    </div>
                </div>
            </div>

            <div class="col-lg-3 col-md-6">
                <div class="member">
                    <div class="pic"><img src="img/team/team-4.jpg" alt=""></div>
                    <h4>Name</h4>
                    <span>Job Title</span>
                    <div class="social">
                        <a href=""><img src="./imgs/facebook.png" width=20px height=20px></a>
                        <a href=""><img src="./imgs/twitter.png" width=20px height=20px></a>
                        <a href=""><img src="./imgs/linkedin.png" width=20px height=20px></a>
                    </div>
                </div>
            </div>
        </div>

    </div>
</section>
<!-- #team -->
<!--==========================
Contact Section
============================-->
<section id="contact">
    <div class="container">
        <div class="row" data-aos="fade-up">

            <div class="col-lg-4 col-md-4">
                <div class="contact-about">
                    <h3>Company Name</h3>
                    <p>Cras fermentum odio eu feugiat. Justo eget magna fermentum iaculis eu non diam phasellus.
                        Scelerisque felis imperdiet proin fermentum leo. Amet volutpat consequat mauris nunc
                        congue.</p>
                    <div class="social-links">
                        <a href=""><img src="./imgs/facebook.png" width=20px height=20px></a>
                        <a href=""><img src="./imgs/twitter.png" width=20px height=20px></a>
                        <a href=""><img src="./imgs/linkedin.png" width=20px height=20px></a>
                    </div>
                </div>
            </div>

            <div class="col-lg-3 col-md-4">
                <div class="info">
                    <div>
                        <i class="ion-ios-location-outline"></i>
                        <p>Street Name<br>Address</p>
                    </div>

                    <div>
                        <i class="ion-ios-email-outline"></i>
                        <p>Yor Email</p>
                    </div>

                    <div>
                        <i class="ion-ios-telephone-outline"></i>
                        <p>Telephone Number</p>
                    </div>

                </div>
            </div>

            <div class="col-lg-5 col-md-8">
                <div class="form">
                    <div id="sendmessage">Your message has been sent. Thank you!</div>
                    <div id="errormessage"></div>
                    <form action="" method="post" role="form" class="contactForm">
                        <div class="form-row">
                            <div class="form-group col-lg-6">
                                <input type="text" name="name" class="form-control" id="name"
                                    placeholder="Your Name" data-rule="minlen:4"
                                    data-msg="Please enter at least 4 chars" />
                                <div class="validation"></div>
                            </div>
                            <div class="form-group col-lg-6">
                                <input type="email" class="form-control" name="email" id="email"
                                    placeholder="Your Email" data-rule="email"
                                    data-msg="Please enter a valid email" />
                                <div class="validation"></div>
                            </div>
                        </div>
                        <div class="form-group">
                            <input type="text" class="form-control" name="subject" id="subject"
                                placeholder="Subject" data-rule="minlen:4"
                                data-msg="Please enter at least 8 chars of subject" />
                            <div class="validation"></div>
                        </div>
                        <div class="form-group">
                            <textarea class="form-control" name="message" rows="5" data-rule="required"
                                data-msg="Please write something for us" placeholder="Message"></textarea>
                            <div class="validation"></div>
                        </div>
                        <div class="text-center"><button type="submit" title="Send Message">Send
                                Message</button></div>
                    </form>
                </div>
            </div>

        </div>

    </div>
</section>
<!-- #contact -->

</main>


<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet">


<style>
body {
background: #fff;
color: #666666;
font-family: "Open Sans", sans-serif;
overflow-x: hidden;
}

a {
color: #1dc8cd;
transition: 0.5s;
text-decoration: none;

}

a:active,
a:hover,
a:focus {
color: #1dc9ce;
outline: none;
text-decoration: none;
}

p {
padding: 0;
margin: 0 0 30px 0;
}

h1,
h2,
h3,
h4,
h5,
h6 {
font-family: "Montserrat", sans-serif;
font-weight: 400;
margin: 0 0 20px 0;
padding: 0;
}

/* Back to top button */

.back-to-top {
position: fixed;
display: none;
background: linear-gradient(45deg, #1de099, #1dc8cd);
color: #fff;
padding: 2px 20px 8px 20px;
font-size: 16px;
border-radius: 4px 4px 0 0;
right: 15px;
bottom: 0;
transition: none;
}

.back-to-top:focus {
background: linear-gradient(45deg, #1de099, #1dc8cd);
color: #fff;
outline: none;
}

.back-to-top:hover {
background: #1dc8cd;
color: #fff;
}

/*--------------------------------------------------------------
# Header
--------------------------------------------------------------*/

#header {
position: fixed;
left: 0;
top: 0;
right: 0;
transition: all 0.5s;
z-index: 997;
background: linear-gradient(45deg, #1de099, #1dc8cd);
padding: 20px 0;
height: 72px;
}

#header #logo {
float: left;
}

#header #logo h1 {
font-size: 36px;
margin: -4px 0 0 0;
padding: 0;
line-height: 1;
display: inline-block;
font-family: "Montserrat", sans-serif;
font-weight: 300;
letter-spacing: 3px;
text-transform: uppercase;
}

#header #logo h1 a,
#header #logo h1 a:hover {
color: #fff;
}

#header #logo img {
padding: 0;
margin: 0;
}

@media (max-width: 768px) {
#header #logo h1 {
font-size: 28px;
margin-top: 0;
}

#header #logo img {
max-height: 40px;
}
}

#header.header-fixed {
background: linear-gradient(45deg, #1de099, #1dc8cd);
padding: 20px 0;
height: 72px;
transition: all 0.5s;
}

/*--------------------------------------------------------------
# Intro Section
--------------------------------------------------------------*/

#intro {
width: 100%;
height: 100vh;
background: linear-gradient(45deg, #1de099, #1dc8cd);
position: relative;
}

#intro .intro-text {
padding-top: 140px;
text-align: center;
vertical-align: top;
}

@media (max-height: 768px) {
#intro .intro-text {
padding-top: 80px;
}
}

@media (max-width: 768px) {
#intro .intro-text {
padding-top: 180px;
}
}

@media (max-width: 767px) {
#intro .intro-text {
padding-top: 50px;
}
}

#intro h2 {
margin: 30px 0 10px 0;
padding: 0 15px;
font-size: 48px;
font-weight: 400;
line-height: 56px;
color: #fff;
}

@media (max-width: 768px) {
#intro h2 {
font-size: 28px;
line-height: 36px;
}
}

#intro p {
color: #fff;
margin-bottom: 20px;
padding: 0 15px;
font-size: 24px;
}

@media (max-width: 768px) {
#intro p {
font-size: 18px;
line-height: 24px;
margin-bottom: 20px;
}
}

#intro .btn-get-started {
font-family: "Montserrat", sans-serif;
font-weight: 400;
font-size: 16px;
letter-spacing: 1px;
display: inline-block;
padding: 8px 28px;
border-radius: 50px;
transition: 0.5s;
margin: 10px;
border: 2px solid #fff;
color: #fff;
}

#intro .btn-get-started:hover {
color: #1dc8cd;
background: #fff;
}

#intro .product-screens {
position: absolute;
left: 0;
right: 0;
bottom: 0;
overflow: hidden;
padding-top: 30px;
text-align: center;
width: 100%;
height: 530px;
}

#intro .product-screens img {
box-shadow: 0px -2px 19px 4px rgba(0, 0, 0, 0.29);
}

#intro .product-screens .product-screen-1 {
position: absolute;
z-index: 30;
left: calc(50% + 54px);
bottom: 0;
height: 500px;
}

#intro .product-screens .product-screen-2 {
position: absolute;
z-index: 20;
left: calc(50% - 154px);
bottom: 0;
height: 430px;
}

#intro .product-screens .product-screen-3 {
position: absolute;
z-index: 10;
left: calc(50% - 374px);
bottom: 0;
height: 360px;
}

@media (max-height: 768px) {
#intro .product-screens {
height: 430px;
}

#intro .product-screens .product-screen-1 {
height: 400px;
}

#intro .product-screens .product-screen-2 {
height: 330px;
}

#intro .product-screens .product-screen-3 {
height: 260px;
}
}

@media (max-width: 767px) {
#intro .product-screens {
height: 400px;
}

#intro .product-screens .product-screen-1 {
position: static;
}

#intro .product-screens .product-screen-2,
#intro .product-screens .product-screen-3 {
display: none;
}
}

@media (max-width: 767px) and (max-height: 639px) {
#intro .product-screens {
height: 300px;
}

#intro .product-screens .product-screen-1 {
position: static;
}

#intro .product-screens .product-screen-2,
#intro .product-screens .product-screen-3 {
display: none;
}
}

/*--------------------------------------------------------------
# Navigation Menu
--------------------------------------------------------------*/

/* Nav Menu Essentials */

.nav-menu,
.nav-menu * {
margin: 0;
padding: 0;
list-style: none;
}

.nav-menu ul {
position: absolute;
display: none;
top: 100%;
left: 0;
z-index: 99;
}

.nav-menu li {
position: relative;
white-space: nowrap;
}

.nav-menu>li {
float: left;
}

.nav-menu li:hover>ul,
.nav-menu li.sfHover>ul {
display: block;
}

.nav-menu ul ul {
top: 0;
left: 100%;
}

.nav-menu ul li {
min-width: 180px;
}

/* Nav Meu Container */

#nav-menu-container {
float: right;
margin: 0;
}


/* Nav Meu Styling */

.nav-menu a {
padding: 0 8px 10px 8px;
text-decoration: none;
display: inline-block;
color: #fff;
font-family: "Montserrat", sans-serif;
font-weight: 400;
font-size: 14px;
outline: none;
}

.nav-menu>li {
margin-left: 10px;
}

.nav-menu ul {
margin: 4px 0 0 0;
padding: 10px;
box-shadow: 0px 0px 30px rgba(127, 137, 161, 0.25);
background: #fff;
}

.nav-menu ul li {
transition: 0.3s;
}

.nav-menu ul li a {
padding: 10px;
color: #333;
transition: 0.3s;
display: block;
font-size: 13px;
text-transform: none;
}

.nav-menu ul li:hover>a {
color: #1dc8cd;
}

.nav-menu ul ul {
margin: 0;
}
/* Sections Header
--------------------------------*/

.section-header .section-title {
font-size: 32px;
color: #111;
text-align: center;
font-weight: 400;
}

.section-header .section-description {
text-align: center;
padding-bottom: 40px;
color: #777;
font-style: italic;
}

.section-header .section-divider {
display: block;
width: 60px;
height: 3px;
background: #1dc8cd;
background: linear-gradient(0deg, #1dc8cd 0%, #55fabe 100%);
margin: 0 auto;
margin-bottom: 20px;
}

/* Section with background
--------------------------------*/

.section-bg {
background: #eff5f5;
}

/* About Us Section
--------------------------------*/

#about {
padding: 60px 0;
}

#about .about-img {
height: 510px;
overflow: hidden;
}

#about .about-img img {
margin-left: -15px;
max-width: 100%;
}

@media (max-width: 768px) {
#about .about-img {
height: auto;
}

#about .about-img img {
margin-left: 0;
padding-bottom: 30px;
}
}

#about .content .h2 {
color: #333;
font-weight: 300;
font-size: 24px;
}

#about .content h3 {
color: #777;
font-weight: 300;
font-size: 18px;
line-height: 26px;
font-style: italic;
}

#about .content p {
line-height: 26px;
}

#about .content p:last-child {
margin-bottom: 0;
}

#about .content i {
font-size: 20px;
padding-right: 4px;
color: #1dc8cd;
}

#about .content ul {
list-style: none;
padding: 0;
}

#about .content ul li {
padding-bottom: 10px;
}

/* Product Featuress Section
--------------------------------*/

#features {
background: #fff;
padding: 60px 0 0 0;
}

#features .features-img {
text-align: center;
padding-top: 20px;
}

@media (min-width: 769px) {
#features .features-img {
padding-top: 120px;
margin-top: -200px;
}
}

#features .features-img img {
max-width: 100%;
}

#features .box {
margin-bottom: 15px;
text-align: center;
}

#features .icon {
margin-bottom: 10px;
}

#features .icon i {
color: #666666;
font-size: 40px;
transition: 0.5s;
}

#features .icon i:before {
background: #1dc8cd;
background: linear-gradient(45deg, #1dc8cd 0%, #55fabe 100%);
background-clip: border-box;
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
}

#features .title {
font-weight: 300;
margin-bottom: 15px;
font-size: 22px;
}

#features .title a {
color: #111;
}

#features .description {
font-size: 14px;
line-height: 24px;
margin-bottom: 10px;
}

#features .section-description {
padding-bottom: 10px;
}
/* Our Team Section
--------------------------------*/

#team {
padding: 60px 0;
}

#team .member {
text-align: center;
margin-bottom: 20px;
}

#team .member .pic {
margin-bottom: 15px;
overflow: hidden;
height: 260px;
}

#team .member .pic img {
max-width: 100%;
}

#team .member h4 {
font-weight: 700;
margin-bottom: 2px;
font-size: 18px;
}

#team .member span {
font-style: italic;
display: block;
font-size: 13px;
}

#team .member .social {
margin-top: 15px;
}

#team .member .social a {
color: #b3b3b3;
}

#team .member .social a:hover {
color: #1dc8cd;
}

#team .member .social i {
font-size: 18px;
margin: 0 2px;
}
/* Contact Section
--------------------------------*/

#contact {
box-shadow: 0px 0px 12px 0px rgba(0, 0, 0, 0.1);
padding: 60px 0;
}

#contact .contact-about h3 {
font-size: 36px;
margin: 0 0 10px 0;
padding: 0;
line-height: 1;
font-family: "Montserrat", sans-serif;
font-weight: 300;
letter-spacing: 3px;
text-transform: uppercase;
color: #1dc8cd;
}

#contact .contact-about p {
font-size: 14px;
line-height: 24px;
font-family: "Montserrat", sans-serif;
color: #888;
}

#contact .social-links {
padding-bottom: 20px;
}

#contact .social-links a {
font-size: 18px;
display: inline-block;
background: #fff;
color: #1dc8cd;
line-height: 1;
padding: 8px 0;
margin-right: 4px;
border-radius: 50%;
text-align: center;
width: 36px;
height: 36px;
transition: 0.3s;
border: 1px solid #1dc8cd;
}

#contact .social-links a:hover {
background: #1dc8cd;
color: #fff;
}

#contact .info {
color: #333333;
}

#contact .info i {
font-size: 32px;
color: #1dc8cd;
float: left;
line-height: 1;
}

#contact .info p {
padding: 0 0 10px 42px;
line-height: 28px;
font-size: 14px;
}

#contact .form #sendmessage {
color: #1dc8cd;
border: 1px solid #1dc8cd;
display: none;
text-align: center;
padding: 15px;
font-weight: 600;
margin-bottom: 15px;
}

#contact .form #errormessage {
color: red;
display: none;
border: 1px solid red;
text-align: center;
padding: 15px;
font-weight: 600;
margin-bottom: 15px;
}

#contact .form #sendmessage.show,
#contact .form #errormessage.show,
#contact .form .show {
display: block;
}

#contact .form .validation {
color: red;
display: none;
margin: 0 0 20px;
font-weight: 400;
font-size: 13px;
}

#contact .form input,
#contact .form textarea {
border-radius: 0;
box-shadow: none;
font-size: 14px;
}

#contact .form button[type="submit"] {
background: linear-gradient(45deg, #1de099, #1dc8cd);
border: 0;
border-radius: 20px;
padding: 8px 30px;
color: #fff;
}

#contact .form button[type="submit"]:hover {
cursor: pointer;
}

</style>
`,
      },
    },
  });
  editor.BlockManager.add('Company', {
    media: '<img src="imgs/icons8-company-50.png" width = 50 alt="Company1 Logo">',
    label: 'Company1 block',
    category: 'Landing Pages',
    content: { type: 'company_landing_page' },
  });
};
