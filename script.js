const tracks = [];
const banlist = ["63ef023a768e3ae56565b6c3"];
//const IDarr = ["https://dashcraft.io/?t=6636900ce52a0be7b6978e15", "https://dashcraft.io?t=66369f1ee52a0be7b697d002", "https://dashcraft.io?t=6636b21ee52a0be7b69840f5", "https://dashcraft.io?t=6636c85ee52a0be7b698a24e", "https://dashcraft.io?t=6636c8ede52a0be7b698a520", "https://dashcraft.io?t=6636cc1de52a0be7b698b0a4", "https://dashcraft.io?t=6636cd39e52a0be7b698b4bb", "https://dashcraft.io/?t=6636a124e52a0be7b697da65", "https://dashcraft.io/?t=665f803d5b98a760ebae94b5", "https://dashcraft.io?t=6636f7f4e52a0be7b6995e73", "https://dashcraft.io/?t=6636eb7ee52a0be7b6992d6e", "https://dashcraft.io/?t=663797fae52a0be7b69c9791", "https://dashcraft.io?t=6637fe91e52a0be7b69eb389", "https://dashcraft.io?t=663800c7e52a0be7b69ebab7", "https://dashcraft.io?t=663841f2e52a0be7b69fb284", "https://dashcraft.io/?t=66383655e52a0be7b69f90c8", "https://dashcraft.io/?t=66394b82e52a0be7b6a60948", "https://dashcraft.io?t=66418ebbe52a0be7b6ce2b04", "https://dashcraft.io?t=6642ca51e52a0be7b6d4304d", "https://dashcraft.io?t=663ae214e52a0be7b6adbfdf", "https://dashcraft.io?t=666b390e5b98a760ebdf8494", "https://dashcraft.io/?t=665f741d5b98a760ebae6e4d", "https://dashcraft.io?t=666b0d435b98a760ebde8797", "https://dashcraft.io/?t=666b372c5b98a760ebdf7c74", "https://dashcraft.io?t=6652653c59adfc382f77ddfc", "https://dashcraft.io/?t=66609b4f5b98a760ebb31966", "https://dashcraft.io?t=6660af995b98a760ebb381ab", "https://dashcraft.io/?t=6661d7d75b98a760ebb81016", "https://dashcraft.io/?t=6660f7d75b98a760ebb4715b", "https://dashcraft.io/?t=6667a1ea5b98a760ebd1b777"];

const IDarr = ["https://dashcraft.io?t=66e892cb105029fd916a5025", "https://dashcraft.io?t=6636d190e52a0be7b698c7e6", "https://dashcraft.io/?t=6679d3545b98a760eb1a1473", "https://dashcraft.io/?t=667e1db85b98a760eb2997a2", "https://dashcraft.io/?t=667edc755b98a760eb2c5848", "https://dashcraft.io?t=667f08ea5b98a760eb2d13de", "https://dashcraft.io/?t=667f085b5b98a760eb2d11c2", "https://dashcraft.io?t=667f34d95b98a760eb2da355", "https://dashcraft.io?t=667f3dac5b98a760eb2db7b8", "https://dashcraft.io?t=667f43ed5b98a760eb2dcca9", "https://dashcraft.io?t=667f4ca65b98a760eb2df7d4", "https://dashcraft.io?t=667f57c15b98a760eb2e1e97", "https://dashcraft.io?t=667f745b5b98a760eb2e6962", "https://dashcraft.io?t=668026f95b98a760eb30b2be", "https://dashcraft.io?t=66803f495b98a760eb30f19e", "https://dashcraft.io?t=66804d685b98a760eb311eb0", "https://dashcraft.io?t=66804da25b98a760eb311f8f", "https://dashcraft.io?t=668057545b98a760eb313bd4", "https://dashcraft.io?t=66805a635b98a760eb314426", "https://dashcraft.io?t=66807afb5b98a760eb31a202", "https://dashcraft.io?t=668082265b98a760eb31b1c3", "https://dashcraft.io?t=668094935b98a760eb31eacc", "https://dashcraft.io?t=6681908e5b98a760eb35021d", "https://dashcraft.io?t=668199515b98a760eb352571", "https://dashcraft.io?t=6689c04c5b98a760eb4df033", "https://dashcraft.io?t=66b3c76e5b98a760ebaf1010", "https://dashcraft.io/?t=66cf9a72105029fd912aef18", "https://dashcraft.io?t=66e4e4f8105029fd915f763e", "https://dashcraft.io?t=66e72465105029fd9165f4c6", "https://dashcraft.io/?t=66e8702d105029fd9169cd15"]
//const mappers = ["gornaz", "PhantomInfinity", "PhantomInfinity", "PhantomInfinity", "PhantomInfinity", "PhantomInfinity", "PhantomInfinity", "gornaz", "foxy", "PhantomInfinity", "GribGribReal", "Orang", "PhantomInfinity", "PhantomInfinity", "PhantomInfinity", "f0xy_god", "f0xy_god", "PhantomInfinity", "PhantomInfinity", "dusty", "f0xy_god", "Orang", "PhantomInfinity", "f0xy_god", "PhantomInfinity", "Axret", "dusty", "axret", "Nebbie", "SmiSh"]
const mappers = ["foxy_god", "PhantomInfinity", "foxy_god", "foxy_god", "foxy_god", "PhantomInfinity", "foxy_god", "foxy_god", "foxy_god", "foxy_god", "foxy_god", "foxy_god", "foxy_god", "foxy_god", "foxy_god", "foxy_god", "foxy_god", "Orang", "foxy_god", "foxy_god", "PhantomInfinity", "foxy_god", "foxy_god", "foxy_god", "foxy_god", "PhantomInfinity", "Fish", "PhantomInfinity", "PhantomInfinity", "Zingman"]
//const overrides = [{ map: 1, override: [] }, { map: 2, override: [] }, { map: 3, override: [] }, { map: 4, override: [] }, { map: 5, override: [] }, { map: 6, override: [] }, { map: 7, override: [] }, { map: 8, override: [] }, { map: 9, override: [] }, { map: 10, override: [] }, { map: 11, override: [] }, { map: 12, override: [] }, { map: 13, override: [] }, { map: 14, override: [] }, { map: 15, override: [] }, { map: 16, override: [] }, { map: 17, override: [] }, { map: 18, override: ["IceBryker", "Serphal", "Orang", "GBU_Foxy_God"] }, { map: 19, override: [] }, { map: 20, override: [] }, { map: 21, override: [] }, { map: 22, override: [] }, { map: 23, override: [] }, { map: 24, override: [] }, { map: 25, override: [] }, { map: 26, override: [] }, { map: 27, override: [] }, { map: 28, override: [] }, { map: 29, override: ["GBU_Foxy_God"] }, { map: 30, override: [] }]
const overrides = [{ map: 1, override: [] }, { map: 2, override: [] }, { map: 3, override: [] }, { map: 4, override: [] }, { map: 5, override: [] }, { map: 6, override: [] }, { map: 7, override: [] }, { map: 8, override: [] }, { map: 9, override: [] }, { map: 10, override: [] }, { map: 11, override: [] }, { map: 12, override: [] }, { map: 13, override: [] }, { map: 14, override: [] }, { map: 15, override: [] }, { map: 16, override: [] }, { map: 17, override: [] }, { map: 18, override: [] }, { map: 19, override: [] }, { map: 20, override: [] }, { map: 21, override: [] }, { map: 22, override: [] }, { map: 23, override: [] }, { map: 24, override: [] }, { map: 25, override: [] }, { map: 26, override: [] }, { map: 27, override: [] }, { map: 28, override: [] }, { map: 29, override: [] }, { map: 30, override: [] }]
console.log(overrides)
const numbers = ["1st", "2nd", "3rd", "4th", "5th", "6th", "7th", "8th", "9th", "10th"]
const leagues = ["Bronze 1", "Bronze 2", "Bronze 3", "Silver 1", "Silver 2", "Silver 3", "Gold 1", "Gold 2", "Gold 3", "Diamond"]
let points = []

for (let i = 0; i < IDarr.length; i++) {
  IDarr[i] = IDarr[i].slice(IDarr[i].length - 24, IDarr[i].length)
  document.getElementById("tracks").innerHTML += "#" + (i+1) + ": <a href=https://dashcraft.io/?t=" + IDarr[i] + " target='_blank'>https://dashcraft.io/?t=" + IDarr[i] + "</a> by " + mappers[i] + "<br>";
}


function retrieveMaps() {
  while (tracks.length > 0) {
    tracks.pop();
  }
  if (document.getElementById("checkbox").checked) {
    var url = "https://api.dashcraft.io/trackv2/global3?sort=new&verifiedOnly=true&page="
  } else {
    var url = "https://api.dashcraft.io/trackv2/global3?sort=new&verifiedOnly=false&page="
  }
  var fetches = [];
  for (let i = 0; i < 1000; i++) {
    fetches.push(
      fetch(url + i + "&pageSize=50")
        .then((response) => response.json())
        .then((json) => {

          let json1 = json.tracks;
          let IDarr = [];
          for (let a = 0; a < json1.length; a++) {
            IDarr.push(json1[a]._id);
          }
          return IDarr;
        }));

  }

  Promise.all(fetches)
    .then((IDL) => {
      while (IDarr.length > 0) {
        IDarr.pop();
      }
      for (let a = 0; a < IDL.length; a++) {
        for (let b = 0; b < IDL[a].length; b++) {
          IDarr.push(IDL[a][b]);
        }
      }
      getInfo()
    })
}


function getInfo() {
  
  document.getElementById("data").hidden = false
  

  var fetches = []
  for (let i = 0; i < IDarr.length; i++) {
    fetches.push(fetch("https://api.dashcraft.io/trackv2/" + IDarr[i] + "?supportsLaps1=true", {
      headers: {
        'Authorization': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWM0NmMzNGExYmEyMjQyNGYyZTAwMzIiLCJpbnRlbnQiOiJvQXV0aCIsImlhdCI6MTcwNzM3MTU3Mn0.0JVw6gJhs4R7bQGjr8cKGLE7CLAGvyuMiee7yvpsrWg'
      }
    })
      .then((response) => response.json())
      .then((json) => {
        return (json)
      })
    )
  }
  Promise.all(fetches)
    .then((IDL) => {
      console.log(IDL)
      while (tracks.length > 0) {
        tracks.pop();
      }
      for (let a = 0; a < IDL.length; a++) {
        tracks.push(IDL[a]);
      }
      document.getElementById("leaderboard").innerHTML = "<h2>Leaderboard</h2>"
      points = []
      calculate()
      


    });
}

function calculate() {


  console.log(tracks)



  document.getElementById("leaderboard").innerHTML += countPoints();




}

// player lookup
function playerLookup() {
  var players = []
  var playerlookup = document.getElementById("playerlookup")
  var link = document.getElementById("profilelink")
  var lbdata = document.getElementById("lbdata")
  link.innerHTML = ""
  lbdata.innerHTML = ""
  for (let i = 0; i < tracks.length; i++) {
    for (let j = 0; j < tracks[i].leaderboard.length; j++) {
      if ((tracks[i].leaderboard[j].user.username).includes(document.getElementById("player").value)) {
        if (!players.find(({ username }) => username === tracks[i].leaderboard[j].user.username)) {
          if (tracks[i].leaderboard[j].user.levelData.level > 0) {
            players.push(tracks[i].leaderboard[j].user)
          }
        }
      }
    }
  }
  console.log(players)

  for (let i = 0; i < players.length; i++) {
    link.innerHTML += "<a href='https://dashcraft.io/?u=" + players[i]._id + "' target='_blank'>" + players[i].username + "</a><br>"
  }
  if (players.length > 1) {
    link.innerHTML += "More than one player found so advanced data is not displayed"
  } else if (players.length == 0) {
    link.innerHTML = "No players found"
  }
  if (players.length == 1) {

    link.innerHTML += "Level " + players[0].levelData.level + " (" + players[0].levelData.xpInLevel + "/" + players[0].levelData.totalXpInLevel + ")"
    link.innerHTML += "<br>" + leagues[players[0].leagueNr]
  }
  if (false) {
    lbdata.innerHTML += "<br><h4>Leaderboard Data</h4><br>Leaderboard info not shown on global leaderboard"
  } else if (players.length == 1) {
    lbdata.innerHTML += "<h4>Leaderboard Data</h4>"
    lbdata.innerHTML += getPositions(players[0])
  }
}



function getTracks(player) {
  var fetches = [];
  for (let i = 0; i < 10; i++) {
    fetches.push(
      fetch("https://api.dashcraft.io/trackv2/user/public/" + player._id + "?page=" + i + "&pageSize=50")
        .then((response) => response.json())
        .then((json) => {

          let json1 = json.tracks;
          let IDarr = [];
          for (let a = 0; a < json1.length; a++) {
            IDarr.push(json1[a]._id);
          }

          return IDarr;
        }));
  }
  console.log(fetches)
  Promise.all(fetches)
    .then((IDL2) => {
      while (IDarr.length > 0) {
        IDarr.pop();
      }
      for (let a = 0; a < IDL2.length; a++) {
        for (let b = 0; b < IDL2[a].length; b++) {
          IDarr.push(IDL2[a][b]);
        }
      }
      console.log(IDarr)
      var html = ""
      for (let i = 0; i < IDarr.length; i++) {
        html += "<a href='https://dashcraft.io/?t=" + IDarr[i] + "' target='_blank'>" + "https://dashcraft.io/?t=" + IDarr[i] + "</a><br>"
      }
      document.getElementById("tracks").innerHTML += html
    });

}


function getPositions(player) {
  var positions = [];
  var totals = { time: 0, position: 0, tracks: 0 }
  for (let i = 0; i < tracks.length; i++) {
    if (tracks[i].leaderboard.find(({ user }) => user._id === player._id)) {
      positions.push({ position: (tracks[i].leaderboard.findIndex(({ user }) => user._id === player._id) + 1), mapper: tracks[i].user.username, link: "https://dashcraft.io/?t=" + tracks[i]._id, wr: tracks[i].leaderboard[0].time, time: tracks[i].leaderboard.find(({ user }) => user._id === player._id).time });
      totals.time += positions[positions.length - 1].time
      totals.position += positions[positions.length - 1].position
      totals.tracks += 1
    } else {
      if (overrides[i].override.includes(player.username)) {
        positions.push({ position: 10.5, mapper: tracks[i].user.username, link: "https://dashcraft.io/?t=" + tracks[i]._id, wr: tracks[i].leaderboard[0].time, time: 50000 })
      }
      if (tracks[i].leaderboard.length > -0) {
        positions.push({ position: 11, mapper: tracks[i].user.username, link: "https://dashcraft.io/?t=" + tracks[i]._id, wr: tracks[i].leaderboard[0].time, time: 100000 })
      } else {
        positions.push({ position: 11, mapper: tracks[i].user.username, link: "https://dashcraft.io/?t=" + tracks[i]._id, wr: 0, time: 100000 })
      }
    }
  }
  console.log(positions)
  positions.sort((a, b) => (b.position) - (a.position));
  console.log(totals)
  totals.time = Math.round(totals.time * 10000) / 10000
  totals.position = Math.round(totals.position * 100) / 100
  if (positions.find(({ position }) => position === 11)) {
    totals.time += " (not top 10 on all tracks)"
  }
  var html = "Total time: " + totals.time + "<br>Average position: " + totals.position / totals.tracks + "<br>"
  for (let i = 0; i < positions.length; i++) {
    if (positions[i].position == 11) {
      html += "<br>#" + (IDarr.findIndex((hi) => hi == positions[i].link.slice(positions[i].link.length - 24, positions[i].link.length)) + 1) + ": <a href='" + positions[i].link + "' target='_blank'>" + positions[i].mapper + "</a>'s track: Not top 10"
    } else if (positions[i].position == 10.5) {
      html += "<br>#" + (IDarr.findIndex((hi) => hi == positions[i].link.slice(positions[i].link.length - 24, positions[i].link.length)) + 1) + ": <a href='" + positions[i].link + "' target='_blank'>" + positions[i].mapper + "</a>'s track: unknown (overriden)"
    } else {
      html += "<br>#" + (IDarr.findIndex((hi) => hi == positions[i].link.slice(positions[i].link.length - 24, positions[i].link.length)) + 1) + ": <a href='" + positions[i].link + "' target='_blank'>" + positions[i].mapper + "</a>'s track: " + numbers[positions[i].position - 1] + " place ("
      if (positions[i].position == 1) {
        html += "Holds world record)"
      } else
        html += (Math.round((positions[i].time - positions[i].wr) * 10000) / 10000) + " seconds away from world record)"
    }

    if (positions[i].wr == 0) {
      html += " (unfinished)"
    }
  }
  return html
}

function countPoints() {
  for (let i = 0; i < tracks.length; i++) {
    for (let j = 0; j < overrides[i].override.length; j++) {
      tracks[i].leaderboard.push({ user: { username: overrides[i].override[j], levelData: { level: 0, xpInLevel: 0, leagueNr: 0 }, time: 100000 } })
    }
    for (let j = 0; j < tracks[i].leaderboard.length; j++) {
      if (banlist.includes(tracks[i].leaderboard[j].user._id)) {
        tracks[i].leaderboard.splice(j, 1)
        j -= 1
      } else if (points.find(({ username }) => username === tracks[i].leaderboard[j].user.username) != undefined) {
        points.find(({ username }) => username === tracks[i].leaderboard[j].user.username).points += (1 - j / 1000);
      } else {
        points.push({ username: tracks[i].leaderboard[j].user.username, points: (1 - j / 1000) });
      }
    }
  }

  points.sort((a, b) => b.points - a.points);
  console.log(points)
  var html = ""
  for (let i = 0; i < points.length; i++) {
    points[i].points = Math.ceil(points[i].points)
    html += points[i].username + ": " + points[i].points + " points<br>"
  }
  return html
}


function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

