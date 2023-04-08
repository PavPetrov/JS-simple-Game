function start(state, game) {
    game.createBoard(state.board);
    window.requestAnimationFrame(gameLoop.bind(null, state, game));
}

function gameLoop() {
    const { board } = state;
    const { boardElement } = game;


    if (state.keys.ArrowLeft) {
        console.log(state.keys);
        board.posX -= 5;
    }

    if (state.keys.ArrowRight) {
        board.posX += 5;
    }

    boardElement.style.left = board.posX + 'px';

    console.log('frame');
    window.requestAnimationFrame(gameLoop.bind(null, state, game));
}