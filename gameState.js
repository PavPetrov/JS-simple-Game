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
            posY: 70
        }
    }

    return state;
}