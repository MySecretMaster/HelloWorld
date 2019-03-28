
var ESC_KEYCODE = 27;
var ENTER_KEYCODE = 13;

/** Задания 3 лекции*/
document.querySelector('.setup-similar').classList.remove('hidden');

var SimilarListElement = document.querySelector('.setup-similar-list');

var similarWizardTemplate = document.querySelector('#similar-wizard-template')
	.content
	.querySelector('.setup-similar-item');
	
var getRandomArbitaryWhole = function(min, max) {
	return (Math.floor(Math.random() * (max - min) + min));
}

var WIZARDS_NAME = ['Ivan ', 'Huan Sebastian ', 'Maria ', 'Kristof ', 'Victor ', 'Yulia ', 'Lupita ', 'Washington '];

var WIZARDS_SECOND_NAME = ['di Maria', 'Veron', 'Mirabella', 'Walts', 'Onopko', 'Topolnitskaya', 'Niongo', 'Irwing'];

var coat = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];

var eyes = ['black', 'red', 'blue', 'yellow', 'green'];

var createWizard = function (wizardElement) {
	var wizards = {
		name: WIZARDS_NAME[getRandomArbitaryWhole(0, WIZARDS_NAME.length)] + WIZARDS_SECOND_NAME[getRandomArbitaryWhole(0, WIZARDS_SECOND_NAME.length)],
		coatColor: coat[getRandomArbitaryWhole(0, coat.length)],
		eyesColor: eyes[getRandomArbitaryWhole(0, eyes.length)],
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

/**Задания 4 лекции*/
var setup = document.querySelector('.setup');
var userAvatar = document.querySelector('.setup-open');
var crossPopup = document.querySelector('.setup-close');
var setupUserName = setup.querySelector('.setup-user-name');
var setupWizardForm = setup.querySelector('.setup-wizard-form');

var pressPopupEscHandler = function(evt) {
	if (evt.keyCode === ESC_KEYCODE && setupUserName != document.activeElement) {
		closePopup();
	};
};

var openPopup = function () {
	setup.classList.remove('hidden');
	document.addEventListener('keydown', pressPopupEscHandler);
}

var closePopup = function () {
	setup.classList.add('hidden');
	document.removeEventListener('keydown', pressPopupEscHandler);
}

userAvatar.addEventListener('click', function() {
	openPopup();
})

userAvatar.addEventListener('keydown', function(evt) {
	if (evt.keyCode === ENTER_KEYCODE) {
		openPopup();
	}
})

crossPopup.addEventListener('click', function() {
	closePopup();
})

crossPopup.addEventListener('keydown', function(evt) {
	if (evt.keyCode === ENTER_KEYCODE && crossPopup === document.activeElement) {
		closePopup();
	}
})

/**Настройка цвета персонажа*/
var setupPlayer = document.querySelector('.setup-player');
var wizardCoat = setupPlayer.querySelector('.wizard-coat');
var wizardEyes = setupPlayer.querySelector('.wizard-eyes');
var wizardFireball = setupPlayer.querySelector('.setup-fireball-wrap');
var wizardCoatIndex = 0;
var wizardEyesIndex = 0;
var wizardFireballIndex = 0;

wizardCoat.addEventListener('click', function() {
	wizardCoatIndex++;
	if (wizardCoatIndex == coat.length) {
		wizardCoatIndex = 0;
	}
	wizardCoat.style.fill = coat[wizardCoatIndex];
});

wizardEyes.addEventListener('click', function() {
	wizardEyesIndex++;
	if (wizardEyesIndex == eyes.length) {
		wizardEyesIndex = 0;
	}
	wizardEyes.style.fill = eyes[wizardEyesIndex];
});

wizardFireball.addEventListener('click', function() {
	wizardFireballIndex++;
	if (wizardFireballIndex == eyes.length) {
		wizardFireballIndex = 0;
	}
	wizardFireball.style.background = eyes[wizardFireballIndex];
});

/**Ромыч интерпайзерс*/

var entranceForm = document.querySelector('.entrance-form');
var registrForm = document.querySelector('.registr-form');
var userEntranceButton = document.querySelector('.user-entrance-button');
var userRgistrButton = document.querySelector('.user-registr-button');

userEntranceButton.addEventListener('click', function() {
	entranceForm.classList.remove('hidden');
});

userRgistrButton.addEventListener('click', function() {
	registrForm.classList.remove('hidden');
});





















