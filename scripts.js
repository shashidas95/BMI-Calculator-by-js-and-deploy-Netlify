// const darkMood = document.getElementById('darkBtn');
// let mainElement = document.getElementById('main');
// darkMood.addEventListener('click', ()=>{
//  mainElement.classList.toggle('dark');
// });


const calculateBtn = document.getElementById('calculateBtn');
const showResult = document.getElementById('showResult');

calculateBtn.addEventListener('click', (e) => {
 e.preventDefault();
 const weightInKgs = document.getElementById('weightInput').value;

 const heightInCm = document.getElementById('heightInput').value;
 const heightInMeters = heightInCm / 100;

 const BMI = weightInKgs / (heightInMeters * heightInMeters);

 showResult.textContent = `BMI: ${BMI}`;
 console.log('BMI:', BMI);
});


