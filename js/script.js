(() => {
  "use strict";
  // Mật khẩu kỷ niệm: 01/09/2026 viết thành 8 chữ số.
  const passwordScreen = document.getElementById("passwordScreen");
  const passwordForm = document.getElementById("passwordForm");
  const passwordInput = document.getElementById("passwordInput");
  const passwordError = document.getElementById("passwordError");
  passwordForm.addEventListener("submit", event => {
    event.preventDefault();
    if (passwordInput.value === "01092026") {
      passwordError.textContent = "";
      passwordScreen.classList.add("unlocking");
      document.body.classList.remove("locked");
      window.setTimeout(() => passwordScreen.remove(), 720);
    } else {
      passwordError.textContent = "Chưa đúng rồi em ơi, thử nhớ lại ngày đặc biệt ấy nhé. ♡";
      passwordInput.value = "";
      passwordInput.focus();
      passwordForm.classList.remove("password-shake");
      void passwordForm.offsetWidth;
      passwordForm.classList.add("password-shake");
    }
  });
  const steps = [
    { label: "MỘT MÓN QUÀ NHỎ DÀNH RIÊNG CHO EM", eyebrow: "CHƯƠNG 01 · LỜI MỞ ĐẦU", title: "Ê cô gái ơiii! 👀", copy: "你好呀！(Nǐ hǎo ya — Chào em!)\n\nAnh có một món quà nho nhỏ muốn cho em xem. Nhưng mà phải hứa là đừng cười anh trước đã nha!", button: "Mở đầu câu chuyện", image: "assets/images/em-4.jpg", caption: "Một khoảnh khắc nhỏ ♡" },
    { label: "BÍ MẬT ĐƯỢC BẬT MÍ", eyebrow: "CHƯƠNG 02 · THỦ PHẠM XUẤT HIỆN", title: "Thủ phạm xuất hiện 🤭", copy: "Bí mật được bật mí đây: anh chính là người đã dành thời gian làm trang web hơi ngốc nghếch này chỉ để gửi cho em.\n\n给你的小惊喜 (Gěi nǐ de xiǎo jīngxǐ) — Một bất ngờ nho nhỏ dành cho em.\n\nKhông biết anh có được cộng điểm dễ thương nào không nhỉ?", button: "Để em chấm điểm", image: "assets/images/em-5.jpg", caption: "Người đứng sau món quà nho nhỏ này" },
    { label: "NHÂN VẬT CHÍNH LÀ EM", eyebrow: "CHƯƠNG 03 · NHÂN VẬT ĐẶC BIỆT", title: "À, suýt quên mất! 🥰", copy: "Nhân vật chính của câu chuyện này là em mới đúng.\n\nAnh thích những lúc em kể anh nghe chuyện trong cuộc sống, chuyện học hành, công việc và cả những điều linh tinh nữa. Anh thấy những khoảnh khắc ấy rất đáng quý.", button: "Rồi rồi, nói tiếp đi anh", image: "assets/images/em-6.jpg", caption: "Một ngày bình thường có em cũng vui hơn" },
    { label: "BẬT MÍ MỘT CHÚT THÔI", eyebrow: "CHƯƠNG 04 · ĐIỀU ANH NHẬN RA", title: "Anh thú nhận nè 💗", copy: "Thật ra, anh thấy rất vui mỗi lần được nói chuyện với em. Anh thích những lúc hai đứa kể nhau nghe mấy chuyện linh tinh, rồi tự nhiên một ngày bình thường cũng trở nên vui hơn.\n\n慢慢来 (Màn man lái) — Cứ từ từ thôi. Anh không muốn vội vàng, chỉ mong có thêm cơ hội để hiểu em nhiều hơn.", button: "Còn một điều nữa nè", image: "assets/images/em-1.jpg", caption: "Có em, ngày bình thường cũng sáng hơn" },
    { label: "CÂU HỎI HƠI KHÓ TRẢ LỜI", eyebrow: "CHƯƠNG 05 · ANH HỎI THẬT ĐẤY", title: "Em nghe anh nói nè… 🫣", copy: "Anh có một câu hỏi muốn hỏi em từ lâu rồi…\n\nEm có muốn cho anh cơ hội được quan tâm em nhiều hơn, cùng em đi chơi, ăn ngon, chụp ảnh và tạo thêm nhiều kỷ niệm không? Nếu em đồng ý, mình cứ bắt đầu từ những điều giản dị nhất nhé.", button: "Đọc điều cuối cùng nhé", image: "assets/images/em-2.jpg", caption: "Biết đâu đây là nơi câu chuyện bắt đầu" },
    { label: "ĐIỀU ANH MUỐN NÓI ❤️", eyebrow: "CHƯƠNG 06 · TỪ ANH, THẬT LÒNG", title: "Anh thích em. Thật đó! 🥹", copy: "我喜欢你 (Wǒ xǐhuān nǐ) — Anh thích em. ❤️\n\nAnh thích em, theo cách rất riêng của anh. Anh không mong em phải trả lời điều gì thật lớn lao ngay lúc này. Anh chỉ muốn em biết rằng anh nghiêm túc với cảm xúc của mình và thật lòng muốn tìm hiểu em nhiều hơn.\n\nCảm ơn em đã xem hết món quà hơi ngốc này nha. Nếu em mỉm cười dù chỉ một chút thôi thì anh đã vui lắm rồi. 🥰", button: "Đọc lại từ đầu", image: "assets/images/em-3.jpg", caption: "Gửi cô gái khiến anh làm nên trang này", final: true }
  ];
  const $ = id => document.getElementById(id);
  const intro = $("introScreen"), openBtn = $("openLetterButton"), envelopeScene = $("envelopeScene"), card = $("storyCard");
  const music = $("backgroundMusic"), musicToggle = $("musicToggle"), musicLabel = $("musicLabel"), musicIcon = $("musicIcon");
  const stepLabel = $("stepLabel"), chapterNumber = $("chapterNumber"), eyebrow = $("messageEyebrow"), title = $("title"), copy = $("copy"), photo = $("storyPhoto"), photoWrap = $("photoWrap"), caption = $("photoCaption");
  const nextButton = $("nextButton"), nextLabel = $("nextLabel"), backButton = $("backButton"), interaction = $("interaction"), progressText = $("progressText"), dots = [...document.querySelectorAll(".progress-dot")];
  let current = 0, typeTimer = null, musicWanted = false, opened = false;

  function makeStars() {
    const field = $("starfield"), symbols = ["✦", "·", "✧", "˚", "＋"];
    for (let i = 0; i < 64; i++) { const s = document.createElement("span"); s.className = "background-star"; s.textContent = symbols[Math.floor(Math.random() * symbols.length)]; s.style.left = Math.random() * 100 + "%"; s.style.top = Math.random() * 100 + "%"; s.style.setProperty("--duration", (5 + Math.random() * 9) + "s"); s.style.setProperty("--delay", (-Math.random() * 12) + "s"); s.style.setProperty("--size", (.45 + Math.random() * 1.1) + "rem"); field.appendChild(s); }
    // Những cánh hoa trôi chậm, được giới hạn số lượng để iPhone vẫn chạy mượt.
    const petals = $("petalfield"), petalSymbols = ["✿", "❀", "♡", "✧"];
    for (let i = 0; i < 12; i++) { const p = document.createElement("span"); p.className = "ambient-petal"; p.textContent = petalSymbols[i % petalSymbols.length]; p.style.left = (Math.random() * 100) + "%"; p.style.setProperty("--fall-duration", (15 + Math.random() * 18) + "s"); p.style.setProperty("--fall-delay", (-Math.random() * 28) + "s"); p.style.setProperty("--sway", (Math.random() * 90 - 45) + "px"); p.style.setProperty("--petal-size", (10 + Math.random() * 12) + "px"); petals.appendChild(p); }
  }
  function typeText(text) {
    clearInterval(typeTimer); copy.textContent = ""; copy.classList.add("typing");
    let i = 0; const chars = [...text];
    typeTimer = setInterval(() => { if (i >= chars.length) { clearInterval(typeTimer); copy.classList.remove("typing"); return; } copy.textContent += chars[i++]; }, 17);
  }
  function popHearts(count = 12, x = window.innerWidth / 2, y = window.innerHeight * .72, fireworks = false) {
    const symbols = fireworks ? ["💗", "💖", "♡", "✦", "✨", "💕"] : ["♡", "♥", "✧", "💗"];
    for (let i = 0; i < count; i++) { const el = document.createElement("span"); el.className = fireworks ? "firework-particle" : "touch-heart"; el.textContent = symbols[Math.floor(Math.random() * symbols.length)]; el.style.left = x + "px"; el.style.top = y + "px"; el.style.setProperty("--dx", ((Math.random() - .5) * (fireworks ? 440 : 150)) + "px"); el.style.setProperty("--dy", (-Math.random() * (fireworks ? 360 : 170) - 30) + "px"); el.style.setProperty("--rot", ((Math.random() - .5) * 100) + "deg"); el.style.setProperty("--delay", Math.random() * .28 + "s"); document.body.appendChild(el); setTimeout(() => el.remove(), fireworks ? 2400 : 1700); }
  }
  function showToast(message) { const t = $("toast"); t.textContent = message; t.classList.add("show"); setTimeout(() => t.classList.remove("show"), 2400); }
  function addChoice(label, response) { const b = document.createElement("button"); b.type = "button"; b.className = "choice-button"; b.textContent = label; b.addEventListener("click", () => { interaction.querySelectorAll(".choice-button").forEach(x => x.classList.remove("selected")); b.classList.add("selected"); let result = interaction.querySelector(".choice-response"); if (!result) { result = document.createElement("p"); result.className = "choice-response"; interaction.appendChild(result); } result.textContent = response; popHearts(28, window.innerWidth / 2, window.innerHeight * .72, true); }); interaction.appendChild(b); }
  function renderStep(index, animate = true) {
    current = Math.max(0, Math.min(index, steps.length - 1)); const step = steps[current]; clearInterval(typeTimer);
    card.classList.remove("step-enter"); if (animate) { void card.offsetWidth; card.classList.add("step-enter"); }
    stepLabel.textContent = step.label; chapterNumber.textContent = String(current + 1).padStart(2, "0") + " / " + String(steps.length).padStart(2, "0"); eyebrow.textContent = step.eyebrow; title.textContent = step.title; caption.textContent = step.caption; photo.alt = "Kỷ niệm ảnh số " + (current + 1);
    photoWrap.classList.remove("photo-reveal"); void photoWrap.offsetWidth; photoWrap.classList.add("photo-reveal"); photo.src = step.image;
    photo.onerror = () => { photoWrap.classList.add("photo-missing"); caption.textContent = "Thêm ảnh vào thư mục assets/images nhé ♡"; }; photo.onload = () => photoWrap.classList.remove("photo-missing");
    typeText(step.copy); interaction.innerHTML = ""; interaction.hidden = true; nextButton.hidden = false; backButton.hidden = current === 0;
    if (step.final) { nextLabel.textContent = "Đọc lại từ đầu ↺"; interaction.hidden = false; nextButton.classList.add("final-restart"); nextButton.hidden = false; addChoice("❤️ Em cũng có cảm tình với anh", "Aaaa, chắc anh sẽ cười một mình cả tối mất thôi! Cảm ơn em đã nói cho anh biết. 💗"); addChoice("🥰 Mình tìm hiểu nhau thêm nhé", "Anh vui lắm! Mình cứ từ từ tìm hiểu nhau, cùng tạo thêm những kỷ niệm thật đẹp nhé. 🥰"); addChoice("🙈 Em cần thêm thời gian", "Không sao đâu em. 慢慢来 — cứ từ từ nhé. Anh tôn trọng cảm xúc và quyết định của em. 💛"); setTimeout(() => { for (let i = 0; i < 3; i++)setTimeout(() => popHearts(24, window.innerWidth * (.25 + Math.random() * .5), window.innerHeight * (.35 + Math.random() * .2), true), i * 360); }, 220); } else { nextLabel.textContent = step.button; nextButton.classList.remove("final-restart"); }
    progressText.textContent = String(current + 1).padStart(2, "0") + " — " + String(steps.length).padStart(2, "0"); dots.forEach((d, i) => { d.classList.toggle("active", i === current); d.classList.toggle("done", i < current); });
    $("bottomNote").hidden = false; window.scrollTo({ top: 0, behavior: "smooth" });
  }
  function openLetter() {
    if (opened) return; opened = true; openBtn.disabled = true; envelopeScene.classList.add("envelope-opening"); intro.classList.add("intro-fade-out");
    // Chuyển cảnh có nhịp nghỉ ngắn, giống mở một món quà thật.
    setTimeout(() => { intro.hidden = true; card.hidden = false; card.classList.add("card-arrive"); renderStep(0, false); popHearts(34, window.innerWidth / 2, window.innerHeight * .48, true); showToast("Một món quà nhỏ, chỉ dành cho em ♡"); }, 850);
  }
  openBtn.addEventListener("click", openLetter);
  nextButton.addEventListener("click", () => { if (current === steps.length - 1) { intro.hidden = false; intro.classList.remove("intro-fade-out"); envelopeScene.classList.remove("envelope-opening"); card.hidden = true; opened = false; openBtn.disabled = false; $("bottomNote").hidden = true; window.scrollTo({ top: 0, behavior: "smooth" }); return; } renderStep(current + 1); if (current === steps.length - 1) popHearts(30, window.innerWidth / 2, window.innerHeight * .55, true); });
  backButton.addEventListener("click", () => renderStep(current - 1));
  musicToggle.addEventListener("click", async () => { if (music.paused) { try { await music.play(); musicWanted = true; musicToggle.classList.add("is-playing"); musicToggle.setAttribute("aria-pressed", "true"); musicLabel.textContent = "Tắt nhạc"; musicIcon.textContent = "♫"; } catch (e) { showToast("Hãy kiểm tra file assets/music/love.mp3 nhé ♡"); } } else { music.pause(); musicWanted = false; musicToggle.classList.remove("is-playing"); musicToggle.setAttribute("aria-pressed", "false"); musicLabel.textContent = "Bật nhạc"; musicIcon.textContent = "♫"; } });
  document.addEventListener("pointerdown", e => {
    const glow = $("touchGlow"); glow.style.setProperty("--glow-x", e.clientX + "px"); glow.style.setProperty("--glow-y", e.clientY + "px"); glow.classList.remove("glow-active"); void glow.offsetWidth; glow.classList.add("glow-active");
    if (e.target.closest("button,a,input,form")) return;
    popHearts(4, e.clientX, e.clientY, false);
  });
  // Vuốt ngang để chuyển chương tự nhiên trên màn hình cảm ứng.
  let touchStartX = 0, touchStartY = 0;
  card.addEventListener("touchstart", e => { if (card.hidden || !e.changedTouches.length) return; touchStartX = e.changedTouches[0].clientX; touchStartY = e.changedTouches[0].clientY; }, { passive: true });
  card.addEventListener("touchend", e => {
    if (card.hidden || !e.changedTouches.length) return;
    const dx = e.changedTouches[0].clientX - touchStartX, dy = e.changedTouches[0].clientY - touchStartY;
    if (Math.abs(dx) > 65 && Math.abs(dx) > Math.abs(dy) * 1.25) { if (dx < 0 && current < steps.length - 1) renderStep(current + 1); else if (dx > 0 && current > 0) renderStep(current - 1); }
  }, { passive: true });
  // Subtle parallax on devices with a pointer; disabled for touch to avoid fighting scrolling.
  if (window.matchMedia("(hover: hover) and (pointer: fine)").matches) {
    document.addEventListener("pointermove", e => { document.documentElement.style.setProperty("--pointer-x", ((e.clientX / window.innerWidth) - .5).toFixed(3)); document.documentElement.style.setProperty("--pointer-y", ((e.clientY / window.innerHeight) - .5).toFixed(3)); }, { passive: true });
  }
  document.addEventListener("keydown", e => { if (e.key === "ArrowRight" && !card.hidden && !nextButton.hidden) nextButton.click(); if (e.key === "ArrowLeft" && !card.hidden && current > 0) backButton.click(); if (e.key === "Enter" && !opened && document.activeElement === document.body) openLetter(); });
  makeStars();
})();