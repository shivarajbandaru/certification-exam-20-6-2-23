// This is a JavaScript code that retrieves data from local storage and displays it on a webpage based on the URL query parameter "name".

// First, it gets the current URL using location.href and creates a new URL object from it. Then, it retrieves the query parameter "name" using newUrl.searchParams.get("name") and stores it in the variable teamFull.



let urlData = location.href;
let newUrl = new URL(urlData);
let teamFull = newUrl.searchParams.get("name");
// console.log(urlData);

// console.log(teamFull);


// Next, it gets data from local storage using localStorage.getItem() and parses it as JSON using JSON.parse(). The parsed data is stored in the variables teamsDetails and playersDetails.


// geting data from local storage
var addteamclicked = () => {
    window.open("./addTeams.html", "_self")
}
var addPlayerClicked = () => {
    window.open("./addplayers.html", "_self")
}

teamsDetails = JSON.parse(localStorage.getItem("teamArray"));
playersDetails = JSON.parse(localStorage.getItem("playerArray"));
var teamMainBox = document.getElementById("container_teams")
var tableTeam = document.getElementById("table-team")

var cnt = 0;



// Then, it loops through playersDetails array and filters players based on their team name. For each filtered player, it creates an HTML element using template literals and appends it to the teamMainBox element. It also adds a click event listener to each created element that opens a new page with player details using the window.open() method.  

for (var i = 0; i < playersDetails.length; i++) {
    console.log(playersDetails[i]);
    if (teamFull == playersDetails[i].from) {
        var isPlay = ""
        if (playersDetails[i].isPlaying == true) {
            isPlay = "Playing"
        }
        else {
            isPlay = "On Bench"
        }
        var currentP = playersDetails[i].playerName

        cnt++
        teamMainBox.innerHTML +=
            `<div onclick= "makethisinclick('${currentP}')"    class="minibox">
<img src="${playersDetails[i].playerImg}" class="mainimage" alt=""/> 
<div class="dataodcard">
  <p class="text1"> ${playersDetails[i].playerName}   </p>
  <p class="text3"> Worth : ${playersDetails[i].price} </p>
  <p class="text3"> Playing : ${isPlay} </p>
  <p class="text2">
   ${playersDetails[i].description} </p>
 
</div>
</div>
`
    }
    function makethisinclick(res) {
        window.open(`./playerDetails.html?name=${res}`, "_self")
    }

}

// After that, it searches for the top batsman and top bowler from the playersDetails array based on the player's position and team name.


// search for top batsman
var topBatsman = ""
for (var j = 0; j < playersDetails.length; j++) {
    if (playersDetails[j].description == "Batsman" && playersDetails[j].from == teamFull) {
        topBatsman = playersDetails[j].playerName

        break
    }
    else {
        topBatsman = "No Player"
    }
}
// search for top bowler
var topBowler = ""
for (var j = 0; j < playersDetails.length; j++) {
    if (playersDetails[j].description == "Bowler" && playersDetails[j].from == teamFull) {
        topBowler = playersDetails[j].playerName

        break
    }
    else {
        topBowler = "No Player"
    }
}

// Finally, it generates a team table using the map() method and template literals and displays it on the webpage. The table displays team details such as team name, team icon, player count, top batsman, top bowler, and won count.


// team table

teamsDetails.map((item) => {
    if (teamFull == item.sName) {


        return tableTeam.innerHTML += `
 <table >
<tr>
    <td>Team name</td>
    <td>${item.teamFullName}</td>
</tr>
<tr>
    <td>Team icon</td>
    <td> <img src="${item.teamIcon}" class="team-page-icon" alt=""></td>
</tr>
<tr>
    <td>Player count</td>
    <td>  ${cnt}</td>
</tr>
<tr>
    <td>Top Batsman</td>
    <td>${topBatsman}</td>
</tr>
<tr>F
    <td>Top Bowler</td>
    <td>${topBowler}</td>
</tr>
<tr>
    <td>Won Count</td>
    <td>${item.WonCount}</td>
</tr>
</table>
`


    }


})

