let fontIconArray = [
	{
		name: 'cat',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'crow',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dog',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dove',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dragon',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'horse',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'hippo',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'fish',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'carrot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'apple-alt',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'lemon',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'pepper-hot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'user-astronaut',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-graduate',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-ninja',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-secret',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	}
];

const fontIcon = document.querySelector('.js-container');
const selectElement = document.getElementById('select-change');
console.log(selectElement);


fontIconArrayToDraw(fontIconArray,fontIcon);

// creamo la funzione per disegnare le icone
function fontIconArrayToDraw(fontIconArray,fontIcon){
	
	fontIconArray.forEach((element) => {
		
		const {name,prefix,type,family,color} = element;

		const randomColor = getRandomColor();

		element.color = randomColor;
		
		const SingleBoxIcon = `
    <div class="box-icon">
      <i class="${family} ${prefix}${name} fa-2x" style="color:${randomColor}; "></i>
			<span class="icon-name">${name}</span>
    </div>
		`;

		fontIcon.innerHTML += SingleBoxIcon;
	});
}

let typeIcons = "all";
// creamo la funzione per creare le option nella select
fontIconArray.forEach((element) => {
	
	if (typeIcons === "all"){
		
		const selectOption = `
		<option value="${typeIcons}">${typeIcons}</option>
		`;

		selectElement.innerHTML += selectOption;

		typeIcons = "second";
	}
	else if(element.type !==  typeIcons){
		
		const selectOption = `
			<option value="${element.type}">${element.type}</option>
		`;

		selectElement.innerHTML += selectOption;

		typeIcons = element.type;
	}

});


selectElement.addEventListener('change', (event) => {
  
	fontIcon.innerHTML = "";

	if(selectElement.value !== "all"){
		
		const iconToPrint = fontIconArray.filter((element) =>{
			return element.type === selectElement.value;
		});

		fontIconArrayToDraw(iconToPrint ,fontIcon);

	} else {
		
		fontIconArrayToDraw(fontIconArray ,fontIcon);
	}
});

function getRandomColor() {
  let letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}