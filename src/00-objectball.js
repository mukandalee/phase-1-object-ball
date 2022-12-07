function gameObject() {
    return {
        "home": {
            teamName: "Brooklyn Nets",
            colors: ["Black", "White"],
            players: {
                "Alan Anderson": {
                    number: "0",
                    shoe: "16",
                    points: "22",
                    rebounds: "12",
                    assists: "12",
                    steals: "3",
                    blocks: "1",
                    slamDunks: "1",
                },
                "Reggie Evans": {
                    number: "30",
                    shoe: "14",
                    points: "12",
                    rebounds: "12",
                    assists: "12",
                    steals: "12",
                    blocks: "12",
                    slamDunks: "7",
                },
                "Brook Lopez": {
                    number: "11",
                    shoe: "17",
                    points: "17",
                    rebounds: "19",
                    assists: "10",
                    steals: "3",
                    blocks: "1",
                    slamDunks: "15",
                },
                "Mason Plumlee": {
                    number: "1",
                    shoe: "19",
                    points: "26",
                    rebounds: "12",
                    assists: "6",
                    steals: "3",
                    blocks: "8",
                    slamDunks: "5",
                },
                "Jason Terry": {
                    number: "31",
                    shoe: "15",
                    points: "19",
                    rebounds: "2",
                    assists: "2",
                    steals: "4",
                    blocks: "11",
                    slamDunks: "1",
                },
            }
        },
        "away": {
            teamName: "",
            colors: [],
            players: {
                "Jeff Adrien": {
                    number: "4",
                    shoe: "18",
                    points: "10",
                    rebounds: "1",
                    assists: "1",
                    steals: "2",
                    blocks: "7",
                    slamDunks: "2",
                },
                "Bismak Biyombo": {
                    number: "0",
                    shoe: "16",
                    points: "12",
                    rebounds: "4",
                    assists: "7",
                    steals: "7",
                    blocks: "15",
                    slamDunks: "10",
                },
                " DeSagna Diop": {
                    number: "2",
                    shoe: "14",
                    points: "24",
                    rebounds: "12",
                    assists: "12",
                    steals: "4",
                    blocks: "5",
                    slamDunks: "5",
                },
                "Ben Gordon": {
                    number: "8",
                    shoe: "15",
                    points: "33",
                    rebounds: "3",
                    assists: "2",
                    steals: "1",
                    blocks: "1",
                    slamDunks: "0",
                },
                "Brendan Haywood": {
                    number: "33",
                    shoe: "15",
                    points: "6",
                    rebounds: "12",
                    assists: "12",
                    steals: "22",
                    blocks: "5",
                    slamDunks: "12",
                },
            }
        }
    };
}

// console.log(gameObject());

function numPointsScored(playerName) {
    console.log("Start of numPointsScored function");
    // debugger
    const game = gameObject();

    console.log("Looping through", game);
    // debugger

    for (side in game) {
        console.log(side);
        // debugger

        for (info in game[side]) {
            console.log(info);
            // debugger

            if (info === 'players') {
                for (player in game[side]["players"]) {
                    console.log(player);
                    if (player === playerName) {
                        const pointsInGame = game[side]["players"][player]["points"];

                        console.log("Stop of numPointsScored function");
                        console.log(`${playerName} ->`, pointsInGame);
                        return pointsInGame;
                    }
                }
            }
        }
    }
}

// numPointsScored("Brook Lopez");

function mostPointsScored() {
    const stats = [];
    const game = gameObject();

    for (side in game) {
        for (teamInfo in game[side]) {
            if (teamInfo === 'players') {
                for (player in game[side][teamInfo]) {
                    stats.push({
                        name: player,
                        points: game[side][teamInfo][player]["points"]
                    });
                }
            }
        }
    }

    const highestScore = Math.max(...stats.map(({ points }) => points));

    return stats.find(({ points }) => points == highestScore).name;
}

console.log(mostPointsScored());