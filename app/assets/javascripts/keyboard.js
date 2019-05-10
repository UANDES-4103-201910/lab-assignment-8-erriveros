// Note: $(() => {}); is equivalent to $(document).ready(function(){})
class keyboardController{
	constructor(keybord){
		this.target = keybord
	}

	keyListnerLog(key){
		$(key).click(function(){
			console.log($(this).text());
		});
	}

	keyListnerInput(key){
		$(key).click(function(){
			if ($(this).attr('id') == 'enter'){
				console.log('w');
				$('#input').append('<br>');
			}

			if ($(this).attr('id') == 'space'){
				console.log('s');
				$('#input').append('_');
			}
			if ($(this).attr('id') == 'tab'){
				console.log('w');
				$('#input').append('_____');
			}
			if ($(this).attr('id') == 'Bksp'){
				var a = $('input').text();
				$('input').empty();

				$('input').append(a.slice(0, -1))
			}
			if ($(this).attr('id') != 'Bksp' && $(this).attr('id') != 'shift' && $(this).attr('id') != 'cancel' && 
			$(this).attr('id') != 'accept' && $(this).attr('id') != 'shift2' && $(this).attr('id') != 'enter' && 
			$(this).attr('id') != 'space' && $(this).attr('id') != 'cancel' && $(this).attr('id') != 'tab'){
				$('#input').append($(this).text());

			
		}
	});
	}

	toggleKeyboard(button){
		$(button).click(function(){
			$('#kcontainer').toggle();
		})
	}
}


$(() => {
	console.log('Document ready! [app/assets/javascripts/keyboard.js]');
	const keyboard = new keyboardController('#kcontainer');
	keyboard.keyListnerLog('.key')
	keyboard.keyListnerInput('.key')
	keyboard.toggleKeyboard('#toggle')
});