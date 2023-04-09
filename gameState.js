function initState() {



    const state = {
        player: '',
        board: {
            width: 100,
            height: 24,
            //    posX: 100,
            posY: 50,
            speed: 5
        },
        keys: {
            ArrowLeft: false,
            ArrowRight: false
        },
        ball: {
            width: 25,
            height: 25,
            //   posX: 0,
            posY: 70,
            speed: 2,
            moveUp: false,
            moveDown: false,
            moveLeft: false,
            moveRight: false,
            isGone : false
        }
    }

    return state;
}