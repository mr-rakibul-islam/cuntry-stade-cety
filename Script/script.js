
document.getElementById("stade").addEventListener("change", function(){
    document.getElementById("city").innerHTML = "";
    let statesId = this.value



fetch("https://raw.githubusercontent.com/sagarshirbhate/Country-State-City-Database/master/Contries.json?fbclid=IwAR2ihotVZFcsb1z81HGkb5u-DPFhGjSLXuj4BWQwck5jWZiAUpNNmxdn2ec")

.then(respons => respons.json())
.then(function (datas) {
    let cuntryId = document.getElementById("cuntrys").value;
    let index = 0;
    let dataLentgth = datas.Countries[cuntryId].States[statesId].Cities.length;

    while (index < dataLentgth) {
        document.getElementById("city").innerHTML += "<option value= "+index+">"+datas.Countries[cuntryId].States[index].StateName+"</option>";
        ++index
    }
    

})
})
