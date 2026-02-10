const micBtn = document.querySelector('.micBtn');
const searchBar = document.querySelector('#searchBar');
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
    cancelMicCard.addEventListener('click', closeMic);
}

function closeMic() {
  isListening = false;
  micBtn.style.backgroundColor = '#272727';
  micContainer.style.display = 'none';
}

export default voiceSearch
