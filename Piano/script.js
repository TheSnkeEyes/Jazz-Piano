const pianoKeys = document.querySelectorAll('.piano-keys .key');
const Volume =document.querySelector(".volume-slider input")
let audio = new Audio("tunes/tunes/a.wav")

const playTune = (key) => {
    audio.src = `tunes/tunes/${key}.wav`
    audio.play();

    const clickedKey= document.querySelector(`[data-key = ${key}]`);
    clickedKey.classList.add("active");
    setTimeout(()=>{
        clickedKey.classList.remove("active" )
    }, "20")
}

pianoKeys.forEach(key => {
    key.addEventListener('click', () => playTune(key.dataset.key))
});

const pressedKey = (e) => {
    playTune(e.key);
}

const handleSetVolume = (e) =>{
    audio.volume = e.target.value;
}

Volume.addEventListener('input' , handleSetVolume)

document.addEventListener("keydown", pressedKey)