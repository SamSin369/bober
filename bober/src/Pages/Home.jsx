import React from 'react'
import '../PageStyles/Home.css'
import $ from "jquery"
import "../resources/videos/boberVid.mp4"
import bgVid from "../resources/videos/boberVid.mp4"

import boberLogo from "../resources/images/boberLogo.png"
import boberContent1 from "../resources/videos/boberContent1.mp4"
import boberContent2 from "../resources/videos/boberContent2.mp4"
import boberContent3 from "../resources/videos/boberContent3.png"

import {Accordion, AccordionItem} from '../components/Accordion'

const Home = () => {

    document.addEventListener('scroll', function (event) {

        var underlines = document.querySelectorAll(".underline");
        var y = window.scrollY
    
        console.log(y)
        if (y <= 500) {
            for (var i = 0; i < underlines.length; i++) {
                underlines[i].style.transform = 'translate3d(' + 1 * 100 + '%,0,0)';
            }
    
        } else if (y <= 675 || y <= 1125) {
            for (var i = 0; i < underlines.length; i++) {
                underlines[i].style.transform = 'translate3d(' + 2 * 100 + '%,0,0)';
            }
    
        } else {
            for (var i = 0; i < underlines.length; i++) {
                underlines[i].style.transform = 'translate3d(' + 3 * 100 + '%,0,0)';
            }
    
        }
    }, true /*Capture event*/);
    
    
    
    
    
    function ul(index) {
    
        var jumbo = document.querySelector(".style-cards");
        var faq = document.querySelector(".accordion");
        var underlines = document.querySelectorAll(".underline");
    
        for (var i = 0; i < underlines.length; i++) {
            underlines[i].style.transform = 'translate3d(' + index * 100 + '%,0,0)';
        }
    
    
    
    
    
        if (index === 0) {
            window.scroll({
                top: 0,
                left: 0,
                behavior: 'smooth'
            });
        } else if (index === 1) {
            jumbo.scrollIntoView({ behavior: 'smooth', block: 'start', inline: "start" });
            document.getElementById("main").scrollTop -= 50;
        } else if (index === 2) {
            faq.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    }
    
    var accordion = (function () {
    
        var $accordion = $('.js-accordion');
        var $accordion_header = $accordion.find('.js-accordion-header');
        var $accordion_item = $('.js-accordion-item');
    
        // default settings
        var settings = {
            // animation speed
            speed: 400,
    
            // close all other accordion items if true
            oneOpen: false
        };
    
        return {
            // pass configurable object literal
            init: function ($settings) {
                $accordion_header.on('click', function () {
                    accordion.toggle($(this));
                });
    
                $.extend(settings, $settings);
    
                // ensure only one accordion is active if oneOpen is true
                if (settings.oneOpen && $('.js-accordion-item.active').length > 1) {
                    $('.js-accordion-item.active:not(:first)').removeClass('active');
                }
    
                // reveal the active accordion bodies
                $('.js-accordion-item.active').find('> .js-accordion-body').show();
            },
            toggle: function ($this) {
    
                if (settings.oneOpen && $this[0] != $this.closest('.js-accordion').find('> .js-accordion-item.active > .js-accordion-header')[0]) {
                    $this.closest('.js-accordion')
                        .find('> .js-accordion-item')
                        .removeClass('active')
                        .find('.js-accordion-body')
                        .slideUp()
                }
    
                // show/hide the clicked accordion item
                $this.closest('.js-accordion-item').toggleClass('active');
                $this.next().stop().slideToggle(settings.speed);
            }
        }
    })();
    
    $(document).ready(function () {
        accordion.init({ speed: 300, oneOpen: true });
    });
    
    $(document).ready(function () {
        var underlines = document.querySelectorAll(".underline");
    
    
        for (var i = 0; i < underlines.length; i++) {
            underlines[i].style.transform = 'translate3d(' + 1 * 100 + '%,0,0)';
        }
    
    
    
    })
    // Activate WOW.js plugin for animation on scrol

    // new WOW().init();


    return (
<html>
<head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />

    <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
    <link rel="preconnect" href="https://fonts.googleapis.com"/>
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
    <link href="https://fonts.googleapis.com/css2?family=Rajdhani&display=swap" rel="stylesheet"/>
    

        <link rel="stylesheet" href="~/lib/bootstrap/dist/css/bootstrap.css" />
        <link rel="stylesheet" href="~/lib/font-awesome/css/font-awesome.css" />
        <link rel="stylesheet" href="~/css/animate.css" />
        <link rel="stylesheet" href="~/css/style.css" asp-append-version="true" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css" integrity="sha512-1ycn6IcaQQ40/MKBW2W4Rhis/DbILU74C1vSrLJxCq57o941Ym01SwNsOMqvEBFlcgUa6xLiPY/NS5R+E6ztJQ==" crossorigin="anonymous" referrerpolicy="no-referrer" />

 
        <link rel="stylesheet" href="~/lib/bootstrap/dist/css/bootstrap.min.css" />
        <link rel="stylesheet" href="~/lib/font-awesome/css/font-awesome.min.css" />
        <link rel="stylesheet" href="~/css/animate.css" />
        <link rel="stylesheet" href="~/css/style.css" asp-append-version="true" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css" integrity="sha512-1ycn6IcaQQ40/MKBW2W4Rhis/DbILU74C1vSrLJxCq57o941Ym01SwNsOMqvEBFlcgUa6xLiPY/NS5R+E6ztJQ==" crossorigin="anonymous" referrerpolicy="no-referrer" />
        <script src="~/lib/jquery/dist/jquery.js"></script>
        <script src="~/lib/Popper/popper.min.js"></script>
        <script src="~/lib/bootstrap/dist/js/bootstrap.js"></script>
        <script src="~/lib/metisMenu/dist/jquery.metisMenu.js"></script>
        <script src="~/lib/slimScroll/jquery.slimscroll.js"></script>
        <script src="~/lib/pace/pace.js"></script>
        <script src="~/lib/wow/wow.min.js"></script>
        <script src="~/js/script.js" asp-append-version="true"></script>
        <script src="https://kit.fontawesome.com/4d115d40f1.js" crossorigin="anonymous"></script>

</head>



<body id="landingBody">
    <main id="main">
       

        <nav id="topNav">
            <img src={boberLogo} alt="Netflix Logo" id="homeLogo"/>
            <div class="underline" style={{transform: "translate3d(300%, 0px, 0px)"}}></div>

            <a class="nav-link-glitch" onclick="ul(0)">Главное</a><a class="nav-link-glitch" onclick="ul(1)">Что мы делаем?</a><a class="nav-link-glitch" onclick="ul(2)">Часто Задывемые Вопросы</a>


        </nav>
        <a class="neon-button signin-btn" id="signInBro" asp-area="Identity" asp-page="/Account/Login">Войти</a>


        <header class="showcase">


            <div class="showcase-top">


                </div>
            <video autoPlay muted loop id="showCaseVideo">
                <source src={bgVid} type="video/mp4" style={{width:"100% !important", height: "100% !important"}}/>
            </video>

            <div class="showcase-content">



                <h1>Деньги Даром!</h1>
                <h3>Все на платформе Бобер. абсолютно бесплатно</h3>
                <p>Вы готовы? Нажмите на кнопку снизу чтобы подать заявку на участие</p>
                <div id="landingBtnWrap">
                    <a class="cybr-landing-btn" asp-area="Identity" asp-page="/Account/Register" style={{paddingTop: "10px", paddingBottom: "10px", paddingLeft: "20px", paddingRight: "20px !important"}}>
                        Подать Заявку_ <i class="fas fa-angle-right"></i><span aria-hidden>_</span>
                        <span aria-hidden class="cybr-landing-btn__glitch">Подать Заявку_ <i class="fas fa-angle-right"></i>_ </span>
                    </a>
               
                  
                </div>
            </div>
        </header>

        <section class="style-cards">

            <div class="card-1">
                <div class="desc-1">
                    <h1>Участвуй На Любом Устройстве</h1>
                    <h3>Регистрируйся, участвуй, и получай деньги в любом точке мира в любое время!</h3>
                </div>

                <video class="video-1" autoPlay playsInLine muted loop><source src={boberContent1} type="video/mp4"/></video>
            </div>
            <div class="card-2">
                <video class="video-2" autoPlay playsInLine muted loop><source src={boberContent2}type="video/mp4"/></video>
                <div class="desc-2">
                    <h1>Это Проше Чем 1-2-3</h1>
                    <h3>Регистрируйся, участвуй, и полчи деньги это реально так просто</h3>
                </div>
            </div>
            <div class="card-3">
                <div class="desc-3">
                    <h1>Выводи Криптовалюту В Наличные Деньги</h1>
                    <h3>Ваше деньги хранятся у вас на личном кошелке в безопасном месте</h3>
                </div>
                <img src={boberContent3} alt="Device-Pile-In"/>

            </div>
        </section>
        <section class="lastsec">
            <h2 style={{marginBottom: "53px"}}>Часто задоваемые вопросы</h2>
            <Accordion/>
        </section>


        <footer class="landingFooter">
            <div class="footerContainer">

                <a class="footer__logo" href="#">
                    <img src={boberLogo} style={{height:"100px", width:"100px"}} />
                </a>

                <div class="footer__copyright">
                    &copy; bober. Все Права заризервированные.
                </div>

            </div>
        </footer>

    </main>

</body>
</html>
    )
}

export default Home
