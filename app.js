var array = []; 

function showIt() {
	let firstName = document.querySelector('#addFirstField').value;
	let lastName = document.querySelector('#addLastField').value;
	array.push(firstName+" "+lastName);
			
  //console.log(array +); 
	let list = document.querySelector('#contactList'); //this is a p
	list.innerHTML = "";  
	
	for(let i=0;i<array.length;i++){ 
		list.innerHTML += array[i] + ", <br>";
	}
	
	document.getElementById('addFirstField').value = '';
	document.getElementById('addLastField').value = '';
	
};