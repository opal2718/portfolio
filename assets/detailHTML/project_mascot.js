AOS.init();
/* Project Cards */

const projectcards = document.querySelector(".projectcards");

// Array of object for projects
const projects = [
  {
    title: "우리만 마스코트 없어...",
    cardImage: "../../assets/images/project-page/doublemug3.jpg",
    description: "\
    우리 학교를 대표하는 마스코트를 만들어 더욱 다니고 싶고 자랑하고픈 학교가 될 수 있도록 하겠습니다.",
    tagimg: "https://brandkaist.com/product/nubzuki-doublemug/",
    minorities: "©KAIST Brand Shop",
    Previewlink: "",
    Githublink: "",
  },
  {
    title: "학생 참여 공모전",
    cardImage: "../../assets/images/project-page/vote.jpg",
    description: "\
    학생들이 직접 그린 캐릭터를 후보로 등록하고 전교생의 투표를 받아 가장 대전과학고등학교스러운 마스코트가 탄생할 수 있도록 할 계획입니다.",
    tagimg: "https://hls.harvard.edu/today/vote-of-confidence/",
    minorities: "©Harvard Law School",
    Previewlink: "",
    Githublink: "",
  },
  {
    title: "마스코트 굿즈 제작",
    cardImage: "../../assets/images/project-page/drNubzuki.jpg",
    description: "\
    우리의 마스코트를 항상 지니고 다닐 수 있게 티셔츠, 인형 등의 굿즈로 제작하려고 합니다. 다만, 이는 예산 문제로 무산될 수 있습니다.",
    tagimg: "https://brandkaist.com/product/nubzuki-hood/",
    minorities: "©KAIST Brand Shop",
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
