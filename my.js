$("document").ready(function(){
	var rowText;
	var content = $('#guitars');
	for (var row of guitars) {
		rowText = 
		`<tr>
		<td>${row.name}</td>
		<td class="text-right">
		<a class="btn btn-outline-secondary" href="guitar.html?
		text=${row.name}">
		<i class="fa fa-fw fa-edit"></i>
		</a>
		<button type="button" class="btn btn-outline-danger rem-row"
		rowid="${row.name}">
		<i class="fa fa-fw fa-trash"></i>
		</button>
		</td>
		</tr>`;
		content.append(rowText);
	}
	$('.rem-row').click(function(){
		let number = $(this).attr('rowid');
		saveGuitars(guitars.filter((g)=>g.name !== name));
		location.reload();
	})
});