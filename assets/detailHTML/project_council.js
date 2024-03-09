AOS.init();
/* Project Cards */

const projectcards = document.querySelector(".projectcards");

// Array of object for projects
const projects = [
  {
    title: "건의함 탭 개설",
    cardImage: "../../assets/images/project-page/suggestionBox.jpg",
    description: "\
    우리 학교 학생들은 학교에 원하는 바를 건의할 수단을 접하기가 어려운 것 같습니다. 제가 전교 부회장으로 당선된다면 학교 홈페이지에 건의함 탭을 만들어 학생의 의견을 듣겠습니다.",
    tagimg: "https://www.phob.co.kr/goods/view.php?goodsno=18068654",
    minorities: "©라이프스토리 포비",
    Previewlink: "",
    Githublink: "",
  },
  {
    title: "학생 전체 회의 개최",
    cardImage: "../../assets/images/project-page/uncouncil.jpg",
    description: "\
    일 년에 한두 번 정도는 전교생 중 원하는 사람은 누구든 참여할 수 있는 회의를 개최하여 선생님들께 직접 개선점에 대해 문의하고 피드백을 받을 수 있는 회의를 개최하기 위해 노력하겠습니다.",
    tagimg: "https://betterworldcampaign.org/blog/un-security-council-veto",
    minorities: "©Better World Campaign",
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
                  scrollbar-width: none;
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
