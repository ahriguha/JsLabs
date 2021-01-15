$("document").ready(function(){
	var rowText;
	var content = $('#guitars');
	for (var row of guitars) {
		rowText = 
		`<tr>
		<td><h5>${row.name}</h5></td>
		<td><h5>${row.price}</h5></td>
		<td class="right-align">
		<a class="btn-floating waves-effect waves-light blue"
		 style="margin-right: 10px;" href="guitar.html?
		name=${row.name}">
		<i class="material-icons">edit</i>
		</a>
		</td>
		<td class="right-align">
		<a class="rem-row btn-floating waves-effect waves-light red"
		rowid="${row.name}">
		<i class="material-icons">delete</i>
		</a>
		</td>
		</tr>`;
		content.append(rowText);
	}
	$('.rem-row').click(function(){
		let name = $(this).attr('rowid');
		saveGuitars(guitars.filter((g)=>g.name !== name));
		location.reload();
	})
});