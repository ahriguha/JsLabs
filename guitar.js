$('document').ready(function(){
	let searchParams = new URLSearchParams(window.location.search);
	let name = "";
	if(searchParams.has('name')){
		name = searchParams.get('name');
		let guitar = guitars.find((g)=>g.name == name);
		$('#name').val(guitar.name);
		$('#price').val(guitar.price);
	}

	$('#save').click(function(){
		if(name === ""){
			guitars.push({
				name: $('#name').val(),
				price: $('#price').val()
			});
		}else{
			let guitar = guitars.find((g)=>g.name == name);
			guitar.name = $('#name').val();
			guitar.price = $('#price').val();
		}
		saveGuitars(guitars);
		$(location).attr('href', 'index.html');
	});
});