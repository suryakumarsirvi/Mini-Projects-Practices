const body = document.querySelector('body');
const hexBtn = document.querySelector('.hexBtn');
const Copy = document.querySelector('#Copy');
const like = document.querySelector('.like');
const likeCount = document.querySelector('.likeCount');
const Heart = document.querySelector('#Heart');


let clearInt = null;
let isLiked = localStorage.getItem('isLiked') === 'true';
let hexCode = localStorage.getItem('colorCode');
 hexBtn.textContent = `${hexCode}`;
body.style.backgroundColor = `${hexCode}`;

let Count = Number(localStorage.getItem('likeCount')) || 0;
likeCount.textContent = Count;

if (isLiked) {
    Heart.innerHTML = `<i class="ri-heart-3-fill"></i>`;
}



body.addEventListener('keydown', (e) => {
    if (e.code === 'Space') {
        const chars = '0123456789ABCDEF';
        let colors = '#';

        for (let i = 1; i <= 6; i++) {
            colors += chars[Math.floor(Math.random() * 16)];
        }
        let code = `${colors}`

        hexBtn.textContent = `${colors}`;
        body.style.backgroundColor = `${colors}`;
        localStorage.setItem('colorCode', code);
        clearTimeout(clearInt);
    }
})

hexBtn.addEventListener('click', () => {
    Copy.innerHTML = `<i class='ri-check-double-fill'></i>`;

    clearInt = setTimeout(() => {
        Copy.innerHTML = `<i class='ri-file-copy-fill'></i>`;
    }, 3000)
    
    let text = hexBtn.textContent;
    navigator.clipboard.writeText(text);
})

like.addEventListener('click', ()=>{
    if(isLiked) return ;
    Count++;
    likeCount.textContent = Count;
    Heart.innerHTML = `<i class="ri-heart-3-fill"></i>`
    localStorage.setItem('isLiked', true);
    localStorage.setItem("likeCount", Count);

    isLiked = true;
})

like.addEventListener('click', ()=>{
})



