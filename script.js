
const sounds = ['applause', 'boo', 'gasp', 'tada', 'victory', 'wrong']

sounds.forEach(sound => {
    const btn = document.createElement('button')
    btn.classList.add('btn')

    btn.innerText = sound

    btn.addEventListener('click', () => {
      stopMusic()
      //https://developer.mozilla.org/en-US/docs/Web/HTML/Element/audio
      document.getElementById(sound).play()
    })

    document.getElementById('buttons').appendChild(btn)
})
//Use this function to pause the music and reset the music file time to 0 so that the sound don't play over each other
function stopMusic (){
  sounds.forEach(sound => {
    const music = document.getElementById(sound);
    //https://developer.mozilla.org/en-US/docs/Web/HTML/Element/audio
    music.pause();
    music.currentTime = 0;
  });
}