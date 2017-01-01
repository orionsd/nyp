$(function(){
	$('form[name="CALLBACK_FORM"]').on("submit", function(){
		var name = $(this).find('input[name="form_text_1"]').val();
		var phone = $(this).find('input[name="form_text_2"]').val();
		if (name.length>0 && phone.length>0) {
			console.log("yaCounter38713850.reachGoal('zvonok1')");
			yaCounter38713850.reachGoal('zvonok1');
		}
	});
	$('form[name="ORDER"]').on("submit", function(){
		var name = $(this).find('input[name="form_text_3"]').val();
		var phone = $(this).find('input[name="form_text_4"]').val();
		var email = $(this).find('input[name="form_text_5"]').val();
		var type = $(this).find('input[name="web_form_submit"]').val();
		if (name.length>0 && phone.length>0 && email.length>0 && isEmail(email)) {
			if(type === 'Получить') {
				console.log("yaCounter38713850.reachGoal('podrobnee')");
				yaCounter38713850.reachGoal('podrobnee');
			} else if(type === 'Заказать'){
				console.log("yaCounter38713850.reachGoal('testdrive')");
				yaCounter38713850.reachGoal('testdrive');
			} else if(type === 'Отправить'){
				console.log("yaCounter38713850.reachGoal('raschet2')");
				yaCounter38713850.reachGoal('raschet2');
			}
		}
	});
	$('form[name="ORDER_PRICE"]').on("submit", function(){
		var name = $(this).find('input[name="form_text_16"]').val();
		var email = $(this).find('input[name="form_text_17"]').val();
		var type = $(this).attr('action');
		var n = type.indexOf("?");
		if(n>0){
			type = type.substr(0,n);
		}
		var count  = type.split('/');
		if (name.length>0 && email.length>0 && isEmail(email)) {
			if(type === '/') {
				console.log("yaCounter38713850.reachGoal('price1');");
				yaCounter38713850.reachGoal('price1');
			} else if(count.length == 4) {
				console.log("yaCounter38713850.reachGoal('price2')");
				yaCounter38713850.reachGoal('price2');
			} else if(count.length == 5) {
				console.log("yaCounter38713850.reachGoal('price3')");
				yaCounter38713850.reachGoal('price3');
			}
		}
	});
	$('form[name="CALC_FORM"]').on("submit", function(){
		var name = $(this).find('input[name="form_text_20"]').val();
		var phone = $(this).find('input[name="form_text_21"]').val();
		var email = $(this).find('input[name="form_text_22"]').val();
		var type = $(this).attr('action');
		var n = type.indexOf("?");
		if(n>0){
			type = type.substr(0,n);
		}
		if (name.length>0 && phone.length>0 && email.length>0 && isEmail(email)) {
			if(type === '/') {
				console.log("yaCounter38713850.reachGoal('okupaemost1')");
				yaCounter38713850.reachGoal('okupaemost1');
			} else {
				console.log("yaCounter38713850.reachGoal('okupaemost2')");
				yaCounter38713850.reachGoal('okupaemost2');
			}
		}
	});
	$('form[name="MAIN_OPEN_FORM"]').on("submit", function(){
		var name = $(this).find('input[name="form_text_10"]').val();
		var email = $(this).find('input[name="form_text_11"]').val();
		if (name.length>0 && email.length>0 && isEmail(email)) {
			console.log("yaCounter38713850.reachGoal('raschet1');");
			yaCounter38713850.reachGoal('raschet1');
		}
	});
	$('form[name="ORDER_PRODUCT"]').on("submit", function(){
		var name = $(this).find('input[name="form_text_6"]').val();
		var phone = $(this).find('input[name="form_text_7"]').val();
		var email = $(this).find('input[name="form_text_8"]').val();
		var type = $(this).attr('action');
		var n = type.indexOf("?");
		if(n>0){
			type = type.substr(0,n);
		}
		var count  = type.split('/');
		if (name.length>0 && phone.length>0 && email.length>0 && isEmail(email)) {
			if(count.length == 4) {
				console.log("yaCounter38713850.reachGoal('zakaz1')");
				yaCounter38713850.reachGoal('zakaz1');
			} else if(count.length == 5) {
				console.log("yaCounter38713850.reachGoal('zakaz2')");
				yaCounter38713850.reachGoal('zakaz2');
			}

		}
	});
});
function isEmail(email) {
	var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
	return regex.test(email);
}