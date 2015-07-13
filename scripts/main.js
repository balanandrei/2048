function startGame() {
    var state = [
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0]
    ];

    render(state);

    addArrowHandler(function (direction) {
        console.log("Key pressed", direction);
        if (direction == "right") {
            moveRight(state);
        }
        else if (direction == "down") {
            moveDown(state);
        }
        render(state);
    });
    setupStartupState(state);
}

function getRandomCoordinates() {
    var i = Math.floor(Math.random() * 10%4);
    var j = Math.floor(Math.random() * 10%4);
    return {x: i, y:j};
}

function setupStartupState(state) {
    var firstCoordinates = getRandomCoordinates();
    state[firstCoordinates.x][firstCoordinates.y] = 2;

    var secondCoordinates = getRandomCoordinates();
    state[secondCoordinates.x][secondCoordinates.y] = 2;
}

function moveRight(state) {
    var freeCell = [];
    for (var i = 0; i<=3; i++) {
        for (var j = 3; j >=0; j--) {
            if (state[i][j] == 0 && !freeCell[i]) {
                freeCell[i] = j;
            } 

            if (state[i][j] && freeCell[i]) {
                state[i][freeCell[i]] = state[i][j];
                state[i][j] = 0;
            }
        }
    }
}
/*function moveDown(state){
    var freeCell=[];
    for(var j = 3; j>=0; j--) {
        for (var i = 0; i<=3; i++) {
            if (state[j][i] == 0 && !freeCell[i]) {
                freeCell[i] = j;
            } 

            if (state[j][i] && freeCell[i]) {
                state[j][freeCell[i]] = state[j][i];
                state[j][i] = 0;
            }
        }
    }
}*/

function moveDown(state) {
    var freeCell = [];
    for (var i = 0; i<=3; i++) {
        for (var j = 3; j>=0; j--) {
            if (state[j][i] == 0 && !freeCell[i]) {
                freeCell[i] = j;
            }
            if ( state[j][i] && freeCell[i] ) {
                state[freeCell[i]][i] = state[j][i];
                state[j][i] = 0;
            }
        }
    }
}
