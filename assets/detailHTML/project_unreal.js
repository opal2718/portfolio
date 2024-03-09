AOS.init();
/* Project Cards */

const projectcards = document.querySelector(".projectcards");

// Array of object for projects
const projects = [
  {
    title: "기숙사 상점 늘리기",
    cardImage: "../../assets/images/project-page/well_done.jpg",
    description: "\
    올해 규정이 바뀌어 학교 선생님들은 상점을 주실 수 없게 되었는데, 기숙사에서 줄 수 있는 상점은 매우 적기에 봉사 상점을 추가하는 등 학교와 협의하여 상점 제도 확장을 알아보려 합니다.",
    tagimg: "https://www.waldenu.edu/online-bachelors-programs/bs-in-elementary-education/resource/what-every-school-teacher-should-know-about-giving-praise",
    minorities: "©Walden Univ.",
    Previewlink: "",
    Githublink: "",
  },
  {
    title: "주말 아침 점호 제거",
    cardImage: "../../assets/images/project-page/military.jpg",
    description: "\
    가뜩이나 일어나기도 싫은 주말에 기숙사, 일신관에서 두 번이나 하는 점호, 너무 힘들지 않나요? 두 번의 연속된 점호는 실효성도 낮기에 이에 대해서도 논의해보려 합니다.",
    tagimg: "https://www.cju.ac.kr/ms/selectBbsNttView.do?bbsNo=374&nttNo=76777&&pageUnit=10&key=2277&pageIndex=1",
    minorities: "©청주대학교 군사학과",
    Previewlink: "",
    Githublink: "",
  },
  {
    title: "학교 공연에 가수 초청",
    cardImage: "../../assets/images/project-page/aquarium.jpg",
    description: "\
    우리끼리만 하는 축제보다는 외부 인사를 불러오는 편이 더 재미있겠죠? 학교 예산만 충분하다면 타협할 수 있는 선에서 가수를 초청하고자 노력하겠습니다.",
    tagimg: "https://v.daum.net/v/20180724114752511",
    minorities: "©엑스포츠 뉴스",
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
