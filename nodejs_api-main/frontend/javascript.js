var url = "http://localhost:3000/view";
var id = "view";

async function generator(url, id) {
    var request = await new XMLHttpRequest()

request.open('GET', url, true)
request.onload = function () {
  // Begin accessing JSON data here
  var data = JSON.parse(this.response)
view(data, request, id);

}

request.send()
  }

  function view(data, request, id){
      if(id == "view"){
    if (request.status >= 200 && request.status < 400) {
         data.forEach((query) => {
          console.log(request.status);
          var div = document.createElement("tr");
            var mainContainer = document.getElementById(id);
          div.innerHTML = "<td>"+query.id+"</td><td><input id='name"+query.id+"' placeholder='"+query.name+"' value='"+query.name+"'/></td><td><input id='email"+query.id+"' placeholder='"+query.email+"' value='"+query.email+"'/></td><td><input id='town"+query.id+"' placeholder='"+query.town+"' value='"+query.town+"'/></td><td><input id='town_id"+query.id+"' placeholder='"+query.town_id+"' value='"+query.town_id+"'/></td><td><input id='birth_date"+query.id+"' placeholder='"+query.birth_date+"' value='"+query.birth_date+"'/></td>"+"<button onclick = 'deleterecord("+query.id+")' type = 'submit' value='Submit'>Delete</button>"+"<button onclick = 'update("+query.id+")'>Update</button>" ;
          mainContainer.appendChild(div)
        })
      } else {
        console.log('error')
      }}
  }

async function generate_html(){
await generator(url, id);
}

function deleterecord(id){
  navigator.sendBeacon('http://localhost:3000/deleterecord/'+ id);
  console.log(id);
}
function update(id){
  const data = id + ";"+ document.getElementById("name"+id).value + ";"+ document.getElementById("email"+id).value + ";"+ document.getElementById("town"+id).value+ ";"+ document.getElementById("town_id"+id).value +";"+ document.getElementById("birth_date"+id).value;
  
  navigator.sendBeacon('http://localhost:3000/update/'+ data);
  console.log(data);
}

generate_html();