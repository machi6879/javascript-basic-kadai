const btn = document.getElementById('btn');

const textChange = document.getElementById('text');

btn.addEventListener('click', () => {  
  textChange.textContent = 'ボタンをクリックしました';  
});