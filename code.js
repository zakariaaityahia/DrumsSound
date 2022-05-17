    function PlaySound(e) {
        const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
        const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
        if (!audio) return; // stop the function for running all together
        audio.currentTime = 0;
        audio.play();
        key.classList.toggle('playing');
    }    


    function removeTransition(e) {
        if (e.propertyName !== 'transform') return;  // skip it if it's not transform 
        this.classList.remove('playing');    
    }

    
    const keys = document.querySelectorAll('.key');
    keys.forEach(key => key.addEventListener('transitionend', removeTransition));
    window.addEventListener('keydown',PlaySound)