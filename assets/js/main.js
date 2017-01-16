function mytodolist(event) {
	console.log("hello");
    var x = event.keyCode;
    if (x == 13) {  
         var todoinput = document.getElementById('textid')
        var div = document.getElementById('firstlist');
        div.innerHTML = div.innerHTML + todoinput.value;
    }
}