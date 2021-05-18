window.onload = makeAjaxRequest;

let xhr = false;

function makeAjaxRequest() {
	if (window.XMLHttpRequest) {
		xhr = new XMLHttpRequest();
	} else {
		if (window.ActiveXObject) {
				xhr = newActiveXObject("Microsoft.XMLHTTP");
		}
	}
	if (xhr) {
		xhr.open("GET", "counties.json", true);
		xhr.send(); 
		xhr.onreadystatechange = showContents; 
	} else {
		document.getElementById("updatemessage").innerHTML = "Could not perform stated Request";
	}	
}

function showContents () {
	if (xhr.readyState == 4) {
	    if (xhr.status == 200) {
		    let data = JSON.parse(xhr.responseText); 
			let txt = "<tr><th>countyID</th><th>Name<th><th>n<th><th>e<th><th>gridId<th><th>wgs84Latn<th><th>wgs84Long<th></tr>";
			for (let i in data.counties) {
			  txt += "<tr>"
			  txt += "<td>" + data.counties[i].countyID + "</td>";
			  txt += "<td>" + data.counties[i].name + "</td>";
			  txt += "<td>" + data.counties[i].n + "</td>";
			  txt += "<td>" + data.counties[i].e + "</td>";
			  txt += "<td>" + data.counties[i].gridId + "</td>";
			  txt += "<td>" + data.counties[i].wgs84Lat + "</td>";
			  txt += "<td>" + data.counties[i].wgs84Long + "</td>";
			  txt += "</tr>"
			}
			document.getElementById("countylist").innerHTML = txt;
		} else {
		document.getElementById("updatemessage").innerHTML = "Could not perform stated request. Error: " + xhr.status;
		}
	}
}


           
	




