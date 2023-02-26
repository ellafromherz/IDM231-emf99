// @ts-check

//plants
const snake = document.getElementById('snake');
const aloe = document.getElementById('aloe');
const pothos = document.getElementById('pothos');
const jade = document.getElementById('jade');
const monstera = document.getElementById('monstera');
const rubber = document.getElementById('rubber');
const peaceLily = document.getElementById('lily');
const orchid = document.getElementById('orchid');
const spider = document.getElementById('spider');
const succulents = document.getElementById('succulents');
const air = document.getElementById('air');
const waterLily = document.getElementById('water');

//html
const plantPic = document.querySelector('.plant_pic');
const heading = document.querySelector('.plant_name');
const sign = document.querySelector('.plant_sign');
const desc = document.querySelector('.plant_desc'); 

//modal
var modal = document.getElementById('plantModal');
var btn = document.getElementById('open_btn');
var span = document.getElementsByClassName('close')[0];

//submit button
const submitBtn = document.getElementById('submit');


submitBtn.addEventListener('click', () => {
  const selectedDate = document.getElementById('datepicker').value;
  const datePick = new Date(selectedDate);
  const month = datePick.getMonth() + 1;
  const day = datePick.getDate();
  modal.style.display = 'block';
  let plant_type;

  if ((month === 12 && day >= 22) || (month === 1 && day <= 19)) {
    plant_type = 'succulents'
    heading.innerHTML = 'SUCCULENTS';
    plantPic.src = 'images/capricorn.png';
    sign.innerHTML = 'CAPRICORN';
    desc.innerHTML = 'Capricorns are known to be hardworking and disciplined, so succulents, which require minimal care, would be a good fit.';
  
  } else if ((month === 11 && day >= 22) || (month === 12 && day <= 21)) {
    plant_type = 'spider plant'
    heading.innerHTML = 'SPIDER PLANT';
    plantPic.src = 'images/sagittarius.png';
    sign.innerHTML = 'SAGITTARIUS';
    desc.innerHTML = 'Sagittarians are known to be adventurous, so a spider plant, which is known for its ability to grow in a variety of conditions, would be a good fit.';
  
  } else if ((month === 10 && day >= 24) || (month === 11 && day <= 21)) {
    plant_type = 'black orchid'
    heading.innerHTML = 'BLACK ORCHID';
    plantPic.src = 'images/scorpio.png';
    sign.innerHTML = 'SCORPIO';
    desc.innerHTML = 'Scorpios are known to be intense and mysterious, so a black orchid, which is rare and exotic, would be a good fit.';
  
  } else if ((month === 9 && day >= 23) || (month === 10 && day <= 23)) {
    plant_type = 'peace lily'
    heading.innerHTML = 'PEACE LILY';
    plantPic.src = 'images/libra.png';
    sign.innerHTML = 'LIBRA';
    desc.innerHTML = 'Libras are known for their sense of balance, so a peace lily, which is known for its calming effects, would be a good fit.';
  
  } else if ((month === 8 && day >= 23) || (month === 9 && day <= 22)) {
    plant_type = 'rubber tree'
    heading.innerHTML = 'RUBBER TREE';
    plantPic.src = 'images/virgo.png';
    sign.innerHTML = 'VIRGO';
    desc.innerHTML = 'Virgos are known for their attention to detail, so a rubber tree, a low-maintenance plant that thrives in stable environments, would be a good fit.';
  
  } else if ((month === 7 && day >= 23) || (month === 8 && day <= 22)) {
    plant_type = 'monstera'
    heading.innerHTML = 'MONSTERA';
    plantPic.src = 'images/leo.png';
    sign.innerHTML = 'LEO';
    desc.innerHTML = 'Leos are known to be confident, so a monstera, which are known for their bright, green appearance, would be a good fit.';
  
  } else if ((month === 6 && day >= 22) || (month === 7 && day <= 22)) {
    plant_type = 'jade plant'
    heading.innerHTML = 'JADE PLANT';
    plantPic.src = 'images/cancer.png';
    sign.innerHTML = 'CANCER';
    desc.innerHTML = 'Cancers are known to be nurturing, so a jade plant, which is said to bring good luck, would be a good fit.';
  
  } else if ((month === 5 && day >= 21) || (month === 6 && day <= 21)) {
    plant_type = 'pothos'
    heading.innerHTML = 'POTHOS';
    plantPic.src = 'images/gemini.png';
    sign.innerHTML = 'POTHOS';
    desc.innerHTML = 'Geminis are known to be adaptable, so a Pothos, which is a versatile, easy-to-care-for plant, would be a good fit.';
  
  } else if ((month === 4 && day >= 20) || (month === 5 && day <= 20)) {
    plant_type = 'aloe vera'
    heading.innerHTML = 'ALOE VERA';
    plantPic.src = 'images/taurus.png';
    sign.innerHTML = 'TAURUS';
    desc.innerHTML = 'Taurus are known to be reliable and practical, so an aloe vera, which is also easy to care for, would be a good fit.';
  
  } else if ((month === 3 && day >= 21) || (month === 4 && day <= 19)) {
    plant_type = 'snake plant'
    heading.innerHTML = 'SNAKE PLANT';
    plantPic.src = 'images/aries.png';
    sign.innerHTML = 'ARIES';
    desc.innerHTML = 'Aries are known to be independent, so a snake plant, which is easy to care for, would be a good fit.' ;
  
  } else if ((month === 2 && day >= 19) || (month === 3 && day <= 20)) {
    plant_type = 'water lily'
    heading.innerHTML = 'WATER LILY';
    plantPic.src = 'images/pisces.png';
    sign.innerHTML = 'PISCES';
    desc.innerHTML = 'Pisces are known to be intuitive and sensitive, so water lilies, which thrive in water, would be a good fit.';
  
  } else if ((month === 1 && day >= 20) || (month === 2 && day <= 18)) {
    plant_type = 'air plant'
    heading.innerHTML = 'AIR PLANT';
    plantPic.src = 'images/aquarius.png';
    sign.innerHTML = 'AQUARIUS';
    desc.innerHTML = 'Aquarians are known to be independent and unique, so air plants, which can survive without soil, would be a good fit.';
  }
  
  const plantObject = findPlant(plant_type);
  console.log(plantObject);
  //alert('your plant type is: ' + plant_type);
  });


const data = [
  {
    heading: 'SUCCULENTS',
    plantPic:'images/capricorn.png',
    sign: 'CAPRICORN',
    desc: 'Capricorns are known to be hardworking and disciplined, so succulents, which require minimal care, would be a good fit.',
    sound: 'audios/succulentcapricorn.mp3',
  },

  {
    heading: 'SPIDER PLANT',
    plantPic:'images/sagittarius.png',
    sign: 'SAGITTARIUS',
    desc: 'Sagittarians are known to be adventurous, so a spider plant, which is known for its ability to grow in a variety of conditions, would be a good fit.',
    sound: 'audios/spidersagittarius.mp3',
  },

  {
    heading: 'BLACK ORCHID',
    plantPic: 'images/scorpio.png',
    sign: 'SCORPIO',
    desc: 'Scorpios are known to be intense and mysterious, so a black orchid, which is rare and exotic, would be a good fit.',
    sound: 'audios/orchidscorpio.mp3',
  },

  {
    heading: 'PEACE LILY',
    plantPic: 'images/libra.png',
    sign: 'LIBRA',
    desc: 'Libras are known for their sense of balance, so a peace lily, which is known for its calming effects, would be a good fit.',  
    sound: 'audios/lilylibra.mp3',
  },

  {
    heading: 'RUBBER TREE',
    plantPic:'images/virgo.png',
    sign: 'VIRGO',
    desc: 'Virgos are known for their attention to detail, so a rubber tree, a low-maintenance plant that thrives in stable environments, would be a good fit.',
    sound: 'audios/rubbervirgo.mp3',
  },

  {
    heading: 'MONSTERA',
    plantPic: 'images/leo.png',
    sign: 'LEO',
    desc: 'Leos are known to be confident, so a monstera, which are known for their bright, green appearance, would be a good fit.',
    sound: 'audios/monsteraleo.mp3',
  },

  {
    heading: 'JADE PLANT',
    plantPic: 'images/cancer.png',
    sign: 'CANCER',
    desc: 'Cancers are known to be nurturing, so a jade plant, which is said to bring good luck, would be a good fit.',  
    sound: 'audios/jadecancer.mp3',
  },

  {
    heading: 'POTHOS',
    plantPic: 'images/gemini.png',
    sign: 'POTHOS',
    desc: 'Geminis are known to be adaptable, so a Pothos, which is a versatile, easy-to-care-for plant, would be a good fit.',
    sound: 'audios/pothosgemini.mp3',
  },

  {
    heading: 'ALOE VERA',
    plantPic: 'images/taurus.png',
    sign: 'TAURUS',
    desc: 'Taurus are known to be reliable and practical, so an aloe vera, which is also easy to care for, would be a good fit.',  
    sound: 'audios/aloetaurus.mp3',
  },

  {
    heading: 'SNAKE PLANT',
    plantPic: 'images/aries.png',
    sign: 'ARIES',
    desc: 'Aries are known to be independent, so a snake plant, which is easy to care for, would be a good fit.',  
    sound: 'audios/snakearies.mp3',
  },

  {
    heading: 'WATER LILY',
    plantPic: 'images/pisces.png',
    sign: 'PISCES',
    desc: 'Pisces are known to be intuitive and sensitive, so water lilies, which thrive in water, would be a good fit.',  
    sound: 'audios/waterlilypisces.mp3',
  },

  {
    heading: 'AIR PLANT',
    plantPic: 'images/aquarius.png',
    sign: 'AQUARIUS',
    desc: 'Aquarians are known to be independent and unique, so air plants, which can survive without soil, would be a good fit.',  
    sound: 'audios/airaquarius.mp3',
  },

];

//plant type based on data, headings are in caps lock bc of font 
function findPlant(plant_type) {
  return data.filter((plant) => plant.heading.toLowerCase() === plant_type.toLowerCase());
}

//modal functions
btn.onclick = function() {
  modal.style.display = 'block';
}

span.onclick = function() {
  modal.style.display = 'none';
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = 'none';
  }
}

