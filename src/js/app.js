import GameSavingLoader from './GameSavingLoader';

let data = GameSavingLoader.load().then((saving) => {
    return saving;
}, (error) => {
    throw new Error(error);
});

console.log(data.then((data) => { console.log(data) }));