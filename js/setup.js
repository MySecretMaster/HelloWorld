document.querySelector('.setup').classList.remove('hidden');
document.querySelector('.setup-similar').classList.remove('hidden');

var SimilarListElement = document.querySelector('.setup-similar-list');

var similarWizardTemplate = document.querySelector('#similar-wizard-template')
	.content
	.querySelector('.setup-similar-item');
	
var getRandomArbitary = function(min, max) {
	return (Math.floor(Math.random() * (max - min) + min));
}

var WIZARDS_NAME = ['Ivan ', 'Huan Sebastian ', 'Maria ', 'Kristof ', 'Victor ', 'Yulia ', 'Lupita ', 'Washington '];

var WIZARDS_SECOND_NAME = ['di Maria', 'Veron', 'Mirabella', 'Walts', 'Onopko', 'Topolnitskaya', 'Niongo', 'Irwing'];

var coat = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];

var eyes = ['black', 'red', 'blue', 'yellow', 'green'];

var createWizard = function (wizardElement) {
	var wizards = {
		name: WIZARDS_NAME[getRandomArbitary(0, WIZARDS_NAME.length)] + WIZARDS_SECOND_NAME[getRandomArbitary(0, WIZARDS_SECOND_NAME.length)],
		coatColor: coat[getRandomArbitary(0, coat.length)],
		eyesColor: eyes[getRandomArbitary(0, eyes.length)],
	};
	wizardElement.querySelector('.setup-similar-label').textContent = wizards.name;
	wizardElement.querySelector('.wizard-coat').style.fill = wizards.coatColor;
	wizardElement.querySelector('.wizard-eyes').style.fill = wizards.eyesColor;
}

var addWizards = function () {
	var fragment = document.createDocumentFragment();
	for (var i = 0; i < 4; i++) {
		var wizardElement = similarWizardTemplate.cloneNode(true);
		createWizard(wizardElement);
		fragment.appendChild(wizardElement);
	}
	SimilarListElement.appendChild(fragment);
}

addWizards();






















