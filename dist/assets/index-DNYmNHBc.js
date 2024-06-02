(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))s(t);new MutationObserver(t=>{for(const c of t)if(c.type==="childList")for(const a of c.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&s(a)}).observe(document,{childList:!0,subtree:!0});function o(t){const c={};return t.integrity&&(c.integrity=t.integrity),t.referrerPolicy&&(c.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?c.credentials="include":t.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function s(t){if(t.ep)return;t.ep=!0;const c=o(t);fetch(t.href,c)}})();const d=document.getElementById("modal"),u=document.getElementById("overlay"),L=document.querySelector("header"),r=document.querySelector(".nav"),h=document.getElementById("btn-close-modal"),p=document.querySelectorAll(".open__account_btn"),E=document.getElementById("btn__Scroll__To"),S=document.getElementById("section--1"),k=document.querySelectorAll(".section"),q=document.querySelectorAll(".operations__tab"),I=document.querySelector(".operations__tab-container"),A=document.querySelectorAll(".operations__content");r.classList.contains("stick")||r.classList.remove("invisible","opacity-0");const _=function(){d.classList.add("invisible"),d.classList.remove("opacity-100"),u.classList.add("invisible"),u.classList.remove("opacity-100")},O=function(){d.classList.remove("invisible"),d.classList.add("opacity-100"),u.classList.remove("invisible"),u.classList.add("opacity-100")};p.forEach(e=>e.addEventListener("click",O));h.addEventListener("click",_);document.body.addEventListener("keydown",function(e){e.key==="Escape"&&!d.classList.contains("invisible")&&_()});E.addEventListener("click",function(e){S.scrollIntoView({behavior:"smooth"})});document.querySelector(".nav__list__lists").addEventListener("click",function(e){var n;if(e.preventDefault(),e.target.classList.contains("nav__link")){const o=e.target.getAttribute("href");(n=document.querySelector(o))==null||n.scrollIntoView({behavior:"smooth"})}});I.addEventListener("click",function(e){const n=e.target.closest(".operations__tab");n&&(q.forEach(o=>o.classList.remove("operations__tab--active")),A.forEach(o=>o.classList.remove("operations__content--active")),n.classList.add("operations__tab--active"),document.querySelector(`.operations__content--${n.dataset.tab}`).classList.add("operations__content--active"))});const b=function(e){if(e.target.classList.contains("nav__link")){const n=e.target,o=n.closest("nav").querySelectorAll(".nav__link"),s=n.closest("nav").querySelector("img");o.forEach(t=>{t!==n&&(t.style.opacity=this)}),s.style.opacity=this}};r.addEventListener("mouseover",b.bind(.5));r.addEventListener("mouseout",b.bind(1));function B(){const e=r.getBoundingClientRect().height,n=function(s){const[t]=s;t.isIntersecting?(r.classList.remove("invisible","opacity-0"),r.classList.remove("stick")):(r.classList.add("stick"),r.classList.remove("invisible","opacity-0"))};new IntersectionObserver(n,{root:null,threshold:0,rootMargin:`-${e}px`}).observe(L)}B();function w(){const e=function(o){const[s]=o;s.isIntersecting&&(s.target.classList.remove("hidden_section"),n.unobserve(s.target))},n=new IntersectionObserver(e,{root:null,threshold:.1});k.forEach(o=>{n.observe(o),o.classList.add("hidden_section")})}w();function C(){const e=document.querySelectorAll("img[data-src]"),n=function(s){const[t]=s;t.isIntersecting&&(t.target.src=t.target.dataset.src,t.target.addEventListener("load",()=>t.target.classList.remove("lazy_img")),o.unobserve(t.target))},o=new IntersectionObserver(n,{root:null,threshold:0,rootMargin:"250px"});e.forEach(s=>o.observe(s))}C();function M(){const e=document.querySelectorAll(".slide"),n=document.querySelector(".dots"),o=document.querySelector(".slider__btn--right"),s=document.querySelector(".slider__btn--left");let t=0;const c=function(){e.forEach((i,l)=>n.insertAdjacentHTML("beforeend",`<button class="dots__dot" data-slide="${l}"></button>`))},a=function(i){document.querySelectorAll(".dots__dot").forEach(l=>l.classList.remove("dots__dot--active")),document.querySelector(`.dots__dot[data-slide = "${i}"]`).classList.add("dots__dot--active")},f=function(i){e.forEach((l,g)=>{l.style.transform=`translateX(${100*(g-i)}%)`})};(function(){c(),f(0),a(0)})();const v=function(){f(t),a(t)},m=function(){t===e.length-1?t=0:t++,v()},y=function(){t<=0?t=e.length-1:t--,v()};o.addEventListener("click",m),s.addEventListener("click",y),n.addEventListener("click",function(i){i.target.classList.contains("dots__dot")&&(t=Number(i.target.dataset.slide),v())}),document.addEventListener("keydown",function(i){i.key==="ArrowRight"&&m(),i.key==="ArrowLeft"&&y()})}M();
