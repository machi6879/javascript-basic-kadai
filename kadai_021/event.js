
const btn = document.getElementById('btn');

const textChange = document.getElementById('text');

btn.addEventListener('click', () => {  
  setTimeout(() => {
    textChange.textContent = 'ボタンをクリックしました';  
},2000);
});