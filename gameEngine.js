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

    if(state.pointer.posX > 0){
        board.posX = state.pointer.posX;
    }

    boardElement.style.left = board.posX + 'px';

    ballMovment(ball, board, state, game);

    if (ball.isGone) {
        return alert('Game over');
    }

    window.requestAnimationFrame(gameLoop.bind(null, state, game));
}

function ballMovment(ball, board, state, game) {
    //   const { ball } = state;
    const { ballElement } = game;
    const scrWidth = game.gameScreen.offsetWidth - ball.width;
    const scrHeight = game.gameScreen.offsetHeight - ball.height;

    //Start random Left or Right Movment
    if (!(ball.moveUp || ball.moveDown || ball.ArrowLeft || ball.moveRight)) {
        if (Math.random() < 0.5) {
            moveRight();
            moveUp();
            ball.moveRight = true;
            ball.moveUp = true;
         //   console.log('right');
        } else {
            moveLeft();
            moveUp();
            ball.moveLeft = true;
            ball.moveUp = true;
         //   console.log('left');
        }
    }

    //Movment type 1
    if (ball.moveUp && ball.moveRight) {
        if (ball.posX < scrWidth) {
            moveRight();
        } else {
            ball.moveRight = false;
            ball.moveLeft = true;
        }

        if (ball.posY < scrHeight) {
            moveUp();
        } else {
            ball.moveUp = false;
            ball.moveDown = true;
        }
    }

    //Movment type 2
    if (ball.moveLeft && ball.moveUp) {
        if (ball.posX > 0) {
            moveLeft();
        } else {
            ball.moveRight = true;
            ball.moveLeft = false;
        }

        if (ball.posY < scrHeight) {
            moveUp();
        } else {
            ball.moveDown = true;
            ball.moveUp = false;
        }
    }

    // Movment Type 1-1
    if (ball.moveLeft && ball.moveDown) {

        if (ball.posX > 0) {
          //  console.log('111');
            moveLeft();
        } else {
            ball.moveLeft = false;
            ball.moveRight = true;
        }

        if (ball.posY > 0) {
            moveDown();
        } else {
            ball.isGone = true;
            return;
        }


        // Colision board Or End Game

    }

    //Movment Type 2-1

    if (ball.moveDown && ball.moveRight) {
        if (ball.posX < scrWidth) {
            moveRight();
        } else {
            ball.moveRight = false;
            ball.moveLeft = true;
        }
        if (ball.posY > 0 + ball.height) {
            moveDown();
        } else {
            //Reflect Or Game OVer
            ball.isGone = true;
            return;
        }
    }


    //Reflection from Board


    if ((ball.posX > board.posX && ball.posX < board.posX + board.width) &&
        (ball.posY < 50 + ball.height)) {

        if (ball.moveDown && ball.moveRight) {
            ball.moveDown = false;
            ball.moveUp = true;
            moveUp();
            moveRight();
        } else if(ball.moveDown && ball.moveLeft) {
            ball.moveDown = false;
            ball.moveUp = true;
            moveUp();
            moveLeft();
        }
     //   console.log('reflect');

    }



    function moveUp() {
        console.log('Up');
        ball.posY += ball.speed;
    }

    function moveRight() {
        console.log('Right');
        ball.posX += ball.speed;
    }

    function moveLeft() {
        console.log('Left');
        ball.posX -= ball.speed;
    }

    function moveDown() {
        console.log('Down');
        ball.posY -= ball.speed;
    }

    ballElement.style.left = ball.posX + 'px';
    ballElement.style.bottom = ball.posY + 'px';

    // let data = document.querySelector('.data');
    // data.textContent = state.pointer.posX;

}