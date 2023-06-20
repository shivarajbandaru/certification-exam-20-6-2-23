
// This code is used to get the player details from the local storage and display it on the player-details page. It first extracts the player name from the URL query parameter. Then, it retrieves the team and player details from the local storage. Using a for loop, it checks for the player with the given name and displays its details dynamically using string literals. Finally, it displays the player details on the player-details page.

let urlData = location.href;
let newUrl = new URL(urlData);
let playerUrl = newUrl.searchParams.get("name");
console.log(playerUrl)


// geting data from local storage

teamsDetails = JSON.parse(localStorage.getItem("teamArray"));
playersDetails = JSON.parse(localStorage.getItem("playerArray"));

var addteamclicked = () => {
    window.open("./addTeams.html", "_self")
}
var addPlayerClicked = () => {
    window.open("./addplayers.html", "_self")
}

let playerData = document.getElementById("player-details-con")
for (var i = 0; i < playersDetails.length; i++) {
    if (playersDetails[i].playerName == playerUrl) {
        var playingOrN = ""
        if (playersDetails[i].isPlaying == true) {
            playingOrN = "Playing"
        }
        else {
            playingOrN = "On Bench"
        }
        playerData.innerHTML += `
        <div id="player_detail-img">
        <img src="${playersDetails[i].playerImg}" alt="">
    </div>
        <div id="new-player-det">
        <table>
        <tr>
            <td>Player Name  </td>
            <td>${playersDetails[i].playerName}  </td>
        </tr>
    <table>
        <tr>
            <td> Team Name </td>
            <td> ${playersDetails[i].playerTeam}  </td>
        </tr>
    <table>
        <tr>
            <td> Team Code </td>
            <td>${playersDetails[i].from}   </td>
        </tr>
    <table>
        <tr>
            <td> Worth </td>
            <td>${playersDetails[i].price}  </td>
        </tr>
    <table>
        <tr>
            <td> Is playing </td>
            <td> ${playingOrN} </td>
        </tr>
    </table>
    </div>
    
        `
    }
}

