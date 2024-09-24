const consultarAPI = async () => {
    var ciudad = document.getElementById("ciudad").value;
    var pais = document.getElementById("pais").value;
    const apikey = "41342fab75ea3f66bed02784a2314dec";
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${ciudad},${pais}&appid=${apikey}&units=metric&lang=es`)
    const data = await response.json();
    console.log(data);
    const { name, main, timezone, weather } = data;
    document.getElementById("divResultado").innerHTML = `
<div class="text-center">
<h1>RESULTADO<h1>
<p>Ciudad: <b>${name}</b></p>
<h1>${weather[0].description}</h1>
  <img src="https://openweathermap.org/img/wn/${weather[0].icon}@2x.png" alt="no carga" width="100px" height="100px">
<h1><b> ${main.temp}C°</b></h1>
<h6>MIN:${main.temp_min}C°</h6>
<h6>MAX:${main.temp_max}C°</h6>
<h6>Humedad:${main.humidity}</h6>
<h6>PRESION:${main.pressure}</h6>
<h4>UTC:${parseInt(timezone)/3600}</h4>
</div>
    `
}