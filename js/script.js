// JavaScript Document

var select = document.querySelector('select');
var para = document.querySelector('p');
var temperature = 29;
select.onchange = eventType;

	function eventType() {
  		var choice = select.value;
		 switch (choice) {
			case 'casual':
			  para.textContent = 'something comfy';
			  break;
			case 'semi-formal':
			  para.textContent = 'a polo';
			  break;
			case 'formal':
			  para.textContent = 'a suit';
			  break;
			default:
			  para.textContent = '';
		  }
		}
