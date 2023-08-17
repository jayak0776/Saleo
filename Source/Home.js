const bar = document.getElementById('bar');
const close = document.getElementById('close');
const ul = document.getElementById('u');

if(bar){
    bar.addEventListener('click', () => {
    ul.classList.add('show'); 
  });

}
if(close){
    close.addEventListener('click', () => {
    ul.classList.remove('show'); 
  });

}