<script>
const IMAGES = [
  "https://via.placeholder.com/500?text=1",
  "https://via.placeholder.com/500?text=2",
  "https://via.placeholder.com/500?text=3",
  "https://via.placeholder.com/500?text=4"
];

const slidesEl = document.getElementById("slides");
const dotsEl = document.getElementById("dots");
const thumbsEl = document.getElementById("thumbs");

let current = 0;

/* BUILD */
IMAGES.forEach((src, i) => {

  // slide
  const slide = document.createElement("div");
  slide.className = "slide";
  slide.innerHTML = `<img src="${src}">`;
  slidesEl.appendChild(slide);

  // dot
  const dot = document.createElement("div");
  dot.className = "dot";
  if(i===0) dot.classList.add("active");
  dot.onclick = () => go(i);
  dotsEl.appendChild(dot);

  // thumb
  const thumb = document.createElement("img");
  thumb.src = src;
  thumb.className = "thumb";
  if(i===0) thumb.classList.add("active");
  thumb.onclick = () => go(i);
  thumbsEl.appendChild(thumb);
});

/* CHANGE SLIDE */
function go(i){
  current = i;
  slidesEl.style.transform = `translateX(-${i*100}%)`;

  document.querySelectorAll(".dot").forEach(d=>d.classList.remove("active"));
  document.querySelectorAll(".thumb").forEach(t=>t.classList.remove("active"));

  dotsEl.children[i].classList.add("active");
  thumbsEl.children[i].classList.add("active");
}

/* SWIPE */
let startX=0;

slidesEl.addEventListener("touchstart",e=>{
  startX = e.touches[0].clientX;
});

slidesEl.addEventListener("touchend",e=>{
  let endX = e.changedTouches[0].clientX;

  if(startX - endX > 50 && current < IMAGES.length-1){
    go(current+1);
  }

  if(endX - startX > 50 && current > 0){
    go(current-1);
  }
});
</script>