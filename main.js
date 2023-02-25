// @ts-check
const submitBtn = document.getElementById('submit');

submitBtn.addEventListener('click', () => {
  const selectedDate = document.getElementById('datepicker').value;
  const datePick = new Date(selectedDate);
  const month = datePick.getMonth() + 1;
  const day = datePick.getDate();
  let plant_type;

if ((month === 12 && day >= 22) || (month === 1 && day <= 19)) {
  plant_type = 'succulents'
} else if ((month === 11 && day >= 22) || (month === 12 && day <= 21)) {
  plant_type = 'spider plant'
} else if ((month === 10 && day >= 24) || (month === 11 && day <= 21)) {
  plant_type = 'black orchid'
} else if ((month === 9 && day >= 23) || (month === 10 && day <= 23)) {
  plant_type = 'peace lily'
} else if ((month === 8 && day >= 23) || (month === 9 && day <= 22)) {
  plant_type = 'rubber tree'
} else if ((month === 7 && day >= 23) || (month === 8 && day <= 22)) {
  plant_type = 'monstera'
} else if ((month === 6 && day >= 22) || (month === 7 && day <= 22)) {
  plant_type = 'jade plant'
} else if ((month === 5 && day >= 21) || (month === 6 && day <= 21)) {
  plant_type = 'pothos'
} else if ((month === 4 && day >= 20) || (month === 5 && day <= 20)) {
  plant_type = 'aloe vera'
} else if ((month === 3 && day >= 21) || (month === 4 && day <= 19)) {
  plant_type = 'snake plant'
} else if ((month === 2 && day >= 19) || (month === 3 && day <= 20)) {
  plant_type = 'water lily'
} else if ((month === 1 && day >= 20) || (month === 2 && day <= 18)) {
  plant_type = 'air plant'
}

const plantObject = findPlant(plant_type);
console.log(plantObject);
//alert('your plant type is: ' + plant_type);

});

const data = [
  {
    name: 'succulents',
    sound: 'audios/succulentcapricorn.mp3',
    img:'images/capricorn.png',
  },

  {
    name: 'spider plant',
    sound: 'audios/spidersagittarius.mp3',
    img:'images/sagittarius.png',
  },

  {
    name: 'black orchid',
    sound: 'audios/orchidscorpio.mp3',
    img: 'images/scorpio.png',
  },

  {
    name: 'peace lily',
    sound: 'audios/lilylibra.mp3',
    img: 'images/libra.png',
  },

  {
    name: 'rubber tree',
    sound: 'audios/rubbervirgo.mp3',
    img: 'images/virgo.png',
  },

  {
    name: 'monstera',
    sound: 'audios/monsteraleo.mp3',
    img: 'images/leo.png',
  },

  {
    name: 'jade plant',
    sound: 'audios/jadecancer.mp3',
    img: 'images/cancer.png',
  },

  {
    name: 'pothos',
    sound: 'audios/pothosgemini.mp3',
    img: 'images/gemini.png',
  },

  {
    name: 'aloe vera',
    sound: 'audios/aloetaurus.mp3',
    img: 'images/taurus.png',
  },

  {
    name: 'snake plant',
    sound: 'audios/snakearies.mp3',
    img: 'images/aries.png',
  },

  {
    name: 'water lily',
    sound: 'audios/waterlilypisces.mp3',
    img: 'images/pisces.png',
  },

  {
    name: 'air plant',
    sound: 'audios/airaquarius.mp3',
    img: 'images/aquarius.png',
  },

];


function findPlant(plant_type) {
  return data.find(plant => plant.name === plant_type);
}



