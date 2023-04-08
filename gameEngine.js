function start(state, game) {
    game.createBoard(state.board);
    window.requestAnimationFrame(gameLoop.bind(null, state, game));
}

function gameLoop() {
    const { board } = state;
    const { boardElement } = game;


    if (state.keys.ArrowLeft) {

        board.posX = Math.max(board.posX - board.speed, 0);

    }

    if (state.keys.ArrowRight) {

        board.posX = Math.min(board.posX + board.speed, game.gameScreen.offsetWidth - board.width);
    }

    boardElement.style.left = board.posX + 'px';

    console.log('frame');
    window.requestAnimationFrame(gameLoop.bind(null, state, game));
}