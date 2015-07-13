function startGame() {
    var state = [
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 16, 0, 0],
        [0, 0, 0, 0]
    ];

    render(state);

    addArrowHandler(function (direction) {
        console.log("Key pressed", direction);
    });
}
