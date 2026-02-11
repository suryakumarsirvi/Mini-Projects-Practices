const micBtn = document.querySelector('.micBtn');
const micContainer = document.querySelector('#micContainer');
const cancelMicCard = document.querySelector('#cancelMicCard');

let isListening = false;

function voiceSearch() {
    micBtn.addEventListener('click', () => {
        isListening = !isListening;

        if (isListening) {
            micBtn.style.backgroundColor = '#e1002d';
            micContainer.style.display = 'flex';
        } else {
            micBtn.style.backgroundColor = '#272727';
            micContainer.style.display = 'none';
        }
    });

    // pasted by AI
    const SpeechRecognition =
        window.SpeechRecognition || window.webkitSpeechRecognition;

    if (SpeechRecognition) {
        const recognition = new SpeechRecognition();
        recognition.lang = "en-IN";
        recognition.interimResults = false;

        micBtn.addEventListener("click", () => {
            recognition.start();
        });

        recognition.onresult = (event) => {
            const spokenText = event.results[0][0].transcript;
            console.log("Error fetching voice Text: ", spokenText);
            searchInput.value = spokenText;
            searchText = spokenText.toLowerCase();
            renderVideo();
        };

        recognition.onerror = (event) => {
            console.error("Mic error:", event.error);
        };

    } else {
        micBtn.addEventListener("click", () => {
            alert("Voice search not supported in this browser");
        });
    }
    // yaha tak
    cancelMicCard.addEventListener('click', closeMic);

}


function closeMic() {
    isListening = false;
    micBtn.style.backgroundColor = '#272727';
    micContainer.style.display = 'none';
}

export default voiceSearch
