AOS.init();
/* Project Cards */

const projectcards = document.querySelector(".projectcards");

// Array of object for projects
const projects = [
  {
    title: "커뮤니티 운영",
    cardImage: "../../assets/images/project-page/conversation1.jpg",
    description: "\
    전국의 영과고 학생들이 자유롭게 이용할 수 있는 온라인 커뮤니티를 운영하겠습니다. 서로의 고민과 자랑거리를 공유하며 공감할 수 있고, 학술적인 교류도 더욱 편리해질 것입니다.",
    tagimg: "https://www.inc.com/anna-johansson/7-ways-to-start-a-conversation-that-leads-where-you-want-it-to.html",
    minorities: "©Inc. Magazine",
    Previewlink: "",
    Githublink: "",
  },
  {
    title: "익명 상담소 운영",
    cardImage: "../../assets/images/project-page/counselor1.jpg",
    description: "\
    남들에게 말하기 껄끄러운 고민이 하나 쯤은 있으시리라 생각합니다. 앞서 언급한 커뮤니티에 익명 게시판 혹은 익명 일대일 채팅으로 서로의 고민을 들어줄 수 있는 기능을 추가하겠습니다.",
    tagimg: "https://www.betterhelp.com/advice/counseling/councilor-vs-counselor-there-is-a-difference/",
    minorities: "©Better Help",
    Previewlink: "",
    Githublink: "",
  },
  {
    title: "축제에 타 학교 초청",
    cardImage: "../../assets/images/project-page/schoolplay.png",
    description: "\
    우리 학교의 축제에 다른 학교 동아리(ex. 둔산여고 댄스부)를 가능한 한 자주 초청하여 더욱 즐거운 축제가 될 수 있도록 노력하겠습니다.",
    tagimg: "https://afaithfulattempt.blogspot.com/2011/12/set-painting-for-school-plays.htmlng",
    minorities: "©A Faithful Attempt",
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
