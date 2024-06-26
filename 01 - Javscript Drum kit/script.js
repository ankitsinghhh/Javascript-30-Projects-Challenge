document.addEventListener('DOMContentLoaded', (event) => {
    document.addEventListener('keydown', (event) => {
        const key = event.key.toUpperCase();
        const keyBox = document.querySelector(`.key-box[data-key="${key}"]`); //Selects the key-boxelement whosedata-key` attribute matches the key pressed.

        if (keyBox) {
            keyBox.classList.add('key-pressed');

            // Play the audio if it exists
            const audio = keyBox.querySelector('audio');
            if (audio) {
                audio.currentTime = 0; // Rewind to the start
                audio.play().catch(error => {
                    console.error(`Error playing audio for key "${key}":`, error);
                });
            }
        }
    });

    document.addEventListener('keyup', (event) => {
        const key = event.key.toUpperCase();
        const keyBox = document.querySelector(`.key-box[data-key="${key}"]`);

        if (keyBox) {
            keyBox.classList.remove('key-pressed');
        }
    });
});
