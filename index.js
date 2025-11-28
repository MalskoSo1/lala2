import{a as p}from"./assets/vendor-2s9xPmg-.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))o(a);new MutationObserver(a=>{for(const n of a)if(n.type==="childList")for(const l of n.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&o(l)}).observe(document,{childList:!0,subtree:!0});function s(a){const n={};return a.integrity&&(n.integrity=a.integrity),a.referrerPolicy&&(n.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?n.credentials="include":a.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function o(a){if(a.ep)return;a.ep=!0;const n=s(a);fetch(a.href,n)}})();async function g(){try{return(await p.get("https://sound-wave.b.goit.study/api/artists?limit=25&page=1")).data}catch(t){console.log(t)}}const f={gallery:document.querySelector(".gallery"),modal:document.querySelector(".modal"),modalContent:document.querySelector(".modal-content-first-part")};function h(t){const e=t.map(s=>y(s)).join("");f.gallery.insertAdjacentHTML("beforeend",e)}function y(t){return`<li class="gallery-item">
    <a class="gallery-card">
    <img class="gallery-img" width="360" height="200" src="${t.strArtistThumb}" alt="${t.strArtist}"/>
  </a>
    <p class="artist-name">${t.strArtist}</p>
    <button class="btn" data-artist-id="${t._id}">Press info</button>
  </li>`}const r={gallery:document.querySelector("#gallery"),backgroundModal:document.querySelector(".background-modal"),closeBtn:document.querySelector(".closeBtn"),modal:document.querySelector(".modal"),modalContent:document.querySelector(".modal-content-first-part"),loader:document.querySelector(".loader")};let d=!1;async function b(){try{let t=await g();h(t.artists)}catch(t){console.log(t)}}b();function v(t){if(t!=null&&!d){r.modalContent.innerHTML="";const e=L(t);r.modalContent.insertAdjacentHTML("beforeend",e),t.strBiographyEN=t.strBiographyEN||"information missing",q(t.strBiographyEN,300);const s=document.querySelector("#modal-tags-list"),o=$(t),a=M(t.albumsList);s.insertAdjacentHTML("beforeend",o),r.modalContent.insertAdjacentHTML("beforeend",a),d=!0}}function u(){r.backgroundModal.classList.remove("is-active"),r.gallery.classList.remove("previous-content"),d=!1}function L(t){let e=t.intFormedYear,s=t.intDiedYear,o=`${e}-${s}`;return e===null&&s===null?o="information missing":s===null&&(o=`${e}-present`),`<h3 class="modal-artist-name">${t.strArtist}</h3>
  <div class="modal-artist-wrapper">
    <img class="modal-artist-info-img" width="272" height="167" src="${t.strArtistThumb}" alt="${t.strArtist}"/>
    <div class="modal-artist-full-info">
      <ul class="modal-info-list">
        <li class="modal-info-item">
          <h4 class="modal-info-title">Years active</h4>
          <p class ="modal-info-text">${o}</p>
        </li>
        <li class="modal-info-item">
          <h4 class="modal-info-title">Sex</h4>
          <p class ="modal-info-text">${t.strGender||"information missing"}</p>
        </li>
        <li class="modal-info-item">
          <h4 class="modal-info-title">Members</h4>
          <p class ="modal-info-text">${t.intMembers||"information missing"}</p>
        </li>
        <li class="modal-info-item">
          <h4 class="modal-info-title">Country</h4>
          <p class ="modal-info-text">${t.strCountry||"information missing"}</p>
        </li>
      </ul>
      <div class="modal-biography">
        <h4 class="modal-info-title">Biography</h4>
        <div class="modal-biography-container">
          <p id="modal-biography-content" class="modal-info-text"></p>
          <button id="modal-biography-button"></button>
        </div>
      </div>
      <ul id="modal-tags-list" class="modal-tags-list">
      </ul>
    </div>
  </div>`}function $(t){return t.genres?t.genres.map(e=>`<li class="modal-tag-item">${e}</li>`.repeat(1)).join(""):""}function M(t){return`  <div class="albums">
      <h2>Albums</h2>
			<div class="albums-cards">
      ${t.slice(0,8).map(({strAlbum:s,tracks:o})=>{const a=(o||[]).map(({strTrack:n,intDuration:l,movie:i})=>`
        <li class="track">
          <span class="title">${n}</span>
          <span class="time">${S(l)}</span>
          ${i?`<a href="${i}" class="yt-btn">▶</a>`:""}
        </li>
      `).join("");return`
      <div class="album-card">
        <h3>${s}</h3>
        <div class="table-header">
          <span>Track</span>
          <span>Time</span>
          <span>Link</span>
        </div>
        <ul class="track-list">
          ${a||"<li>No tracks found</li>"}
        </ul>
      </div>
    `}).reduce((s,o,a,n)=>(a%2===0?s.push(`<div class="albums-thumb">${o}`):s[s.length-1]+=o+"</div>",a===n.length-1&&a%2===0&&(s[s.length-1]+="</div>"),s),[]).join("")}
			</div>
    </div>
  `}let m="";r.gallery.addEventListener("click",async t=>{t.preventDefault(),t.stopImmediatePropagation(),t.target.nodeName==="BUTTON"&&(w(),m=t.target.dataset.artistId,document.body.classList.add("no-scroll"),await C(m),r.backgroundModal.classList.add("is-active"),r.gallery.classList.add("previous-content"),A(),window.addEventListener("keydown",e=>{e.preventDefault(),e.stopImmediatePropagation(),e.code==="Escape"&&(u(),document.body.classList.remove("no-scroll"))}),r.backgroundModal.addEventListener("click",e=>{e.preventDefault(),e.stopImmediatePropagation();const s=e.target,o=e.target.closest(".modal-close-btn");s!==e.currentTarget&&!o||(u(),document.body.classList.remove("no-scroll"))}))});async function T(t){try{let e=`https://sound-wave.b.goit.study/api/artists/${t}/albums`;return(await p.get(e)).data}catch(e){console.log(e)}}async function C(t){const e=await T(t);v(e)}function S(t){const e=Math.floor(t/1e3),s=Math.floor(e/60),o=e%60;return`${s}:${o.toString().padStart(2,"0")}`}function w(){r.loader.style.display="block"}function A(){r.loader.style.display="none"}function q(t,e){const s=document.querySelector("#modal-biography-content"),o=document.querySelector("#modal-biography-button"),a=`<svg class="modal-icon-more-text" width="20" height="20">
                      <use href="./img/sprite.svg#icon-dots-horizontal"></use>
                  </svg>`,n=`<svg class="modal-icon-less-text" width="20" height="20">
                      <use href="./img/sprite.svg#icon-modal-up"></use>
                  </svg>`;if(t.length<=e){s.textContent=t,o.style.display="none",s.appendChild(o);return}const l=t.substring(0,e),i=t;let c=!0;s.textContent=l,o.innerHTML=a,s.appendChild(o),o.addEventListener("click",()=>{c=!c,c?(s.textContent=l,o.innerHTML=a,r.backgroundModal.scrollTo({top:0,behavior:"smooth"}),s.appendChild(o)):(s.textContent=i,o.innerHTML=n,s.appendChild(o))})}
//# sourceMappingURL=index.js.map
