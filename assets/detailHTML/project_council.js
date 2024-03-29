AOS.init();
/* Project Cards */

const projectcards = document.querySelector(".projectcards");

// Array of object for projects
const projects = [
  {
    title: "온라인 건의함 개설",
    cardImage: "../../assets/images/project-page/suggestionBox.jpg",
    description: "\
    학생들이 학교 운영에 대해 보다 직접적인 목소리를 낼 수 있도록, 익명성이 보장된 온라인 건의함을 개설하도록 하겠습니다. 또, 과거 운영되었던 '대전과학고 대신 전해드립니다'와 유사한 계정을 만들어 운영하려고 합니다.",
    tagimg: "https://www.phob.co.kr/goods/view.php?goodsno=18068654",
    minorities: "©라이프스토리 포비",
    Previewlink: "",
    Githublink: "",
  },
  {
    title: "학생 전체 회의 개최",
    cardImage: "../../assets/images/project-page/uncouncil.jpg",
    description: "\
    일 년에 한두 번, 학생자치회와 각 학급의 임원들뿐 아니라 참가를 희망하는 학생들이 자유롭게 참여할 수 있는 회의의 장을 만들겠습니다. 선생님들과 학생들이 자유롭게 의견을 나누고 서로의 목소리를 들을 수 있을 것입니다.",
    tagimg: "https://betterworldcampaign.org/blog/un-security-council-veto",
    minorities: "©Better World Campaign",
    Previewlink: "",
    Githublink: "",
  },
];

// function for rendering project cards data

//<footer style="height: 2rem;"><a href="projects.html" style="text-decoration-line:none; color:rgb(63, 25, 170)">>> 공약 목록 바로가기 <<</a></footer>
                
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
