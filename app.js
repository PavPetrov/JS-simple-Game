let state = initState();
let game = initGameObjects();

const commandKeys = [
    'ArrowLeft',
    'ArrowRight'
]

document.addEventListener('keydown', (e) => {
    if (commandKeys.includes(e.code)) {
        state.keys[e.code] = true;
    }
});

document.addEventListener('keyup', (e) => {
    if (commandKeys.includes(e.code)) {
        state.keys[e.code] = false;
    }
});
document.addEventListener('touchstart', (e) => {

    state.pointer.posX = e.touches[0].clientX;
    //   console.log(e.movementX);
    //   console.log(e.layerX)

    // if (e.movementX < 0) {
    //     state.keys.ArrowLeft = true;
    //     state.keys.ArrowRight = false;
    // }
    // if (e.movementX == 0) {
    //     state.keys.ArrowLeft = false;
    //     state.keys.ArrowRight = false;
    // }
    // if (e.movementX > 0) {
    //     state.keys.ArrowRight = true;
    //     state.keys.ArrowLeft = false;

    // }


});


game.startScreen.addEventListener('click', (e) => {
    document.querySelector('.info').classList.add('hidden');
    e.currentTarget.classList.add('hidden');
    game.gameScreen.classList.remove('hidden');

    start(state, game);

})