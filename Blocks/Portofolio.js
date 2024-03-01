portofolio = (editor, opts = {}) => {
  // Portfolio
  editor.Components.addType('portfolio', {
    model: {
      defaults: {
        tagName: 'main',
        components: `
    
    
    <head>


    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Portfolio</title>
    <link rel="icon" type="imgs/png" href="imgs/logo512.png">
    <link rel="stylesheet" href="style.css">

    </head>



<body>
<div id="header">
    <div class="container">
        <nav>
        <img src="imgs/Logo.jpg" class="logo">
            <ul id="sidememu">
                <li><a href="#header">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#services">My Skills</a></li>
                <li><a href="#portfolio">Projects</a></li>
                <li><a href="#contact">Contact</a></li>
                <i class="fa-solid fa-xmark" onclick="closememu()"></i>
            </ul>
            <i class="fa-solid fa-bars" onclick="openmemu()"></i>
        </nav>
        <div class="header-text animated animatedFadeInUp fadeInUp">
            
            <h1>Hi i'm -------<br>from Egypt.</h1>
        </div>  
    </div>
</div>
<!-- --------about-------->
<div id="about">
    <div class="container">
        <div class="row">
            <div class="about-col-1">
                <img src="imgs/user.jpg">
            </div>
            <div class="about-col-2">
                <h1 class="sub-title">About Me</h1>
                <p>I am a dedicated and enthusiastic developer. I am pursuing B.Tech from JISCE, Kalyani. I have
                    always been fascinated by technology and its potential to change the world, and that's what led
                    me to pursue a career in computer science.</p>
                <p><br>Apart from academics, if I'm learning or developing anything, I'll be completely focused on
                    it, even if it takes months. I'm eager to learn about new technologies in the market. I'm a
                    voracious reader. It could be anything from self-help books to blogs or Twitter threads.</p>
                <p><br>In the future, I aspire to become a software developer and contribute to the development of
                    innovative solutions that can make a difference in people's lives.</p>
                <div class="tab-titles">
                    <p class="tab-links active-link" onclick="opentab('skills')">Skills</p>
                    <p class="tab-links" onclick="opentab('experience')">Experience</p>
                    <p class="tab-links" onclick="opentab('education')">Education</p>
                </div>
                <div class="tab-contents active-tab" id="skills">
                    <ul>
                        <li><span>Skill-1</span><br>Django, BNLP and machine learning.</li>
                        <li><span>Skill-2</span><br>Problem solving and object oriented programming</li>
                        <li><span>Skill-3</span><br>Building websites using HTML,CSS and JS</li>
                    </ul>
                </div>
                <div class="tab-contents" id="experience">
                    <ul>
                        <li><span>May 2023 - Jul 2023 <strong>:</strong> Remote</span><br>AI–ML Virtual Internship at <strong>AICTE – NEAT</strong></li>
                        <li><span>May 2023 <strong>:</strong> On-site</span><br>Artificial Intelligence (AI) Training at <strong>ARDENT COMPUTECH PVT. LTD.</strong></li>
                        <li><span>Aug 2022 <strong>:</strong> Remote</span><br>Android Application Development Internship at <strong>MTA LEARNING PVT.LTD.</strong></li>
                    </ul>
                </div>
                <div class="tab-contents" id="education">
                    <ul>
                        <li><span>Oct 2021 – Expected Aug 2025</span><br>B.Tech on Computer Science from <strong>JIS College of Engineering</strong></li>
                        <li><span>Jul 2019 – Aug 2021</span><br>12th Grade on Pure Science from <strong>Bandel Vidyamandir High School</strong></li>
                        <li><span>Jan 2013 – Jun 2019</span><br>10th Grade from <strong>Kanailal Vidyamandir (English Section)</strong></li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</div>
<!-- -------services--------- -->
<div id="services">
    <div class="container">
        <h1 class="sub-title">My Skills</h1>
        <div class="services-list">
            <div>
                <i class="fa-solid fa-code"></i>
                <h2>Skill-1</h2>
                <p>As a front-end developer, I can create and implement the user interface of a website or web
                    application. This involves working with HTML, CSS, and JavaScript to design and develop web
                    pages that are visually appealing, responsive, and user-friendly. </p>
                <a href="#services">Learn more</a>
            </div>
            <div>
                <i class="fa-brands fa-python"></i>
                <h2>Skill-2</h2>
                <p>As a Python developer, I can design, develop, and maintain software applications using the Python
                    programming language. This could involve building web applications like Django or implementing
                    machine learning algorithms, depending on the specific job requirements. </p>
                <a href="https://github.com/ThisIs-Developer/Python" target="_blank">Learn more</a>
            </div>
            <div>
                <i class="fa-solid fa-bug"></i>
                <h2>Skill-3</h2>
                <p>As a C/C++ developer, I can do problem solving using the C and C++ programming languages. This
                    could involve developing pointer structure file handling and object oriented programming,
                    depending on the specific job requirements. </p>
                <a href="https://github.com/ThisIs-Developer/C-Plus-Plus" target="_blank">Learn more</a>
            </div>
        </div>
    </div>
</div>
<!-- -------portfolio------ -->
<div id="portfolio">
    <div class="container">
        <h1 class="sub-title">My Projects</h1>
        <div class="work-list">
            <div class="work">
                <img src="imgs/work_1.jpg">
                <div class="layer">
                    <h3>Sentiment Analysis of COVID-19 Tweets</h3>
                    <p>
                        Sentiment analysis of COVID-19 tweets aims to determine the emotional tone and attitudes
                        towards the pandemic using natural language processing techniques.</p>
                    <a href="https://github.com/ThisIs-Developer/Sentiment-Analysis-of-Covid-19-Tweets"
                        target="_blank"><i class="fa-solid fa-arrow-up-right-from-square"></i></a>
                </div>
            </div>
            <div class="work">
                <img src="imgs/work_2.jpg">
                <div class="layer">
                    <h3>Sleep Prevention Device</h3>
                    <p>A sleep prevention device is a tool designed to keep individuals awake and alert, often used
                        in safety-critical occupations.</p>
                    <a href="https://github.com/ThisIs-Developer/Sleep-Prevention-Device" target="_blank"><i
                            class="fa-solid fa-arrow-up-right-from-square"></i></a>
                </div>
            </div>
            <div class="work">
                <img src="imgs/work_3.jpg">
                <div class="layer">
                    <h3>Bengali Natural Language Processing(BNLP)</h3>
                    <p>Bengali Natural Language Processing (BNLP) is the application of computational techniques to
                        analyze, understand and generate Bengali language.</p>
                    <p><br>Currently under development </p>
                    <a href="#portfolio"><i class="fa-solid fa-arrow-up-right-from-square"></i></a>
                </div>
            </div>
        </div>
        <a href="https://github.com/ThisIs-Developer?tab=repositories" class="btn">See more</a>
    </div>
</div>
<!-- ------contact------ -->
<div id="contact">
    <div class="container">
        <div class="row">
            <div class="contact-left">
                <h1 class="sub-title">Contact me</h1>
                <p><i class="fa-solid fa-envelope"></i>fatma624@gmail.com</p>
                <div class="social-icons">
                    <a href="https://www.facebook.com/iambaivab/" target="_blank"><i
                            class="fa-brands fa-facebook"></i></a>
                    <a href="https://www.instagram.com/iam_baivab/" target="_blank"><i
                            class="fa-brands fa-instagram"></i></i></a>
                    <a href="https://twitter.com/ThisIsDeveloper" target="_blank"><i
                            class="fa-brands fa-twitter"></i></a>
                    <a href="https://www.linkedin.com/in/baivabsarkar" target="_blank"><i
                            class="fa-brands fa-linkedin"></i></a>
                    <a href="https://github.com/ThisIs-Developer" target="_blank"><i
                            class="fa-brands fa-github"></i></a>
                    <a href="https://dev.to/thisisdeveloper" target="_blank"><i 
                            class="fa-brands fa-dev"></i></a>
                </div>
                <a href="imgs/Resume-BAIVAB SARKAR.pdf" download class="btn btn2" class="btn btn2">Download CV</a>
            </div>
            <div class="contact-right">
                <form name="submit-to-google-sheet">
                    <input type="text" name="Name" placeholder="Your Name" required>
                    <input type="email" name="Email" placeholder="Your Email" required>
                    <textarea name="Message" rows="6" placeholder="Your Message"></textarea>
                    <button type="submit" class="btn btn2">Submit</button>
                </form>
                <span id="wait-msg"></span>
                <span id="msg"></span>
            </div>
        </div>
    </div>
    <div class="copyright">
        <p>Copyright © 2023 Baivab.</p>
    </div>
</div>
</body>

    

<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous">


<style>

*{
margin: 0;
padding: 0;
font-family: 'Poppins',sans-serif;
box-sizing: border-box;
}
html{
scroll-behavior: smooth;
}
body{
background: black;
color: #fff;
}
#header{
width: 100%;
height: 110vh; /* change here */
background-image: url(imgs/ok_4.jpg);
/* background-size: cover;
background-position: center; */
background-repeat: no-repeat;
background-position: right;
background-size: 80%;
}
@keyframes fadeInUp {
from {
    transform: translate3d(0,40px,0)
}

to {
    transform: translate3d(0,0,0);
    opacity: 1
}
}
@-webkit-keyframes fadeInUp {
from {
    transform: translate3d(0,100px,0)
}

to {
    transform: translate3d(0,0,0);
    opacity: 1
}
}
.animated {
animation-duration: 2.5s;
animation-fill-mode: both;
-webkit-animation-duration: 2.5s;
-webkit-animation-fill-mode: both
}
.animatedFadeInUp {
opacity: 0
}
.fadeInUp {
opacity: 0;
animation-name: fadeInUp;
-webkit-animation-name: fadeInUp;
}
.container{
padding: 10px 10%;
/* padding: 0px 10%; */
}
nav{
display: flex;
align-items: center;
justify-content: space-between;
flex-wrap: wrap;
}
.logo{
width: 140px;
}
nav ul li{
display: inline-block;
list-style: none;
margin: 10px 20px;
animation: fadeInRight 1s ease-in-out;
}
@keyframes fadeInRight {
from {
opacity: 0;
transform: translateX(300px);
}
to {
opacity: 1;
}
}

nav ul li a{
color: #fff;
text-decoration: none;
font-size: 18px;
position: relative;
}
nav ul li a::after{
content: '';
width: 0%;
height: 3px;
background: #ff004f;
position: absolute;
left: 0;
bottom: -6px;
transition: 0.5s;
}
nav ul li a:hover::after{
width: 100%;
}
.header-text{
margin-top: 20%;
font-size: 30px;
}
.header-text h1{
font-size: 60px;
margin-top: 20px;
}
.header-text h1 span{
background: linear-gradient(to right, rgba(255,0,79,1) 38%, rgba(64,88,205,1) 77%);
-webkit-text-fill-color: transparent;
-webkit-background-clip: text;
}
/* -------about-------- */
#about{
/* padding: 80px 0; */
padding: 40px 0;
color: #ababab;
}
.row{
display: flex;
justify-content: space-between;
flex-wrap: wrap;
}
.about-col-1{
flex-basis: 35%;
}
.about-col-1 img{
width: 100%;
border-radius: 15px;
}
.about-col-2{
flex-basis: 60%;
}
.sub-title{
font-size: 60px;
font-weight: 600;
/* color: #fff; */
color: #ff004f;
/* background: linear-gradient(90deg, rgb(154, 59, 218) 0%, rgba(253,29,29,1) 50%, rgba(252,176,69,1) 100%); */
    /*-webkit-text-fill-color: transparent; */
/*-webkit-background-clip: text;*/
}
.tab-titles{
display: flex;
margin: 20px 0 40px;
}
.tab-links{
margin-right: 50px;
font-size: 18px;
font-weight: 500;
cursor: pointer;
position: relative;
}
.tab-links::after{
content: '';
width: 0;
height: 3px;
background: #ff004f;
position: absolute;
left: 0;
bottom: -8px;
transition: 0.5s;
}
.tab-links.active-link::after{
width: 50%;
}
.tab-contents ul li{
list-style: none;
margin: 10px 0;
}
.tab-contents ul li span{
color: #ff004f;
font-size: 14px;
}
.tab-contents{
display: none;
}
.tab-contents.active-tab{
display: block;
}
/* -------services--------- */
#services{
padding: 30px 0;
}
.services-list{
display: grid;
grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
grid-gap: 40px;
margin-top: 50px;
}
.services-list div{
background: #262626;
padding: 40px;
font-size: 13px;
font-weight: 300;
border-radius: 10px;
transition: background 0.5s, transform 0.5s;
}
.services-list div i{
font-size: 50px;
margin-bottom: 30px;
}
.services-list div h2{
font-size: 30px;
font-weight: 500;
margin-bottom: 15px;
}
.services-list div a{
text-decoration: none;
color: #fff;
font-size: 12px;
margin-top: 20px;
display: inline-block;
}
.services-list div:hover{
background: #ff004f;
transform: translate(-10px);
}
#portfolio{
padding: 50px 0;
}
.work-list{
display: grid;
grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
grid-gap: 40px;
margin-top: 50px;
}
.work{
border-radius: 10px;
position: relative;
overflow: hidden;
}
.work img{
width: 100%;
border-radius: 10px;
display: block;
transition: transform 0.5s;
}
.layer{
width: 100%;
height: 0;
background: linear-gradient(rgba(0,0,0,0.6),#ff004f);
border-radius: 10px;
position: absolute;
left: 0;
bottom: 0;
overflow: hidden;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
padding: 0 40px;
text-align: center;
font-size: 14px;
transition: height 0.5s;
}
.layer h3{
font-weight: 500;
margin-bottom: 20px;
}
.layer a{
margin-top: 20px;
color: #ff004f;
text-decoration: none;
font-size: 18px;
line-height: 60px;
background: #fff;
width: 60px;
height: 60px;
border-radius: 50%;
text-align: center;
}
.work:hover img{
transform: scale(1.1);
}
.work:hover .layer{
height: 100%;
}
.btn{
display: block;
margin: 50px auto;
width: fit-content;
border: 1px solid #ff004f;
padding: 14px 50px;
border-radius: 6px;
text-decoration: none;
color: #fff;
transition: background 0.5s;
}
.btn:hover{
background: #ff004f;
}
/* ------contact------ */
.contact-left{
flex-basis: 35%;
}
.contact-right{
flex-basis: 60%;
}
.contact-left p{
margin-top: 30px;
}
.contact-left p i{
color: #ff004f;
margin-right: 15px;
font-size: 25px;
}
.social-icons{
margin-top: 30px;
}
.social-icons a{
text-decoration: none;
font-size: 30px;
margin-right: 15px;
color: #ababab;
display: inline-block;
transition: transform 0.5s;
}
.social-icons a:hover{
color: #ff004f;
transform: translateY(-5px);
}
.btn.btn2{
display: inline-block;
background: #ff004f;
}
.contact-right form{
width: 100%;
}
form input,form textarea{
width: 100%;
border: 0;
outline: none;
background: #262626;
padding: 15px;
margin: 15px 0;
color: #fff;
font-size: 18px;
border-radius: 6px;
}
form .btn2{
padding: 14px 60px;
font-size: 18px;
margin-top: 20px;
cursor: pointer;
}
.copyright{
width: 100%;
text-align: center;
padding: 25px 0;
background: #262626;
font-weight: 300;
margin-top: 20px;
}
.copyright i{
color: #ff004f;
}
/* ------css for small screen------ */
nav .fa-solid{
display: none;
}
@media only screen and (max-width: 600px){
#header{
    background-image: url(imgs/back_new.jpg);
}
.header-text{
    /* margin-top: 670px;
    font-size: 16px; */
    margin-top: 450px;
    font-size: 25px;
}
.header-text h1{
    font-size: 45px;
}
.header-text h1 span{
    background: linear-gradient(to right, rgba(255,0,79,1) 38%, rgb(23, 55, 218) 77%);
    -webkit-text-fill-color: transparent;
    -webkit-background-clip: text;
}
nav .fa-solid{
    display: block;
    font-size: 25px;
}
nav ul{
    background: #ff004f;
    position: fixed;
    top: 0;
    right: -200px;
    width: 200px;
    height: 100vh;
    padding-top: 50px;
    z-index: 2;
    transition: right 0.5s;
}
nav ul li{
    display: block;
    margin: 25px;
}
nav ul .fa-solid{
    position: absolute;
    top: 25px;
    left: 25px;
    cursor: pointer;
}
.sub-title{
    font-size: 40px
}
.about-col-1, .about-col-2{
    flex-basis: 100%;
}
.about-col-1{
    margin-bottom: 30px;
}
.about-col-2{
    font-size: 14px;
}
.tab-links{
    font-size: 16px;
    margin-right: 20px;
}
.contact-left, .contact-right{
    flex-basis: 100%;
}
.copyright{
    font-size: 14px;
}
#header{
    width: 100%;
    height: 110vh; /* change here */
    /* background-size: cover; */
    /* background-position: center; */
    background-size: 110%;
}
@keyframes fadeInUp {
    from {
        transform: translate3d(0,40px,0)
    }

    to {
        transform: translate3d(0,0,0);
        opacity: 1
    }
}
@-webkit-keyframes fadeInUp {
    from {
        transform: translate3d(0,100px,0)
    }

    to {
        transform: translate3d(0,0,0);
        opacity: 1
    }
}
.animated {
    animation-duration: 2.5s;
    animation-fill-mode: both;
    -webkit-animation-duration: 2.5s;
    -webkit-animation-fill-mode: both
}
.animatedFadeInUp {
    opacity: 0
}
.fadeInUp {
    opacity: 0;
    animation-name: fadeInUp;
    -webkit-animation-name: fadeInUp;
}
}
#wait-msg{
color: #61b752;
margin-top: -40px;
display: block;
padding-bottom: 6%;
}
#msg{
color: #61b752;
margin-top: -40px;
display: block;
}
@media (max-width: 600px) {
#msg {
    padding-top: 7%;
}
}
</style>`,
      },
    },
  });
  editor.BlockManager.add('portfolio', {
    label: 'Portfolio Block',
    media: '<img src="imgs/icons8-company-50.png" width = 50 alt="Company1 Logo">',
    category: 'Portfolio',
    content: { type: 'portfolio' },
  });
};
