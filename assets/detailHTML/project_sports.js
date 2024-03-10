AOS.init();
/* Project Cards */

const projectcards = document.querySelector(".projectcards");

// Array of object for projects
const projects = [
  {
    title: "e스포츠 대회 신설",
    cardImage: "../../assets/images/project-page/fifaScreenshot1.jpg",
    description: "\
    많은 학생들이 교내 e스포츠 대회의 창설을 원하는 것으로 알고 있습니다. 제가 당선된다면 이에 부응해 피파 모바일, 리그 오브 레전드 등 e스포츠 대회의 개최를 추진하겠습니다.",
    tagimg: "https://rawg.io/games/fifa-mobile-soccer/screenshots",
    minorities: "©rawg.io",
    Previewlink: "",
    Githublink: "",
  },
  {
    title: "교내 체육 대회 중계",
    cardImage: "../../assets/images/project-page/dshs_sasa.png",
    description: "\
    다른 일정 때문에, 아니면 까먹어서 놓친 경기, 다시 보고 싶지 않으신가요? 이젠 모든 주요 경기들을 여명필름과 협의 후 녹화하여 유튜브에 업로드하도록 하겠습니다.",
    tagimg: "https://www.youtube.com/watch?v=W4j2eQKGots",
    minorities: "©여명필름 유튜브",
    Previewlink: "",
    Githublink: "",
  },
  {
    title: "스포츠 리그 운영",
    cardImage: "../../assets/images/project-page/brentford.png",
    description: "\
    운동하기에 충분한 사람이 모이지 않거나 자리가 없어서 운동을 하지 못한 경험이 있으신가요? 축구, 농구 리그를 학업을 방해하지 않게 여유 있는 일정으로 운영하여 교내 체육 활동을 장려하겠습니다.",
    tagimg: "https://www.brentfordfc.com/en/news/article/first-team-brentford-premier-league-fixtures-2023-24-season",
    minorities: "©Brentford FC",
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
