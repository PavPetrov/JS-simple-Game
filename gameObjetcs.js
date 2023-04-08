function initGameObjects() {

    const startScreen = document.querySelector('.start-screen');
    const gameScreen = document.querySelector('.game-screen');

    return {
        startScreen,
        gameScreen,
        createBoard(initState) {
            let boardElement = document.createElement('div');
            boardElement.classList.add('board');

            boardElement.style.width = initState.width + 'px';
            boardElement.style.height = initState.height + 'px';

            initState.posX = game.gameScreen.offsetWidth / 2 - 50;

            boardElement.style.left = initState.posX + 'px';
            boardElement.style.bottom = initState.posY + 'px';

            gameScreen.appendChild(boardElement);

            this.boardElement = boardElement;

            return boardElement;

        },
        createBall(state){
            let ballElement = document.createElement('div');
            ballElement.classList.add('ball');

            ballElement.style.width = state.width + 'px';
            ballElement.style.height = state.height + 'px';

            state.posX =  game.gameScreen.offsetWidth / 2 - 10;
            
            ballElement.style.left = state.posX +'px';
            ballElement.style.bottom = state.posY +'px';

            gameScreen.appendChild(ballElement);

        }

    }
}