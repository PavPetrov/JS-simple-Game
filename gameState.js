function initState(){
    const state = {
        player: '',
        board:{
            width: 100, 
            height: 24,
            posX: 100,
            posY: 50
        },
        keys:{}
    }

    return state;
}