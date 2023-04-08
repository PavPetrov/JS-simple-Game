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
})

document.addEventListener('keyup', (e) => {
    if (commandKeys.includes(e.code)) {
        state.keys[e.code] = false;
    }
})


game.startScreen.addEventListener('click', (e) => {
    console.log(e.currentTarget);
    e.currentTarget.classList.add('hidden');
    game.gameScreen.classList.remove('hidden');

    start(state, game);

})