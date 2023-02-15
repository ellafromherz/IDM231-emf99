// @ts-check


const monthSelect = document.getElementById('month');
const daySelect = document.getElementById('day');

let plant_type;

monthSelect.addEventListener('change', function() {
  const month = Number(monthSelect.value);
  const day = Number(daySelect.value);

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
});

daySelect.addEventListener('change', function() {
  const month = Number(monthSelect.value);
  const day = Number(daySelect.value);

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
  console.log('Selected month:', monthSelect.value);
  console.log('Selected day:', daySelect.value);
  console.log('Plant type:', plant_type);
});
