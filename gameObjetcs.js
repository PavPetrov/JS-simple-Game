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

         //   boardElement.style.left = initState.posX + 'px';
           boardElement.style.bottom = initState.posY + 'px';

            gameScreen.appendChild(boardElement);


            this.boardElement = boardElement;

            return boardElement;

        }
    }
}