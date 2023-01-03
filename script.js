const pianokeys = document.querySelectorAll(".piano-keys .key"),
volumeSlider = document.querySelector(".volume-slider input"),
keysCheckbox = document.querySelector(".keys-checkbox input");

let allKeys =[],
audio = new Audio ("tunes/a.wav"); //by default, audio src is 'a' tune
const playTune = (key)=>
{
    audio.src = `tunes/${key}.wav`; //passing audio src based on key pressed
    audio.play(); // playing audio
    //console.log(allKeys);
    const clickedKey = document.querySelector(`[data-key="${key}"]`);
    //getting clicked key element
    clickedKey.classList.add("active");
    setTimeout(() =>
    { //removing active class affter 150 ms from clicked key element
        clickedKey.classList.remove("active")
    },150);
}
pianokeys.forEach(key =>{

allKeys.push(key.dataset.key); //adding data-key value to the allKeys array

key.addEventListener("click", () => playTune(key.dataset.key));

//console.log(key.dataset.key);
});
const handleVolume = (e) =>
{
    audio.volume = e.target.value; //passing the range slider valuse as volume

}
const pressedKey =(e) =>{
   // console.log(e);\
   //if the pressed key is in the allKeys array, only call the playtune function

   if(allKeys.includes(e.key)){
   playTune(e.key);
   }
}
const showHideKeys = () => {
    //toggling the lass of each keys to hide and show them
    pianokeys.forEach(key => key.classList.toggle("hide"));
}
keysCheckbox.addEventListener("click",showHideKeys);
volumeSlider.addEventListener("input",handleVolume);
document.addEventListener("keydown",pressedKey);