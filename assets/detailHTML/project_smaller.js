AOS.init();
/* Project Cards */

const projectcards = document.querySelector(".projectcards");

// Array of object for projects
const projects = [
  {
    title: "공용 충전기 비치",
    cardImage: "../../assets/images/project-page/charging.jpg",
    description: "\
    기숙사에 충전기를 두고 왔다거나, 교실에 충전기를 두고 와서 불편한 일이 많으셨을 거라 생각합니다. 각 층의 몇 곳에 공용 충전기를 비치하여 사용할 수 있게 하겠습니다.",
    tagimg: "https://www.anker.com/blogs/chargers/is-it-bad-to-leave-a-laptop-charger-plugged-in",
    minorities: "©Anker.com",
    Previewlink: "",
    Githublink: "",
  },
  {
    title: "화이트보드 활성화",
    cardImage: "../../assets/images/project-page/whiteboard1.jpg",
    description: "\
    일신관 1층에 있는 화이트보드가 아무 쓰임 없이 방치되고 있는 것이 아쉬웠습니다. 학생의 의견을 수렴해 화이트보드에게 적절한 용도를 부여해 주고자 합니다.",
    tagimg: "https://spectrum.ieee.org/the-new-brain-behind-the-whiteboardsand-morefor-hbos-silicon-valley",
    minorities: "©IEEE Spectrum",
    Previewlink: "",
    Githublink: "",
  },
];

// function for rendering project cards data
const showCards = () => {
  let output = "";
  projects.forEach(({ title, cardImage, tagimg, description, minorities, Githublink }) => {
    output += `       
        <div class="column skill-card card" style="margin: 15px"data-aos="zoom-in-up" data-aos-easing="linear" data-aos-delay="300" data-aos-duration="600" >
          <div class="wrapper" style="background: url(${cardImage}) center / cover no-repeat;">
            <div class="header">
            </div>
            <div class="data">
              <div class="content">
              <div class="title-div" style="padding-bottom:0rem;">
                <h1 class="title" style="padding-bottom:0rem;">${title}</h1>
                <p class="noscroll" style="
                  font-size: 20px; 
                  display: -webkit-box;
                  -webkit-box-orient: vertical;
                  -webkit-line-clamp: 4;
                  overflow: auto;
                  text-overflow: ellipsis;
                  margin-bottom: 4rem;
                  font-family: 'noEllipsis','HangulLighter';
                ">${description}</p>
                <p style="font-size: 15px;position: absolute; bottom:0px;"><a href="${tagimg}" style=" color:white; text-decoration:none" target="_blank" title="출처">${minorities}</a></p>
                </div>
              </div>
            </div>
          </div>
        </div>`;
  });
  projectcards.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards);

function myFunction() {
  // Declare variables
  var input, button, i, skillcard, card, title;
  input = document.getElementById("myInput").value;
  input = input.toUpperCase();
  skillcard = document.getElementsByClassName("skill-card");
  card = document.getElementsByClassName("card");
  title = document.getElementsByClassName("title");

  // Loop through all list items, and hide those who don't match the search query
  for (i = 0; i < button.length; i++) {
    if (
      button[i].innerHTML.toUpperCase().includes(input) ||
      title[i].innerHTML.toUpperCase().includes(input)
    ) {
      skillcard[i].style.display = "";
      card[i].style.display = "";
    } else {
      skillcard[i].style.display = "none";
      card[i].style.display = "none";
    }
  }
}
