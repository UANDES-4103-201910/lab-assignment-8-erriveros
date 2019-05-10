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
			if ($(this).text() !== 'Bksp' && $(this).text() !== 'Shift' && $(this).text() !== 'Cancel' && $(this).text() !== 'Accept'){
				console.log('ye');
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