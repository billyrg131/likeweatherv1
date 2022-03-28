var btnF = document.getElementById('btnForecast');
var lat = document.getElementById('latI');
var long = document.getElementById('longI');
var tZone = document.getElementById('tz');
var fInfo = document.getElementById('info');
var fInfo1 = document.getElementById('info1')
var fInfo2 = document.getElementById('info2')
var fInfo3 = document.getElementById('info3')
var fInfo4 = document.getElementById('info4')
var fInfo5 = document.getElementById('info5')
var resetBtn = document.getElementById('rst')

btnF.addEventListener('click', function(){
    fetch('https://api.openweathermap.org/data/2.5/onecall?lat='+lat.value+'&lon='+long.value+'&appid=ced22aec0279af79fab812e8bc8f3312')
    .then(res => res.json())
    .then(data => {
        console.log(data)
        tzVal = data['timezone']
        tZone.innerHTML = 'Timezone:' + tzVal;
        data.daily.forEach((daily)=>{
            let td = document.createElement('td');
            td.innerHTML = "Day Temp: " + Math.round(daily.temp.day - 273.15)+ "˚C";
            td.style.fontSize = "12px";
            fInfo.appendChild(td);

            let td1 = document.createElement('td');
            td1.innerHTML = "Night Temp: " + Math.round(daily.temp.night - 273.15)+ "˚C";
            td1.style.fontSize = "12px";
            fInfo1.appendChild(td1)

            let td2 = document.createElement('td');
            td2.innerHTML = "Wind Gust: " + daily.wind_gust + "m/h";
            td2.style.fontSize = "12px";
            fInfo2.appendChild(td2);

            let td3 = document.createElement('td');
            td3.innerHTML = "Wind Speed: " + daily.wind_speed + "m/s";
            td3.style.fontSize = "12px";
            fInfo3.appendChild(td3);

            let td4 = document.createElement('td');
            td4.innerHTML = "Humidity: " + daily.humidity + "%";
            td4.style.fontSize = "12px";
            fInfo4.appendChild(td4);

            let td5 =document.createElement('td');
            td5.innerHTML = "Pressure: " + daily.pressure + "hPa";
            td5.style.fontSize = "12px";
            fInfo5.appendChild(td5);

        })

    })
    .catch((err)=> alert(err));
})

resetBtn.addEventListener('click', reset)

function reset(){
    window.location.reload('forecast.html');
}