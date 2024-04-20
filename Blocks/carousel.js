/* eslint-disable quotes */
carousel = (editor, opts = {}) => {
    editor.Components.addType('carousel', {
        model: {
            defaults: {
                tageName: 'div',
                components: `
                <div class="slideshow-container">
                <div class="mySlides ">
                    <div class="numbertext">1 / 4</div>
                    <img src="https://via.placeholder.com/800x400" alt="">
                    <div class="text">Caption Text</div>
                </div>
        
                <div class="mySlides ">
                    <div class="numbertext">2 / 4</div>
                    <img src="https://via.placeholder.com/800x400" alt="">
                    <div class="text">Caption Two</div>
                </div>
        
                <div class="mySlides ">
                    <div class="numbertext">3 / 4</div>
                    <img src="https://via.placeholder.com/800x400" alt="">
                    <div class="text">Caption Three</div>
                </div>
                <div class="mySlides ">
                <div class="numbertext">4 / 4</div>
                <img src="https://via.placeholder.com/800x400" alt="">
                <div class="text">Caption Four</div>
            </div>
        
                <a class="prev" >❮</a>
                <a class="next" >❯</a>
        
            </div>
            <br>
        
            <div style="text-align:center">
                <span class="dot dot1" ></span>
                <span class="dot dot2" ></span>
                <span class="dot dot3" ></span>
                <span class="dot dot4" ></span>

            </div>
            <style>
            * {
                box-sizing: border-box
            }
            
            body {
                font-family: Verdana, sans-serif;
                margin: 0
            }
            
            .mySlides {
                display: none
            }
            
            img {
                vertical-align: middle;
                width:100%;
            }
            /* Slideshow container */
            
            .slideshow-container {
                max-width: 1000px;
                position: relative;
                margin: auto;
            }
            /* Next & previous buttons */
            
            .prev
             {
                cursor: pointer;
                position: absolute;
                top: 50%;
                width: auto;
                padding: 16px;
                margin-top: -22px;
                color: white;
                font-weight: bold;
                font-size: 18px;
                transition: 0.6s ease;
                border-radius: 0 3px 3px 0;
                user-select: none;
            }
            /* Position the "next button" to the right */
            
            .next {
              cursor: pointer;
              position: absolute;
              top: 50%;
              width: auto;
              padding: 16px;
              margin-top: -22px;
              color: white;
              font-weight: bold;
              font-size: 18px;
              transition: 0.6s ease;
              user-select: none;
              border-radius: 3px 0 0 3px;
              right: 10px; 
            }
            
            .prev:hover,
            .next:hover {
                background-color: rgba(0, 0, 0, 0.8);
            }
            /* Caption text */
            
            .text {
                color: #f2f2f2;
                font-size: 15px;
                padding: 8px 12px;
                position: absolute;
                bottom: 8px;
                width: 100%;
                text-align: center;
            }
            /* Number text (1/3 etc) */
            
            .numbertext {
                color: #f2f2f2;
                font-size: 12px;
                padding: 8px 12px;
                position: absolute;
                top: 0;
            }
            /* The dots/bullets/indicators */
            
            .dot {
                cursor: pointer;
                height: 15px;
                width: 15px;
                margin: 0 2px;
                background-color: #bbb;
                border-radius: 50%;
                display: inline-block;
                transition: background-color 0.6s ease;
            }
 
            /* On smaller screens, decrease text size */
            
            @media only screen and (max-width: 300px) {
                .prev,
                .next,
                .text {
                    font-size: 11px
                }
            }
        </style>
    
      `,

                script: `        let slideIndex = 1;
                showSlides(slideIndex);
        
                function plusSlides(n) {
                    showSlides(slideIndex += n);
                }
        
                function currentSlide(n) {
                    showSlides(slideIndex = n);
                }
                document.querySelector(".prev").addEventListener("click", () => plusSlides(-1));
                document.querySelector(".next").addEventListener("click", () => plusSlides(1))
                document.querySelector(".dot1").addEventListener("click", () => currentSlide(1));
                document.querySelector(".dot2").addEventListener("click", () => currentSlide(2));
                document.querySelector(".dot3").addEventListener("click", () => currentSlide(3));
                document.querySelector(".dot4").addEventListener("click", () => currentSlide(4));


                function showSlides(n) {
                    let i;
                    let slides = document.getElementsByClassName("mySlides");
                    let dots = document.getElementsByClassName("dot");
                    if (n > slides.length) {
                        slideIndex = 1
                    }
                    if (n < 1) {
                        slideIndex = slides.length
                    }
                    for (i = 0; i < slides.length; i++) {
                        slides[i].style.display = "none";
                    }
                    for (i = 0; i < dots.length; i++) {
                        dots[i].className = dots[i].className.replace(" active", "");
                    }
                    slides[slideIndex - 1].style.display = "block";
                    dots[slideIndex - 1].className += " active";

                }`,
            },
        },
    });
    editor.BlockManager.add('carousel', {
        label: 'carousel',
        media: `<img src="./imgs/carousel.png" width=50  />`,
        category: 'Custom',
        content: {
            type: 'carousel',
        },
    });
};