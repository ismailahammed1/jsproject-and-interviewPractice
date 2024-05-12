const value=document.getElementById('value');
const btns=document.querySelectorAll('.btn');

let counter = 0;

btns.forEach(function(btn) {
    btn.addEventListener('click', function(e) {
        const calculet=e.currentTarget.classList;
      if (calculet.contains('Decrease')) {
        counter--;
      }
      if (calculet.contains('Increase')) {
        counter++;
      }
      if (calculet.contains('Reset')) {
        counter=0;
      }
      value.textContent=counter;
    });
});

// const Increase=document.querySelector('Increase');
// const Reset=document.querySelector('Reset');
// const Decrease=document.querySelector('Decrease');
