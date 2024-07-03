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
              
      `,
        styles: `  * {
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
            }`,

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
    label: 'Carousel',
    media: `
    <svg version="1.0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" preserveAspectRatio="xMidYMid meet">
        <g transform="translate(0,512) scale(0.1,-0.1)" fill="currentColor" stroke="none">
            <path d="M1101 4684 c-30 -8 -69 -23 -86 -34 -48 -30 -114 -105 -138 -158
            l-22 -47 0 -1460 0 -1460 25 -50 c36 -74 114 -148 183 -173 l58 -22 1439 0
            1439 0 58 22 c69 25 147 99 183 173 l25 50 0 1460 0 1460 -28 57 c-34 69 -118
            149 -184 174 -46 18 -111 19 -1473 21 -1225 2 -1433 0 -1479 -13z m2869 -174
            c41 -11 94 -61 109 -103 7 -18 11 -157 11 -383 l0 -354 -1530 0 -1530 0 0 355
            c0 280 3 363 14 388 17 41 65 85 102 97 41 12 2780 12 2824 0z m118 -1983 l-3
            -964 -28 -36 c-55 -72 67 -67 -1497 -67 -1564 0 -1442 -5 -1497 67 l-28 36 -3
            964 -2 963 1530 0 1530 0 -2 -963z"/>
            <path d="M1548 4347 c-178 -50 -246 -275 -128 -419 90 -109 279 -118 384 -20
            45 43 76 117 76 187 0 174 -165 298 -332 252z m130 -203 c67 -75 -42 -171
            -113 -99 -29 28 -32 61 -9 93 33 47 82 49 122 6z"/>
            <path d="M2184 4350 c-56 -23 -72 -103 -29 -145 l24 -25 381 0 381 0 24 25
            c33 32 33 84 1 122 l-24 28 -369 2 c-202 1 -378 -2 -389 -7z"/>
            <path d="M2193 4013 c-60 -12 -83 -104 -38 -148 l24 -25 254 0 254 0 22 24
            c33 35 31 90 -3 125 l-26 26 -233 1 c-127 1 -242 0 -254 -3z"/>
            <path d="M1595 3241 c-91 -23 -171 -89 -208 -170 -30 -64 -30 -187 -1 -252 46
            -99 138 -165 247 -176 150 -15 279 74 322 222 53 181 -82 369 -274 381 -31 2
            -69 0 -86 -5z m135 -200 c37 -26 61 -81 54 -120 -9 -42 -56 -89 -99 -97 -77
            -14 -155 64 -141 141 8 39 55 91 89 98 32 7 68 -1 97 -22z"/>
            <path d="M2926 2980 c-40 -12 -46 -19 -348 -357 -148 -167 -272 -303 -275
            -303 -4 0 -57 50 -119 110 -118 115 -157 140 -221 140 -73 -1 -110 -30 -344
            -266 -263 -267 -259 -260 -259 -438 0 -129 17 -178 71 -217 l34 -24 1083 -3
            c1215 -3 1128 -8 1180 71 l27 41 0 225 c0 215 -1 228 -22 268 -37 68 -616 714
            -665 741 -42 23 -91 27 -142 12z m356 -505 c156 -177 287 -329 291 -339 4 -10
            7 -89 7 -177 l0 -159 -1020 0 -1020 0 0 82 0 82 212 213 213 213 120 -119 c66
            -65 130 -124 142 -130 39 -20 126 -14 164 12 19 12 159 163 313 335 153 172
            282 312 286 310 4 -2 135 -147 292 -323z"/>
            <path d="M478 3412 c-29 -12 -449 -405 -464 -434 -20 -38 -18 -127 4 -159 9
            -14 91 -95 182 -179 91 -84 188 -175 217 -202 44 -41 58 -48 93 -48 55 0 90
            34 90 87 0 36 -8 45 -132 163 -73 69 -165 157 -205 195 l-72 70 195 180 c108
            99 200 188 205 197 16 29 10 76 -13 102 -24 27 -71 40 -100 28z"/>
            <path d="M4574 3410 c-61 -24 -72 -102 -21 -154 25 -26 332 -313 370 -346 5
            -4 -84 -94 -197 -200 -205 -191 -206 -193 -206 -234 0 -31 6 -48 23 -64 30
            -28 70 -36 100 -20 33 17 426 381 455 421 26 37 30 122 8 165 -16 29 -436 423
            -464 434 -23 9 -43 8 -68 -2z"/>
            <path d="M1413 1092 c-146 -58 -233 -197 -220 -351 11 -129 84 -234 200 -287
            78 -35 182 -39 267 -10 77 27 170 120 200 201 31 84 25 199 -14 278 -34 70
            -110 139 -182 166 -69 26 -190 28 -251 3z m196 -177 c98 -50 119 -173 44 -256
            -67 -74 -160 -74 -234 0 -102 102 -28 270 119 271 24 0 56 -7 71 -15z"/>
            <path d="M2460 1101 c-59 -19 -110 -53 -156 -104 -62 -68 -88 -138 -87 -232 1
            -139 69 -247 191 -307 60 -30 75 -33 152 -33 108 0 182 32 252 106 93 99 120
            253 64 374 -33 73 -94 138 -161 173 -41 21 -66 26 -140 29 -49 1 -101 -1 -115
            -6z m168 -185 c68 -36 107 -113 92 -180 -23 -103 -129 -160 -222 -118 -128 56
            -135 219 -14 293 37 22 106 25 144 5z"/>
            <path d="M3453 1089 c-70 -27 -146 -97 -179 -166 -39 -79 -45 -194 -14 -278
            30 -81 123 -174 200 -201 133 -46 283 -11 375 87 68 73 88 126 89 234 1 83 -2
            96 -32 157 -36 73 -87 124 -161 160 -66 33 -205 36 -278 7z m203 -175 c100
            -47 123 -178 45 -255 -74 -74 -167 -74 -234 0 -122 135 25 333 189 255z"/>
        </g>
    </svg>
`,
    category: 'Advanced',
    content: {
      type: 'carousel',
    },
  });
};
