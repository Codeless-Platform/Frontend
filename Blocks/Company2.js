company2 = (editor, opts = {}) => {
  // Company2 Landing Page
  editor.Components.addType('company2_landing_page', {
    model: {
      defaults: {
        tagName: 'main',
        components: `
    <head>
<!-- 
Boxer Template
http://www.templatemo.com/tm-446-boxer
-->
<meta charset="utf-8">
<title>Company - Software Landing Page</title>
<meta http-equiv="X-UA-Compatible" content="IE=Edge">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="keywords" content="">
<meta name="description" content="">

<!-- animate css -->
<link rel="stylesheet" href="css/animate.min.css">
<!-- bootstrap css -->
<link rel="stylesheet" href="css/bootstrap.min.css">
<!-- font-awesome -->
<link rel="stylesheet" href="css/font-awesome.min.css">
<!-- google font -->
<link href='http://fonts.googleapis.com/css?family=Open+Sans:400,300,400italic,700,800' rel='stylesheet' type='text/css'>

<!-- custom css -->
<link rel="stylesheet" href="css/templatemo-style.css">

</head>

<!-- start navigation -->
<nav class="navbar navbar-default navbar-fixed-top templatemo-nav" role="navigation">
    <div class="container">
        <div class="navbar-header">
            <button class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                <span class="icon icon-bar"></span>
                <span class="icon icon-bar"></span>
                <span class="icon icon-bar"></span>
            </button>
            <a href="#" class="navbar-brand">Company Name</a>
        </div>
        <div class="collapse navbar-collapse">
            <ul class="nav navbar-nav navbar-right text-uppercase">
                <li><a href="#home">Home</a></li>
                <li><a href="#feature">Features</a></li>
                <li><a href="#pricing">Pricing</a></li>
                <li><a href="#download">Download</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </div>
    </div>
</nav>
<!-- end navigation -->
<!-- start home -->
<section id="home">
    <div class="overlay">
        <div class="container">
            <div class="row">
                <div class="col-md-1"></div>
                <div class="col-md-10 wow fadeIn" data-wow-delay="0.3s">
                    <h1 class="text-upper">Software Landing Page</h1>
                    <p class="tm-white">Company Name is a fully Responsive, Clean Design, Modern, and Flexible Software Landing Page for startups, businesses and agencies. It is built with HTML5 &amp; CSS3, Bootstrap 3.3.4, Font Awesome 4.3.0, and much more. Designed by <a rel="nofollow" href="http://www.facebook.com/templatemo" target="_parent">templatemo</a>. Images by <a rel="nofollow" href="http://pixabay.com" target="_blank">Pixabay</a></p>
                    <img src="images/software-img.png" class="img-responsive" alt="home img">
                </div>
                <div class="col-md-1"></div>
            </div>
        </div>
    </div>
</section>
<!-- end home -->
<!-- start divider -->
<section id="divider">
    <div class="container">
        <div class="row">
            <div class="col-md-4 wow fadeInUp templatemo-box" data-wow-delay="0.3s">
                <i class="fa fa-laptop"></i>
                <h3 class="text-uppercase">RESPONSIVE LAYOUT</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation. </p>
            </div>
            <div class="col-md-4 wow fadeInUp templatemo-box" data-wow-delay="0.3s">
                <i class="fa fa-twitter"></i>
                <h3 class="text-uppercase">BOOTSTRAP 3.3.4</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation. </p>
            </div>
            <div class="col-md-4 wow fadeInUp templatemo-box" data-wow-delay="0.3s">
                <i class="fa fa-font"></i>
                <h3 class="text-uppercase">GOOGLE FONT</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation. </p>
            </div>
        </div>
    </div>
</section>
<!-- end divider -->

<!-- start feature -->
<section id="feature">
    <div class="container">
        <div class="row">
            <div class="col-md-6 wow fadeInLeft" data-wow-delay="0.6s">
                <h2 class="text-uppercase">Our Software Features</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                <p><span><i class="fa fa-mobile"></i></span>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                <p><i class="fa fa-code"></i>Quis autem velis reprehenderit et quis voluptate velit esse quam.</p>
            </div>
            <div class="col-md-6 wow fadeInRight" data-wow-delay="0.6s">
                <img src="images/software-img.png" class="img-responsive" alt="feature img">
            </div>
        </div>
    </div>
</section>
<!-- end feature -->

<!-- start feature1 -->
<section id="feature1">
    <div class="container">
        <div class="row">
            <div class="col-md-6 wow fadeInUp" data-wow-delay="0.6s">
                <img src="images/software-img.png" class="img-responsive" alt="feature img">
            </div>
            <div class="col-md-6 wow fadeInUp" data-wow-delay="0.6s">
                <h2 class="text-uppercase">More of Your Software</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                <p><span><i class="fa fa-mobile"></i></span>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                <p><i class="fa fa-code"></i>Quis autem velis reprehenderit et quis voluptate velit esse quam.</p>
            </div>
        </div>
    </div>
</section>
<!-- end feature1 -->

<!-- start download -->
<section id="download">
    <div class="container">
        <div class="row">
            <div class="col-md-6 wow fadeInLeft" data-wow-delay="0.6s">
                <h2 class="text-uppercase">Download Our Software</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation. </p>
            </div>
            <div class="col-md-6 wow fadeInRight" data-wow-delay="0.6s">
                <img src="images/software-img.png" class="img-responsive" alt="feature img">
            </div>
        </div>
    </div>
</section>
<!-- end download -->
<!-- start contact -->
<section id="contact">
    <div class="overlay">
        <div class="container">
            <div class="row">
                <div class="col-md-6 wow fadeInUp" data-wow-delay="0.6s">
                    <h2 class="text-uppercase">Contact Us</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation. </p>
                    <address>
                        <p><i class="fa fa-map-marker"></i>36 Street Name, City Name, United States</p>
                        <p><i class="fa fa-phone"></i> 010-010-0110 or 020-020-0220</p>
                        <p><i class="fa fa-envelope-o"></i> info@company.com</p>
                    </address>
                </div>
                <div class="col-md-6 wow fadeInUp" data-wow-delay="0.6s">
                    <div class="contact-form">
                        <form action="#" method="post">
                            <div class="col-md-6">
                                <input type="text" class="form-control" placeholder="Name">
                            </div>
                            <div class="col-md-6">
                                <input type="email" class="form-control" placeholder="Email">
                            </div>
                            <div class="col-md-12">
                                <input type="text" class="form-control" placeholder="Subject">
                            </div>
                            <div class="col-md-12">
                                <textarea class="form-control" placeholder="Message" rows="4"></textarea>
                            </div>
                            <div class="col-md-8">
                                <input type="submit" class="form-control text-uppercase" value="Send">
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
<!-- end contact -->
<footer>
    <div class="container">
        <div class="row">
            <p>Copyright © 2084 Your Company Name</p>
        </div>
    </div>
</footer>




<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous">
<style>
body
{
background: #fff;
font-family: 'Open Sans', sans-serif;
font-weight: 300;
position: relative;
width: 100%;
height: 100%;
overflow-x: hidden;
}

.tm-white a {
color: #fff;
}

/* start h1 group */
h1 { 
margin-top: 0;
margin-bottom: 25px; 
}
h1,
h2,
h3,
h4
{
font-weight: bold;
}
/* end h1 group */
p { line-height: 1.6em; }
/* img */
img
{
max-width: 100%;
height: auto;
}
/* img */

/* overlay */
.overlay 
{
width: 100%;
height: 100%;
background: rgba(0, 0, 0, 0.4);
padding-top: 90px;
padding-bottom: 90px;
}  
/* over lay */

/* start page container */
@media (min-width: 768px) {
.container {
width: 700px;
}
}
@media (min-width: 992px) {
.container {
width: 900px;
}
}
@media (min-width: 1200px) {
.container {
width: 1000px;
}
}
/* end page container */


/* start navigation */
.navbar-default
{
background: #fff;
border: none;
box-shadow: 0px 2px 8px 0px rgba(50, 50, 50, 0.08);
margin: 0!important;
}
.navbar-default .navbar-brand
{
color: #28a7e9;
font-size: 30px;
font-weight: bold;
height: 70px;
line-height: 35px;
}
.navbar-default .nav li a
{
color: #666;
font-size: 13px;
font-weight: bold;
height: 70px;
line-height: 40px;
}
.navbar-default .nav li a:hover,
.navbar-default .nav li a:focus,
.navbar-default .nav li a.current
{
color: #28a7e9;
}

.navbar-default .navbar-toggle
{
border: none;
padding-top: 20px;
}
.navbar-default .navbar-toggle .icon-bar
{
background: #28a7e9;
border-color: transparent;
}
.navbar-default .navbar-toggle:hover,
.navbar-default .navbar-toggle:focus { background-color: transparent }
/* end navigation */

/* start home */       
#home
{
background: url('../images/home-bg.jpg') no-repeat;
background-size: cover;
color: #fff;
margin-top: 70px;
text-align: center;
width: 100%;
}
#home p
{
font-weight: 400;
font-style: italic;
line-height: 2em;
}
#home img
{
display: inline-block;
margin-top: 30px;
}
/* end home */

/* start divider */
#divider
{
text-align: center;
padding-top: 80px;
padding-bottom: 80px;
}
#divider .fa
{
color: #28a7e9;
font-size: 60px;
}
#divider h3
{
font-size: 20px;
}
/* end divider */

/* start feature */
#feature
{
background: #f8f8f8;
padding-top: 80px;
padding-bottom: 80px;
}
#feature p
{
padding-top: 10px;
}
#feature span
{
float: left;
}
#feature .fa
{
background: #28a7e9;
border-radius: 50%;
color: #fff;
display: inline-block;
width: 40px;
height: 40px;
line-height: 40px;
text-align: center;
margin-right: 20px;
}
/* end feature */

/* start feature1 */
#feature1
{
padding-top: 60px;
padding-bottom: 60px;
}
#feature1 p
{
padding-top: 10px;
}
#feature1 span
{
float: left;
}
#feature1 .fa
{
background: #28a7e9;
border-radius: 50%;
color: #fff;
display: inline-block;
width: 40px;
height: 40px;
line-height: 40px;
text-align: center;
margin-right: 20px;
}
/* end feature1 */
@media screen and ( max-width: 991px ) {
.templatemo-box {
margin-bottom: 30px;
}
#pricing .active {
bottom: 0;
}
.pricing {
margin-bottom: 20px;
}
#feature img, #download img {
margin-top: 30px;
}
#feature1 img {
margin-bottom: 30px;
}
}
@media screen and ( max-width: 767px ) {
.navbar-default .nav li a {
height: auto;
line-height: 2em;
}
#feature, #pricing, #download {
padding-top: 20px;
padding-bottom: 40px;
}
#contact .overlay {
padding-top: 40px;
}
}
/* start media 360 */
@media screen and ( max-width: 360px ){
.pricing
{
    padding-bottom: 40px;
}
}
/* end media 360 */
</style>
    `,
      },
    },
  });
  editor.BlockManager.add('Company2', {
    label: 'Company2 Block',
    media: '<img src="imgs/icons8-company-50.png" width = 50 alt="Company1 Logo">',
    category: 'Landing Pages',
    content: { type: 'company2_landing_page' },
  });
};
