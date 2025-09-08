document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll(".navbar-nav .nav-link");

  function changeActiveLink() {
    let index = sections.length;

    while (--index && window.scrollY + 100 < sections[index].offsetTop) {}

    navLinks.forEach((link) => link.classList.remove("active"));
    navLinks[index].classList.add("active");
  }

  changeActiveLink();
  window.addEventListener("scroll", changeActiveLink);

  // Smooth scroll when clicking nav links
  navLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      document.querySelector(link.getAttribute("href")).scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    });
  });
});


// use for my hobbies
document.querySelectorAll(".video-container").forEach(container => {
  const video = container.querySelector(".custom-video");
  const playBtn = container.querySelector(".play-btn");

  // kapag pinindot yung play button
  playBtn.addEventListener("click", () => {
    if (video.paused) {
      video.play();
      playBtn.style.display = "none"; // itago kapag nag-play
    } else {
      video.pause();
      playBtn.style.display = "block"; // lumabas ulit kapag pause
    }
  });

  // kapag pinindot yung mismong video
  video.addEventListener("click", () => {
    if (video.paused) {
      video.play();
      playBtn.style.display = "none";
    } else {
      video.pause();
      playBtn.style.display = "block";
    }
  });

  // kapag natapos yung video, lumabas ulit button
  video.addEventListener("ended", () => {
    playBtn.style.display = "block";
  });
});




// Contact Form
const contactForm = document.getElementById("contactForm");
const successMessage = document.getElementById("successMessage");

contactForm.addEventListener("submit", (e) => {
  e.preventDefault(); // prevent page reload

  // Show success
  successMessage.style.display = "block";

  // Clear form
  contactForm.reset();

  // Hide after 3 seconds
  setTimeout(() => {
    successMessage.style.display = "none";
  }, 3000);
});
