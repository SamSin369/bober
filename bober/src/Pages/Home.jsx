import React from "react";
import "../PageStyles/Home.css";
import $ from "jquery";
import "../resources/videos/boberVid.mp4";
import bgVid from "../resources/videos/boberVid.mp4";

import boberLogo from "../resources/images/boberLogo.png";
import boberContent1 from "../resources/videos/boberContent1.mp4";
import boberContent2 from "../resources/videos/boberContent2.mp4";
import boberContent3 from "../resources/videos/boberContent3.png";

import { Accordion, AccordionItem } from "../components/Accordion/Accordion";

const Home = () => {
  // document.addEventListener('scroll', function (event) {

  //     var underlines = document.querySelectorAll(".underline");
  //     var y = window.scrollY

  //     console.log(y)
  //     if (y <= 500) {
  //         for (var i = 0; i < underlines.length; i++) {
  //             underlines[i].style.transform = 'translate3d(' + 1 * 100 + '%,0,0)';
  //         }

  //     } else if (y <= 675 || y <= 1125) {
  //         for (var i = 0; i < underlines.length; i++) {
  //             underlines[i].style.transform = 'translate3d(' + 2 * 100 + '%,0,0)';
  //         }

  //     } else {
  //         for (var i = 0; i < underlines.length; i++) {
  //             underlines[i].style.transform = 'translate3d(' + 3 * 100 + '%,0,0)';
  //         }

  //     }
  // }, true /*Capture event*/);

  // function ul(index) {

  //     var jumbo = document.querySelector(".style-cards");
  //     var faq = document.querySelector(".accordion");
  //     var underlines = document.querySelectorAll(".underline");

  //     for (var i = 0; i < underlines.length; i++) {
  //         underlines[i].style.transform = 'translate3d(' + index * 100 + '%,0,0)';
  //     }

  //     if (index === 0) {
  //         window.scroll({
  //             top: 0,
  //             left: 0,
  //             behavior: 'smooth'
  //         });
  //     } else if (index === 1) {
  //         jumbo.scrollIntoView({ behavior: 'smooth', block: 'start', inline: "start" });
  //         document.getElementById("main").scrollTop -= 50;
  //     } else if (index === 2) {
  //         faq.scrollIntoView({ behavior: 'smooth', block: 'start' });
  //     }
  // }

  // var accordion = (function () {

  //     var $accordion = $('.js-accordion');
  //     var $accordion_header = $accordion.find('.js-accordion-header');
  //     var $accordion_item = $('.js-accordion-item');

  //     // default settings
  //     var settings = {
  //         // animation speed
  //         speed: 400,

  //         // close all other accordion items if true
  //         oneOpen: false
  //     };

  //     return {
  //         // pass configurable object literal
  //         init: function ($settings) {
  //             $accordion_header.on('click', function () {
  //                 accordion.toggle($(this));
  //             });

  //             $.extend(settings, $settings);

  //             // ensure only one accordion is active if oneOpen is true
  //             if (settings.oneOpen && $('.js-accordion-item.active').length > 1) {
  //                 $('.js-accordion-item.active:not(:first)').removeclassName('active');
  //             }

  //             // reveal the active accordion bodies
  //             $('.js-accordion-item.active').find('> .js-accordion-body').show();
  //         },
  //         toggle: function ($this) {

  //             if (settings.oneOpen && $this[0] != $this.closest('.js-accordion').find('> .js-accordion-item.active > .js-accordion-header')[0]) {
  //                 $this.closest('.js-accordion')
  //                     .find('> .js-accordion-item')
  //                     .removeclassName('active')
  //                     .find('.js-accordion-body')
  //                     .slideUp()
  //             }

  //             // show/hide the clicked accordion item
  //             $this.closest('.js-accordion-item').toggleclassName('active');
  //             $this.next().stop().slideToggle(settings.speed);
  //         }
  //     }
  // })();

  // $(document).ready(function () {
  //     accordion.init({ speed: 300, oneOpen: true });
  // });

  // $(document).ready(function () {
  //     var underlines = document.querySelectorAll(".underline");

  //     for (var i = 0; i < underlines.length; i++) {
  //         underlines[i].style.transform = 'translate3d(' + 1 * 100 + '%,0,0)';
  //     }

  // })
  // Activate WOW.js plugin for animation on scrol

  // new WOW().init();

  return (
    <html>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Rajdhani&display=swap"
          rel="stylesheet"
        />

        <script
          src="https://kit.fontawesome.com/4d115d40f1.js"
          crossOrigin="anonymous"
        ></script>
      </head>

      <body id="landingBody">
        <main id="main">
          {/* <nav id="topNav">
            <img src={boberLogo} alt="Netflix Logo" id="homeLogo"/>
            <div className="underline" style={{transform: "translate3d(300%, 0px, 0px)"}}></div> */}

          {/* <a className="nav-link-glitch" onclick="ul(0)">Главное</a><a className="nav-link-glitch" onclick="ul(1)">Что мы делаем?</a><a className="nav-link-glitch" onclick="ul(2)">Часто Задывемые Вопросы</a> */}

          {/* </nav> */}
          {/* <a className="neon-button signin-btn" id="signInBro" asp-area="Identity" asp-page="/Account/Login">Войти</a> */}

          <header className="showcase">
            <div className="showcase-top"></div>
            <video autoPlay muted loop id="showCaseVideo">
              <source
                src={bgVid}
                type="video/mp4"
                style={{ width: "100% !important", height: "100% !important" }}
              />
            </video>

            <div className="showcase-content">
              <p className="logo-1">
                УЧАСТВУЙ И ПОВЫШАЙ ВЕРОЯТНОСТЬ ДАРОВ БОБРА
              </p>
              <h3>друг уразумей! от тебя никогда не потребуется "время" !</h3>
              <p>бабёр будет только давать дары и время .</p>
              <p>и никогда не будет брат. это порядок бобра!</p>
              <div id="landingBtnWrap">
                <a
                  className="cybr-landing-btn"
                  asp-area="Identity"
                  asp-page="/Account/Register"
                  style={{
                    paddingTop: "10px",
                    paddingBottom: "10px",
                    paddingLeft: "20px",
                    paddingRight: "20px !important",
                  }}
                >
                  Подать Заявку_ <i className="fas fa-angle-right"></i>
                  <span aria-hidden>_</span>
                  <span aria-hidden className="cybr-landing-btn__glitch">
                    Подать Заявку_ <i className="fas fa-angle-right"></i>_{" "}
                  </span>
                </a>
              </div>
            </div>
          </header>
            <h1 id="contentStart"><span className="highlight-text">ПЕРВЫЙ РАЗГОВОР</span> <small class="smallHeader">С ЧЕЛОВЕКОМ НОВЫМ. ЗНАКОМЫМ С ПРОЕКТОМ В ОБЩИХ ЧЕРТАХ</small></h1>
          <section className="style-cards">
            <div className="card-1">
              <div className="desc-1">
                <h1 className="glower logo-1">Участвуй На Любом Устройстве</h1>
                <h3>
                  Регистрируйся, участвуй, и получай деньги в любом точке мира в
                  любое время!
                </h3>
              </div>

              <video className="video-1" autoPlay playsInline muted loop>
                <source src={boberContent1} type="video/mp4" />
              </video>
            </div>
            <div className="card-2">
              <video className="video-2" autoPlay playsInline muted loop>
                <source src={boberContent2} type="video/mp4" />
              </video>
              <div className="desc-2">
                <h1 className="glower logo-1">Это Проше Чем 1-2-3</h1>
                <h3>
                  Регистрируйся, участвуй, и полчи деньги это реально так просто
                </h3>
              </div>
            </div>
            <div className="card-3">
              <div className="desc-3">
                <h1 className="glower logo-1">
                  Выводи Криптовалюту В Наличные Деньги
                </h1>
                <h3>
                  Ваше деньги хранятся у вас на личном кошелке в безопасном
                  месте
                </h3>
              </div>
              <img src={boberContent3} alt="Device-Pile-In" />
            </div>
          </section>
          <section className="lastsec">
            <h2 style={{ marginBottom: "53px" }}>Часто задоваемые вопросы</h2>
            <Accordion />
          </section>

          <footer className="landingFooter">
            <div className="footerContainer">
              <a className="footer__logo" href="#">
                <img
                  src={boberLogo}
                  style={{ height: "100px", width: "100px" }}
                />
              </a>

              <div className="footer__copyright">
                &copy; bober. Все Права заризервированные.
              </div>
            </div>
          </footer>
        </main>
      </body>
    </html>
  );
};

export default Home;
