let muteSearchByID = ["http://sb.celestialnetwork.net/index.php?p=commslist&searchText=", "&Submit#content"]
let banSearchByID = ["http://sb.celestialnetwork.net/index.php?p=banlist&searchText=", "&Submit#content"]
let playerStatSearchById = ["https://cn.gameme.com/search?q=", "&si=uniqueid&rc=all&x=22&y=11"]
let forumSearchById = ["https://forum.celestialnetwork.net/search/?q="];
let steamRepSec = ["https://steamrep.com/search?q="]
let banPage = document.createElement("IFRAME");
let mutePage = document.createElement("IFRAME");
let statPage = document.createElement("IFRAME");
let steamRepPage = document.createElement("IFRAME");
let forumPage = document.createElement("IFRAME");
let banLink = document.getElementById("banLink");
let muteLink = document.getElementById("muteLink");
let statLink = document.getElementById("statLink");
let steamRepLink = document.getElementById("steamRepLink");
let forumLink = document.getElementById("forumLink");

let btnDefaultColor = "#0f0f0f";
let btnClickedColor = "#C9D6EA";

function resetAll(){
  banPage.src = "";
  mutePage.src = "";
  statPage.src = "";
  let buttons = document.getElementsByClassName("buttons");
  let windows = document.getElementsByClassName("windows");
  for(let i = 0; i < buttons.length; i++){
    buttons[i].style.display = "none";
    windows[i].style.display = "none";
    buttons[i].style.backgroundColor = btnDefaultColor;
  }
}

function searchBtnClick(){
  resetAll();
  let search_field = document.getElementById("search_field").value;
  let buttons = document.getElementsByClassName("buttons");
  let windows = document.getElementsByClassName("windows");
  searchBan(search_field);
  searchMute(search_field);
  searchStats(search_field);
  searchForum(search_field);
  if(search_field.indexOf("STEAM") != -1){
    searchSteamRep(search_field);
  }
  return false;
}

function bansLoaded(){
  document.getElementById("banButton").style.display = "inline-block";
}

function mutesLoaded(){
  document.getElementById("muteButton").style.display = "inline-block";
}

function statsLoaded(){
  document.getElementById("statButton").style.display = "inline-block";
}

function steamRepLoaded(){
  document.getElementById("steamRepButton").style.display = "inline-block";
}

function forumsLoaded(){
  document.getElementById("forumButton").style.display = "inline-block";
}

function searchSteamRep(id){
  steamRepPage.src = steamRepSec[0] + id
  steamRepLink.href = steamRepPage.src;
  steamRepPage.width = "80%";
  steamRepPage.height = "500px";
  steamRepPage.onload = steamRepLoaded
  document.getElementById('steamRepSec').appendChild(steamRepPage);
}

function searchBan(id){
  banPage.src = banSearchByID[0] + id + banSearchByID[1] + "";
  banLink.href = banPage.src;
  banPage.width = "80%";
  banPage.height = "500px";
  banPage.onload = bansLoaded
  document.getElementById('banSec').appendChild(banPage);
}

function searchMute(id){
  mutePage.src = muteSearchByID[0] + id + muteSearchByID[1] + "";
  muteLink.href = mutePage.src;
  mutePage.width = "80%";
  mutePage.height = "500px";
  mutePage.onload = mutesLoaded
  document.getElementById('muteSec').appendChild(mutePage);
}

function searchStats(id){
  statPage.src = playerStatSearchById[0] + id + playerStatSearchById[1] + "";
  statLink.href = statPage.src;
  statPage.width = "80%";
  statPage.height = "500px";
  statPage.onload = statsLoaded
  document.getElementById('statSec').appendChild(statPage);
}

function searchForum(id){
  forumPage.src = forumSearchById[0] + id + "";
  forumLink.href = forumPage.src;
  forumPage.width = "80%";
  forumPage.height = "500px";
  forumPage.onload = forumsLoaded
  document.getElementById('forumSec').appendChild(forumPage);
}

function toggleBan(){
  var x = document.getElementById("banSec");
  var btn = document.getElementById("banButton");
  if (x.style.display == "block") {
    x.style.display = "none";
    btn.style.backgroundColor = btnDefaultColor;
  } else {
    x.style.display = "block";
    btn.style.backgroundColor = btnClickedColor;
  }
}

function toggleMute(){
  var x = document.getElementById("muteSec");
  var btn = document.getElementById("muteButton");
  if (x.style.display == "block") {
    x.style.display = "none";
    btn.style.backgroundColor = btnDefaultColor;
  } else {
    x.style.display = "block";
    btn.style.backgroundColor = btnClickedColor;
  }
}

function toggleStat(){
  var x = document.getElementById("statSec");
  var btn = document.getElementById("statButton");
  if (x.style.display == "block") {
    x.style.display = "none";
    btn.style.backgroundColor = btnDefaultColor;
  } else {
    x.style.display = "block";
    btn.style.backgroundColor = btnClickedColor;
  }
}

function toggleSteamRep(){
  var x = document.getElementById("steamRepSec");
  var btn = document.getElementById("steamRepButton");
  if (x.style.display == "block") {
    x.style.display = "none";
    btn.style.backgroundColor = btnDefaultColor;
  } else {
    x.style.display = "block";
    btn.style.backgroundColor = btnClickedColor;
  }
}

function toggleForum(){
  var x = document.getElementById("forumSec");
  var btn = document.getElementById("forumButton");
  if (x.style.display == "block") {
    x.style.display = "none";
    btn.style.backgroundColor = btnDefaultColor;
  } else {
    x.style.display = "block";
    btn.style.backgroundColor = btnClickedColor;
  }
}
