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

//plant info
snake.addEventListener('click', function () {
  modal.style.display = 'block';
  heading.innerHTML = 'SNAKE PLANT';
  plantPic.src = 'images/aries.png';
  sign.innerHTML = 'ARIES';
  desc.innerHTML= 'Aries are known to be independent, so a snake plant, which is easy to care for, would be a good fit.' ;
});

aloe.addEventListener('click', function () {
  modal.style.display = 'block';
  heading.innerHTML = 'ALOE VERA';
  plantPic.src = 'images/taurus.png';
  sign.innerHTML = 'TAURUS';
  desc.innerHTML= 'Taurus are known to be reliable and practical, so an aloe vera, which is also easy to care for, would be a good fit.';
});

pothos.addEventListener('click', function () {
  modal.style.display = 'block';
  heading.innerHTML = 'POTHOS';
  plantPic.src = 'images/gemini.png';
  sign.innerHTML = 'POTHOS';
  desc.innerHTML= 'Geminis are known to be adaptable, so a Pothos, which is a versatile, easy-to-care-for plant, would be a good fit.';
});

jade.addEventListener('click', function () {
  modal.style.display = 'block';
  heading.innerHTML = 'JADE PLANT';
  plantPic.src = 'images/cancer.png';
  sign.innerHTML = 'CANCER';
  desc.innerHTML= 'Cancers are known to be nurturing, so a jade plant, which is said to bring good luck, would be a good fit.';
});

monstera.addEventListener('click', function () {
  modal.style.display = 'block';
  heading.innerHTML = 'MONSTERA';
  plantPic.src = 'images/leo.png';
  sign.innerHTML = 'LEO';
  desc.innerHTML= 'Leos are known to be confident, so a monstera, which are known for their bright, green appearance, would be a good fit.';
});

rubber.addEventListener('click', function () {
  modal.style.display = 'block';
  heading.innerHTML = 'RUBBER TREE';
  plantPic.src = 'images/virgo.png';
  sign.innerHTML = 'VIRGO';
  desc.innerHTML= 'Virgos are known for their attention to detail, so a rubber tree, a low-maintenance plant that thrives in stable environments, would be a good fit.';
});

peaceLily.addEventListener('click', function () {
  modal.style.display = 'block';
  heading.innerHTML = 'PEACE LILY';
  plantPic.src = 'images/libra.png';
  sign.innerHTML = 'LIBRA';
  desc.innerHTML= 'Libras are known for their sense of balance, so a peace lily, which is known for its calming effects, would be a good fit.';
});

orchid.addEventListener('click', function () {
  modal.style.display = 'block';
  heading.innerHTML = 'BLACK ORCHID';
  plantPic.src = 'images/scorpio.png';
  sign.innerHTML = 'SCORPIO';
  desc.innerHTML= 'Scorpios are known to be intense and mysterious, so a black orchid, which is rare and exotic, would be a good fit.';
});

spider.addEventListener('click', function () {
  modal.style.display = 'block';
  heading.innerHTML = 'SPIDER PLANT';
  plantPic.src = 'images/sagittarius.png';
  sign.innerHTML = 'SAGITTARIUS';
  desc.innerHTML= 'Sagittarians are known to be adventurous, so a spider plant, which is known for its ability to grow in a variety of conditions, would be a good fit.';
});

succulents.addEventListener('click', function () {
  modal.style.display = 'block';
  heading.innerHTML = 'SUCCULENTS';
  plantPic.src = 'images/capricorn.png';
  sign.innerHTML = 'CAPRICORN';
  desc.innerHTML= 'Capricorns are known to be hardworking and disciplined, so succulents, which require minimal care, would be a good fit.';
});

air.addEventListener('click', function () {
  modal.style.display = 'block';
  heading.innerHTML = 'AIR PLANT';
  plantPic.src = 'images/aquarius.png';
  sign.innerHTML = 'AQUARIUS';
  desc.innerHTML= 'Aquarians are known to be independent and unique, so air plants, which can survive without soil, would be a good fit.';
});

waterLily.addEventListener('click', function () {
  modal.style.display = 'block';
  heading.innerHTML = 'WATER LILY';
  plantPic.src = 'images/pisces.png';
  sign.innerHTML = 'PISCES';
  desc.innerHTML= 'Pisces are known to be intuitive and sensitive, so water lilies, which thrive in water, would be a good fit.';
});


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
  desc.innerHTML= 'Capricorns are known to be hardworking and disciplined, so succulents, which require minimal care, would be a good fit.';

} else if ((month === 11 && day >= 22) || (month === 12 && day <= 21)) {
  plant_type = 'spider plant'
  heading.innerHTML = 'SPIDER PLANT';
  plantPic.src = 'images/sagittarius.png';
  sign.innerHTML = 'SAGITTARIUS';
  desc.innerHTML= 'Sagittarians are known to be adventurous, so a spider plant, which is known for its ability to grow in a variety of conditions, would be a good fit.';

} else if ((month === 10 && day >= 24) || (month === 11 && day <= 21)) {
  plant_type = 'black orchid'
  heading.innerHTML = 'BLACK ORCHID';
  plantPic.src = 'images/scorpio.png';
  sign.innerHTML = 'SCORPIO';
  desc.innerHTML= 'Scorpios are known to be intense and mysterious, so a black orchid, which is rare and exotic, would be a good fit.';

} else if ((month === 9 && day >= 23) || (month === 10 && day <= 23)) {
  plant_type = 'peace lily'
  heading.innerHTML = 'PEACE LILY';
  plantPic.src = 'images/libra.png';
  sign.innerHTML = 'LIBRA';
  desc.innerHTML= 'Libras are known for their sense of balance, so a peace lily, which is known for its calming effects, would be a good fit.';

} else if ((month === 8 && day >= 23) || (month === 9 && day <= 22)) {
  plant_type = 'rubber tree'
  heading.innerHTML = 'RUBBER TREE';
  plantPic.src = 'images/virgo.png';
  sign.innerHTML = 'VIRGO';
  desc.innerHTML= 'Virgos are known for their attention to detail, so a rubber tree, a low-maintenance plant that thrives in stable environments, would be a good fit.';

} else if ((month === 7 && day >= 23) || (month === 8 && day <= 22)) {
  plant_type = 'monstera'
  heading.innerHTML = 'MONSTERA';
  plantPic.src = 'images/leo.png';
  sign.innerHTML = 'LEO';
  desc.innerHTML= 'Leos are known to be confident, so a monstera, which are known for their bright, green appearance, would be a good fit.';

} else if ((month === 6 && day >= 22) || (month === 7 && day <= 22)) {
  plant_type = 'jade plant'
  heading.innerHTML = 'JADE PLANT';
  plantPic.src = 'images/cancer.png';
  sign.innerHTML = 'CANCER';
  desc.innerHTML= 'Cancers are known to be nurturing, so a jade plant, which is said to bring good luck, would be a good fit.';

} else if ((month === 5 && day >= 21) || (month === 6 && day <= 21)) {
  plant_type = 'pothos'
  heading.innerHTML = 'POTHOS';
  plantPic.src = 'images/gemini.png';
  sign.innerHTML = 'POTHOS';
  desc.innerHTML= 'Geminis are known to be adaptable, so a Pothos, which is a versatile, easy-to-care-for plant, would be a good fit.';

} else if ((month === 4 && day >= 20) || (month === 5 && day <= 20)) {
  plant_type = 'aloe vera'
  heading.innerHTML = 'ALOE VERA';
  plantPic.src = 'images/taurus.png';
  sign.innerHTML = 'TAURUS';
  desc.innerHTML= 'Taurus are known to be reliable and practical, so an aloe vera, which is also easy to care for, would be a good fit.';

} else if ((month === 3 && day >= 21) || (month === 4 && day <= 19)) {
  plant_type = 'snake plant'
  heading.innerHTML = 'SNAKE PLANT';
  plantPic.src = 'images/aries.png';
  sign.innerHTML = 'ARIES';
  desc.innerHTML= 'Aries are known to be independent, so a snake plant, which is easy to care for, would be a good fit.' ;

} else if ((month === 2 && day >= 19) || (month === 3 && day <= 20)) {
  plant_type = 'water lily'
  heading.innerHTML = 'WATER LILY';
  plantPic.src = 'images/pisces.png';
  sign.innerHTML = 'PISCES';
  desc.innerHTML= 'Pisces are known to be intuitive and sensitive, so water lilies, which thrive in water, would be a good fit.';

} else if ((month === 1 && day >= 20) || (month === 2 && day <= 18)) {
  plant_type = 'air plant'
  heading.innerHTML = 'AIR PLANT';
  plantPic.src = 'images/aquarius.png';
  sign.innerHTML = 'AQUARIUS';
  desc.innerHTML= 'Aquarians are known to be independent and unique, so air plants, which can survive without soil, would be a good fit.';
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

//plant type based on data
function findPlant(plant_type) {
  return data.find(plant => plant.name === plant_type);
}



//modal
var modal = document.getElementById('plantModal');
var btn = document.getElementById('open_btn');
var span = document.getElementsByClassName('close')[0];

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

