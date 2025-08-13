function opentab(tabName) {

  const tabLinks = document.getElementsByClassName("tab-links");
  for (let i = 0; i < tabLinks.length; i++) {
    tabLinks[i].classList.remove("active-link");
  }

  const tabContents = document.getElementsByClassName("tab-contents");
  for (let i = 0; i <tabContents.length; i++) {
    tabContents[i].classList.remove("active-tab");
  }

  event.currentTarget.classList.add("active-link");

  document.getElementById(tabName).classList.add("active-tab");
}

// ---------------------------------certificate---------------------------------------
const certificates = document.querySelectorAll(".cert-container img");
    let currentIndex = 0;

    setInterval(() => {
      certificates[currentIndex].classList.remove("active");
      currentIndex = (currentIndex + 1) % certificates.length;
      certificates[currentIndex].classList.add("active");
    }, 2000);