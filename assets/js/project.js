AOS.init();
/* Project Cards */

const projectcards = document.querySelector(".projectcards");

// Array of object for projects
const projects = [
  {
    title: "학교 마스코트 제작",
    cardImage: "assets/images/project-page/doublemug3.jpg",
    description: 
      "우리 학교의 마스코트가 없다는 것이 아쉽지 않나요? 우리만의 귀여운 마스코트가 만들어진다면 너무 밋밋하고 단조로운 PPT에도 부담 없이 넣을 수 있고, 굿즈도 만들어서 갖고 다닐 수 있는데 말이에요.",
    minorities: "©KAIST Brand Shop",
    tagimg: "https://brandkaist.com/product/nubzuki-doublemug/",
    Previewlink: "assets/detailHTML/project_mascot.html",
    Githublink: "",
  },
  {
    title: "교내 스포츠 대회 개선",
    cardImage: "assets/images/project-page/football.jpg",
    description: "\
    매년 여름 개최되고 있는 교내 체육 대회는 시험이 끝난 후 우리를 즐겁게 해주는 좋은 행사입니다. 하지만 그럼에도 여러분들은 이에 대해 많은 아쉬움이 있으실 거라 생각합니다. 그래서 학생 여러분의 의견을 수렴해서 우리의 체육 대회를 더욱 즐겁게 하려고 합니다.",
    tagimg: "https://pixabay.com/ko/photos/%EC%B6%95%EA%B5%AC-%EC%9E%94%EB%94%94-%EA%B3%B5-%ED%91%B8%EB%A5%B8-%EC%9E%94%EB%94%94-2778583/",
    minorities: "©pixabay.com",
    Previewlink: "assets/detailHTML/project_sports.html",
    Githublink: "",
  },
  {
    title: "학생에 의한 학생회",
    cardImage: "assets/images/project-page/discussion.jpg",
    description: "\
    우리 학교 학생회는 다른 학교에 비해 학생회 임원이 아닌 학생들의 소리를 듣기 어려운 구조라고 생각합니다. 학교-학생회-학생의 연결을 더욱 강화하여 학생들의 의견이 학사 운영에 더 중요하게 반영되게 하고 싶습니다.",
    tagimg: "https://www.obrennanns.ie/extra-curricular/student-council/",
    minorities: "©O'Brennan Nat'l School",
    Previewlink: "assets/detailHTML/project_council.html",
    Githublink: "",
  },
  {
    title: "타 학교와의 교류 증진",
    cardImage: "assets/images/project-page/school_fair.jpg",
    description: "\
    우리도 학교 간 컨퍼런스나 자사고 문화학술교류제처럼 다른 학교와 교류를 많이 해보고 싶다는 생각을 해본 적이 있으신가요? 빠른 시일 내에 오프라인 행사 일정을 잡기는 어렵겠지만, 온라인으로 다른 학교와 소통할 수 있는 창구를 만들겠습니다.",
    tagimg: "https://www.hutchins.tas.edu.au/news/the-hutchins-school-fair-2023/",    
    minorities: "©The Hutchins School",
    Previewlink: "assets/detailHTML/project_interact.html",
    Githublink: "",
  },
  {
    title: "기숙사 상점 늘리기",
    cardImage: "assets/images/project-page/dom1.jpg",
    description:
      "올해 규정이 바뀌어 학교 선생님들은 상점을 주실 수 없게 되었는데, 기숙사에서 줄 수 있는 상점은 매우 적기에 봉사 상점을 추가하는 등 학교와 협의하여 상점 제도 확장을 알아보려 합니다.",
    tagimg: "",
    minorities: "©여명관 B동 312호",
    Previewlink: "assets/detailHTML/project_unreal.html",
    Githublink: "",
  },
  {
    title: "자잘한 아이디어",
    cardImage: "assets/images/project-page/charging.jpg",
    description:
      "대표적인 공약으로 내세우기에는 조금 사소하지만 실행된다면 우리의 학교 생활을 편하게 해줄 작은 생각들입니다.",
    tagimg: "https://www.anker.com/blogs/chargers/is-it-bad-to-leave-a-laptop-charger-plugged-in",
    minorities: "©Anker.com",
    Previewlink: "assets/detailHTML/project_smaller.html",
    Githublink: "",
  },
];

// function for rendering project cards data
const showCards = () => {
  let output = "";
  projects.forEach(({ title, cardImage, tagimg, description, minorities, Previewlink, Githublink }) => {
    output += `       
        <div class="column skill-card card" style="margin: 15px"data-aos="zoom-in-up" data-aos-easing="linear" data-aos-delay="300" data-aos-duration="600" >
          <div class="wrapper" style="background: url(${cardImage}) center / cover no-repeat;">
            <div class="header">
            </div>
            <div class="data">
              <div class="content">
              <div class="title-div" style="padding-bottom:0rem;">
                <h1 class="title" style="padding-bottom:0rem;"><a href="${Previewlink}">${title}</a></h1>
                <p style="
                  font-size: 20px; 
                  display: -webkit-box;
                  -webkit-box-orient: vertical;
                  -webkit-line-clamp: 4;
                  overflow: hidden;
                  margin-bottom: 4rem;
                "><a href="${Previewlink}" style="text-decoration-line:none; color:white">${description}</a></p>
                <p style="font-size: 15px;position: absolute; bottom:0px;"><a target="_blank" href="${tagimg}" style=" color:white; text-decoration:none" title="출처">${minorities}</a></p>
                </div>
            <ul class="menu-content" style="position: absolute; bottom:0px; "><br>
                  <li><a href="${Previewlink}" class="social-icon" title="자세히 보기"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="25" viewBox="0 0 30 28" fill="none" stroke="#fff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="feather feather-monitor"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line></svg></a></li>
                  <!--<li><a href="${Githublink}" class="social-icon"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="25" viewBox="0 0 30 28" fill="none" stroke="#fff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="feather feather-github"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg></a></li>
                  -->
                </ul>
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
