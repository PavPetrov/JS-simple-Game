function start(state, game) {
    game.createBoard(state.board);
    game.createBall(state.ball);
    window.requestAnimationFrame(gameLoop.bind(null, state, game));
}

function gameLoop() {
    const { board } = state;
    const { boardElement } = game;
    const { ball } = state;


    if (state.keys.ArrowLeft) {

        board.posX = Math.max(board.posX - board.speed, 0);

    }

    if (state.keys.ArrowRight) {

        board.posX = Math.min(board.posX + board.speed, game.gameScreen.offsetWidth - board.width);
    }

    boardElement.style.left = board.posX + 'px';

    ballMovment(ball, board, state, game);

    console.log('frame');
    window.requestAnimationFrame(gameLoop.bind(null, state, game));
}

function ballMovment (ball, board, state, game) {
 //   const { ball } = state;
    const { ballElement } = game;

    ball.posY += ball.ofsetY + ball.speed;
    ball.posX += ball.ofsetX + ball.speed;

    ballElement.style.left = ball.posX + 'px';
    ballElement.style.bottom = ball.posY + 'px';


}