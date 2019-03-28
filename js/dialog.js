var dialogHandle = setup.querySelector('.setup-user-pic-field');

dialogHandle.addEventListener('mousedown', function(evt) {
	evt.preventDefault();
	
	var startCoords = { /**ʊ��������� �������*/
		x: evt.clientX,
		y: evt.clientY
	};
	
	var dragged = false;
	
	var onMouseMove = function(moveEvt) {
		moveEvt.preventDefault();
		dragged = true;
		
		var shift = { /**������� ����� ���������� ������������ � ������� ���������� �������*/
			x: startCoords.x - moveEvt.clientX,
			y: startCoords.y - moveEvt.clientY
		};
		
		startCoords = {
			x: moveEvt.clientX,
			y: moveEvt.clientY
		};
		
		setup.style.top = (setup.offsetTop - shift.y) + 'px';
		setup.style.left = (setup.offsetLeft - shift.x) + 'px';
	};
	
	var onMouseUp = function (upEvt) {
		upEvt.preventDefault();
		
		document.removeEventListener('mousemove', onMouseMove);
		document.removeEventListener('mouseup', onMouseUp);
		
		if (dragged) {
			var onClickPreventDefault = function(evt) {
				evt.preventDefault(); /**������� �������� �� ���������*/
				dialogHandle.removeEventListener('click', onClickPreventDefault);
			};
			dialogHandle.addEventListener('click', onClickPreventDefault);
		}

	};
	
	document.addEventListener('mousemove', onMouseMove);
	document.addEventListener('mouseup', onMouseUp);
});