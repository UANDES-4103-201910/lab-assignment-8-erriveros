// Note: $(() => {}); is equivalent to $(document).ready(function(){})
class keyboardController{
	constructor(keybordId){
		this.target = keybordId
	}

	keyListnerLog(){
		$('.key').click(function(){
			console.log($(this).text());
		});
	}
	
}


$(() => {
	console.log('Document ready! [app/assets/javascripts/keyboard.js]');
	$('.key').click(function(){
		console.log($(this).text());
	})
	$('#toggle').click(function(){
		$('#kcontainer').toggle();
	})
	$('.key').click(function(){
		if ($(this).text() === 'Bksp' && $(this).text() === 'Shift' && $(this).text() === 'Cancel' && $(this).text() === 'Accept'){
			$('#input').append($(this).text())
		}
	})
});