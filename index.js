"use strict";

// QuerySelector :

const switchModeBtn = document.querySelector(".dark_mode-btn");

// -->ToggleModeBtn

switchModeBtn.addEventListener("click", function () {
  switchModeBtn.innerHTML = "";
  if (document.querySelector("html").classList.contains("dark_mode-HTML")) {
    document.querySelector("html").classList.remove("dark_mode-HTML");
    switchModeBtn.innerHTML = `light

          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="switch_mode--svg"
            viewBox="0 0 24 24"
          >
            <g
              fill="none"
              stroke="white"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
            >
              <path
                fill="white"
                fill-opacity="0"
                stroke-dasharray="36"
                stroke-dashoffset="36"
                d="M12 7c2.76 0 5 2.24 5 5c0 2.76 -2.24 5 -5 5c-2.76 0 -5 -2.24 -5 -5c0 -2.76 2.24 -5 5 -5"
              >
                <animate
                  fill="freeze"
                  attributeName="fill-opacity"
                  begin="1s"
                  dur="0.5s"
                  values="0;1"
                />
                <animate
                  fill="freeze"
                  attributeName="stroke-dashoffset"
                  dur="0.5s"
                  values="36;0"
                />
              </path>
              <path
                stroke-dasharray="2"
                stroke-dashoffset="2"
                d="M12 19v1M19 12h1M12 5v-1M5 12h-1"
                opacity="0"
              >
                <animate
                  fill="freeze"
                  attributeName="d"
                  begin="0.6s"
                  dur="0.2s"
                  values="M12 19v1M19 12h1M12 5v-1M5 12h-1;M12 21v1M21 12h1M12 3v-1M3 12h-1"
                />
                <animate
                  fill="freeze"
                  attributeName="stroke-dashoffset"
                  begin="0.6s"
                  dur="0.2s"
                  values="2;0"
                />
                <set
                  fill="freeze"
                  attributeName="opacity"
                  begin="0.6s"
                  to="1"
                />
                <animateTransform
                  attributeName="transform"
                  dur="30s"
                  repeatCount="indefinite"
                  type="rotate"
                  values="0 12 12;360 12 12"
                />
              </path>
              <path
                stroke-dasharray="2"
                stroke-dashoffset="2"
                d="M17 17l0.5 0.5M17 7l0.5 -0.5M7 7l-0.5 -0.5M7 17l-0.5 0.5"
                opacity="0"
              >
                <animate
                  fill="freeze"
                  attributeName="d"
                  begin="0.8s"
                  dur="0.2s"
                  values="M17 17l0.5 0.5M17 7l0.5 -0.5M7 7l-0.5 -0.5M7 17l-0.5 0.5;M18.5 18.5l0.5 0.5M18.5 5.5l0.5 -0.5M5.5 5.5l-0.5 -0.5M5.5 18.5l-0.5 0.5"
                />
                <animate
                  fill="freeze"
                  attributeName="stroke-dashoffset"
                  begin="0.8s"
                  dur="0.2s"
                  values="2;0"
                />
                <set
                  fill="freeze"
                  attributeName="opacity"
                  begin="0.8s"
                  to="1"
                />
                <animateTransform
                  attributeName="transform"
                  dur="30s"
                  repeatCount="indefinite"
                  type="rotate"
                  values="0 12 12;360 12 12"
                />
              </path>
            </g>
          </svg>`;
  } else {
    document.querySelector("html").classList.add("dark_mode-HTML");
    switchModeBtn.innerHTML = ` dark <svg xmlns="http://www.w3.org/2000/svg"  class="switch_mode--svg" viewBox="0 0 24 24"><g fill="currentColor" fill-opacity="0"><path d="M15.22 6.03l2.53 -1.94l-3.19 -0.09l-1.06 -3l-1.06 3l-3.19 0.09l2.53 1.94l-0.91 3.06l2.63 -1.81l2.63 1.81l-0.91 -3.06Z"><animate fill="freeze" attributeName="fill-opacity" begin="0.7s" dur="0.4s" values="0;1"/></path><path d="M19.61 12.25l1.64 -1.25l-2.06 -0.05l-0.69 -1.95l-0.69 1.95l-2.06 0.05l1.64 1.25l-0.59 1.98l1.7 -1.17l1.7 1.17l-0.59 -1.98Z"><animate fill="freeze" attributeName="fill-opacity" begin="1.1s" dur="0.4s" values="0;1"/></path></g><path fill="currentColor" fill-opacity="0" stroke="currentColor" stroke-dasharray="56" stroke-dashoffset="56" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 6c0 6.08 4.92 11 11 11c0.53 0 1.05 -0.04 1.56 -0.11c-1.61 2.47 -4.39 4.11 -7.56 4.11c-4.97 0 -9 -4.03 -9 -9c0 -3.17 1.64 -5.95 4.11 -7.56c-0.07 0.51 -0.11 1.03 -0.11 1.56Z"><animate fill="freeze" attributeName="fill-opacity" begin="1.5s" dur="0.5s" values="0;1"/><animate fill="freeze" attributeName="stroke-dashoffset" dur="0.6s" values="56;0"/></path></svg>`;
  }
});

// handling the api

const inputSearch = document.querySelector(".search_input");
const searchBtn = document.querySelector(".search_btn");

const userPicture = document.querySelector(".user_profile--pic");
const userName = document.querySelector(".userName");
const userNameLink = document.querySelector(".username__");
const dateJoined = document.querySelector(".date_joined");
const bio = document.querySelector(".user_bio");
const userRepos = document.querySelector(".user_repos");
const userFollowers = document.querySelector(".user_followers");
const userFollowing = document.querySelector(".user_following");
const location = document.querySelector(".location_link");
const twitter = document.querySelector(".twitter_link");
const github = document.querySelector(".github_link");
const company = document.querySelector(".company_link");

searchBtn.addEventListener("click", async function () {
  const userName = inputSearch.value ? inputSearch.value: console.log('not a real username'); 
  if (userName){
    const gitHubData = await getUser(userName);
    console.log(gitHubData) ;
    updateUi(gitHubData);
  }

  // const gitHubData = await getUser("octocat");
});



const getUser = async function (name) {
  try {
    const res = await fetch(`https://api.github.com/users/${name}`);
    if (!res.ok) {
      inputSearch.value = '' ; 
      inputSearch.closest('.search_container').classList.add('apply-shake')
      throw new Error(`Response status: ${res.status}`);
    }
    const data = await res.json();
    return data;
  } catch (err) {
    console.error(err);
  }
};

const checkExistance = function (element, data) {
  if (element.classList.contains("user_bio")){
  }
  const text = (element.classList.contains("user_bio")) ? "This peofile has No bio":"Not availble";
  if (data == "0" || data) {
    return data;
  } else {
    if (element.closest(".user_socials")) {
      element.closest(".user_socials").classList.add("not_availble");
    }
    element.classList.add("not_availble");
    return text;
  }
};

const getDate = function (date) {
  const dateCreated = new Date(date);
  const day = dateCreated.getDate() ; 
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const month = (months[dateCreated.getMonth()]);
  const year = (dateCreated.getFullYear());

  return `Joined ${day} ${month} ${year}` ; 
};

const updateUi = function (data) {

  userPicture.src = checkExistance(userPicture, data.avatar_url);
  userName.textContent = checkExistance(userName, data.name);
  userNameLink.textContent = `@${checkExistance(userNameLink, data.login)}`;
  userNameLink.href = checkExistance(userNameLink, data.html_url);
  dateJoined.textContent = `${getDate(data.created_at)}`;
  bio.textContent = checkExistance(bio, data.bio);
  userRepos.textContent = checkExistance(userRepos, data.public_repos);
  userFollowers.textContent = checkExistance(userFollowers, data.followers);
  userFollowing.textContent = checkExistance(userFollowing, data.following);
  location.textContent = checkExistance(location, data.location);

  twitter.textContent = checkExistance(twitter, data.twitter_username);

  github.textContent = checkExistance(github, data.html_url);
  github.href = checkExistance(github, data.html_url);

  company.textContent = checkExistance(company, data.company);
};


// const githubdatainitial = await getUser("octocat"); 
// updateUi(githubdatainitial); 


inputSearch.closest('.search_container').addEventListener("animationend", (e) => 
  inputSearch.closest('.search_container').classList.remove("apply-shake")
);