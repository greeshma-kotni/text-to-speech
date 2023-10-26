// Check if the browser supports the SpeechSynthesis API
if ('speechSynthesis' in window) {
    const textInput = document.getElementById('text-input');
    const speakButton = document.getElementById('speak-button');
    const speechOutput = document.getElementById('speech-output');
    
    const synth = window.speechSynthesis;

    speakButton.addEventListener('click', function () {
        const text = textInput.value;
        if (text !== '') {
            const utterance = new SpeechSynthesisUtterance(text);
            synth.speak(utterance);

            utterance.onend = function () {
                speechOutput.textContent = 'Speech synthesis completed.';
            };
        } else {
            speechOutput.textContent = 'Please enter text to be spoken.';
        }
    });
} else {
    console.error('SpeechSynthesis API is not supported in this browser.');
}
