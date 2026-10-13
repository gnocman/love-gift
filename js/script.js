(() => {
  "use strict";

  // SỬA NỘI DUNG Ở ĐÂY: thay lời thoại, tên ảnh và nhãn nút cho từng bước.
  // Ảnh nên đặt trong assets/images/. Có thể dùng JPG, PNG hoặc WebP.
  const steps = [
    {
      label: "MỘT MÓN QUÀ NHỎ DÀNH RIÊNG CHO EM",
      title: "Ê cô gái ơiii! 👀",
      copy: "Anh có một thứ muốn cho em xem. Nhưng mà phải hứa là không cười anh trước đã nha!",
      button: "Mở ra xem nè",
      art: "photo",
      image: "assets/images/em-4.jpg"
    },
    {
      label: "BÍ MẬT ĐƯỢC BẬT MÍ",
      title: "Thủ phạm xuất hiện 🤭",
      copy: "Xin chào, anh chính là người đã dành thời gian làm cái website hơi ngốc nghếch này chỉ để gửi cho em.\n\nKhông biết có được cộng điểm dễ thương nào không nhỉ?",
      button: "Để em chấm điểm",
      art: "photo",
      image: "assets/images/em-5.jpg"
    },
    {
      label: "NHÂN VẬT CHÍNH LÀ EM",
      title: "À, suýt quên mất! 🥰",
      copy: "Nhân vật chính của câu chuyện này là em mới đúng.\n\nAnh thấy em đáng yêu nhất là lúc em nói chuyện và chia sẻ mọi điều trong cuộc sống, công việc với anh.",
      button: "Rồi rồi, nói tiếp đi anh",
      art: "photo",
      image: "assets/images/em-6.jpg"
    },
    {
      label: "BẬT MÍ MỘT CHÚT THÔI",
      title: "Anh thú nhận nè 💗",
      copy: "Thật ra, anh thấy rất vui mỗi lần được nói chuyện với em. Anh thích những lúc hai đứa kể nhau nghe mấy chuyện linh tinh, rồi tự nhiên một ngày bình thường cũng trở nên vui hơn.\n\nAnh chưa biết tương lai sẽ thế nào, nhưng anh muốn có thêm nhiều cơ hội để hiểu em hơn.",
      button: "Còn một điều nữa nè",
      art: "photo",
      image: "assets/images/em-1.jpg"
    },
    {
      label: "CÂU HỎI HƠI KHÓ TRẢ LỜI",
      title: "Em nghe anh nói nè… 🫣",
      copy: "Anh có một câu hỏi muốn hỏi em từ lâu rồi…\n\nEm có muốn cho anh cơ hội được quan tâm em nhiều hơn, cùng em đi chơi, ăn ngon, chụp ảnh và tạo thêm nhiều kỷ niệm không?",
      button: "Anh nói câu cuối nhé",
      art: "photo",
      image: "assets/images/em-2.jpg"
    },
    {
      label: "ĐIỀU ANH MUỐN NÓI ❤️",
      title: "Anh thích em. Thật đó! 🥹",
      copy: "Anh thích em, theo cách rất riêng của anh. Anh không mong em phải trả lời điều gì thật lớn lao ngay lúc này. Anh chỉ muốn em biết rằng anh nghiêm túc với cảm xúc của mình và thật lòng muốn tìm hiểu em nhiều hơn.\n\nCảm ơn em đã xem hết món quà hơi ngốc này nha. Nếu em mỉm cười dù chỉ một chút thôi thì anh đã vui lắm rồi. 🥰",
      button: "Đọc lại từ đầu",
      art: "photo",
      image: "assets/images/em-3.jpg",
      final: true
    }
  ];

  const music = document.getElementById("backgroundMusic");
  const musicToggle = document.getElementById("musicToggle");
  const musicLabel = document.getElementById("musicLabel");
  const musicIcon = document.getElementById("musicIcon");
  const card = document.querySelector(".story-card");
  const stepLabel = document.getElementById("stepLabel");
  const title = document.getElementById("title");
  const copy = document.getElementById("copy");
  const nextButton = document.getElementById("nextButton");
  const nextLabel = document.getElementById("nextLabel");
  const progressText = document.getElementById("progressText");
  const progressDots = [...document.querySelectorAll(".progress-dot")];
  const illustration = document.getElementById("illustration");
  const photoWraps = Array.from(
    { length: 6 },
    (_, index) => document.getElementById(`photoWrap-${index + 1}`)
  );

  const photos = Array.from(
    { length: 6 },
    (_, index) => document.getElementById(`photo-${index + 1}`)
  );
  const interaction = document.getElementById("interaction");

  let currentStep = 0;
  let musicWanted = false;

  function makeArt(type) {
    const art = {
      envelope: '<div class="spark spark-a">✦</div><div class="spark spark-b">✧</div><div class="envelope"><div class="envelope-back"></div><div class="letter"><span>Gửi em 💌</span></div><div class="envelope-front"></div><div class="envelope-flap"></div><div class="envelope-heart">♥</div></div>',
      bunny: '<div style="font-size:112px;filter:drop-shadow(0 8px 8px #f6c8dc)">🐰</div><div class="spark spark-a">✦</div><div class="spark spark-b">♡</div>',
      letter: '<div style="font-size:108px;filter:drop-shadow(0 8px 8px #f6c8dc)">💌</div><div class="spark spark-a">✦</div><div class="spark spark-b">♡</div>',
      cat: '<div style="font-size:112px;filter:drop-shadow(0 8px 8px #f6c8dc)">😽</div><div class="spark spark-a">✦</div><div class="spark spark-b">♡</div>',
      photo: ""
    };
    illustration.innerHTML = art[type] ?? art.envelope;
    illustration.hidden = type === "photo";
    photoWraps.forEach((wrap) => {
      wrap.hidden = true;
    });
  }

  function renderStep(index) {
    const step = steps[index];
    currentStep = index;
    card.classList.remove("changing");
    void card.offsetWidth;
    card.classList.add("changing");

    stepLabel.textContent = step.label;
    title.textContent = step.title;
    copy.textContent = step.copy;
    nextLabel.textContent = step.button;
    makeArt(step.art);

    if (step.image) {
      const photoIndex = index;

      photoWraps.forEach((wrap, i) => {
        wrap.hidden = i !== photoIndex;
      });

      const photo = photos[photoIndex];
      photo.src = step.image;

      photo.onerror = () => {
        photoWraps[photoIndex].hidden = true;
        illustration.hidden = false;
        illustration.innerHTML =
          '<div style="font-size:100px">📸💗</div>' +
          '<p style="color:#a83e70;font-weight:800">' +
          'Hãy kiểm tra ảnh trong assets/images/ nhé!' +
          '</p>';
      };
    }

    interaction.innerHTML = "";
    interaction.hidden = true;
    nextButton.hidden = false;

    if (step.final) {
      nextLabel.textContent = "Đọc lại từ đầu";
      interaction.hidden = false;
      nextButton.hidden = true;
      addChoice("❤️ Em cũng có cảm tình với anh", "Aaaa, anh đang cười một mình đây nè! Cảm ơn em đã nói cho anh biết. 💗");
      addChoice("🥰 Mình tìm hiểu nhau thêm nhé", "Anh đồng ý chứ! Mình cứ từ từ hiểu nhau hơn, không cần vội vàng nha. 🥰");
      addChoice("🙈 Em cần thêm thời gian", "Không sao đâu em. Cứ thoải mái suy nghĩ nhé, anh tôn trọng cảm xúc của em. 💛");
    }

    progressText.textContent = `${index + 1} / ${steps.length}`;
    progressDots.forEach((dot, i) => dot.classList.toggle("active", i === index));
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function addChoice(label, response) {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "choice-button";
    button.textContent = label;
    button.addEventListener("click", () => {
      const previous = interaction.querySelector(".choice-response");
      if (previous) previous.remove();
      const result = document.createElement("p");
      result.className = "choice-response";
      result.textContent = response;
      interaction.appendChild(result);
      createHearts(8);
    });
    interaction.appendChild(button);
  }

  function createHearts(count = 5) {
    const symbols = ["💗", "💕", "♡", "✨", "💖"];
    for (let i = 0; i < count; i++) {
      const heart = document.createElement("span");
      heart.className = "heart-pop";
      heart.textContent = symbols[Math.floor(Math.random() * symbols.length)];
      heart.style.left = `${8 + Math.random() * 84}%`;
      heart.style.top = `${55 + Math.random() * 30}%`;
      heart.style.animationDelay = `${Math.random() * .35}s`;
      document.body.appendChild(heart);
      window.setTimeout(() => heart.remove(), 2200);
    }
  }

  nextButton.addEventListener("click", () => {
    if (currentStep === steps.length - 1) {
      renderStep(0);
      return;
    }
    currentStep += 1;
    renderStep(currentStep);
    if (currentStep === steps.length - 1) createHearts(12);
  });

  musicToggle.addEventListener("click", async () => {
    if (music.paused) {
      try {
        await music.play();
        musicWanted = true;
        musicToggle.classList.add("is-playing");
        musicToggle.setAttribute("aria-pressed", "true");
        musicLabel.textContent = "Tắt nhạc";
        musicIcon.textContent = "♫";
      } catch (error) {
        musicLabel.textContent = "Không mở được nhạc";
        musicToggle.setAttribute("aria-pressed", "false");
        console.warn("Không phát được MP3. Hãy kiểm tra file assets/music/love.mp3.", error);
      }
    } else {
      music.pause();
      musicWanted = false;
      musicToggle.classList.remove("is-playing");
      musicToggle.setAttribute("aria-pressed", "false");
      musicLabel.textContent = "Bật nhạc";
      musicIcon.textContent = "♫";
    }
  });

  music.addEventListener("ended", () => {
    if (!musicWanted) musicToggle.classList.remove("is-playing");
  });

  renderStep(0);
})();
