var inputValue = document.getElementById('weatherInput');
var button = document.getElementById('btn1');
var city = document.getElementById('city');
var temp = document.getElementById('temp');
var pressure = document.getElementById('pressure');
var wind = document.getElementById('wind');
var humid = document.getElementById('humid');
var msg = document.getElementById('msg');
var reset = document.getElementById('reset');

button.addEventListener('click', click)
    function click(e){
        e.preventDefault();

        fetch('https://api.openweathermap.org/data/2.5/weather?q='+inputValue.value+'&appid=351ddf928a6db536016c58d838da3ece')
        .then(res => res.json())
        .then(data => {
            console.log(inputValue.value);
            console.log(data);
            var countryV = data['sys']['country'];
            var cityV = data['name'];
            var tempV = Math.round(data['main']['temp'] - 273.15);
            var pressureV = data['main']['pressure'];
            var windV = data['wind']['speed'];
            var humidV = data['main']['humidity'];

            city.innerHTML = 'Current weather of ' + cityV + ' (' + countryV + ') ';
            temp.innerHTML = 'Average Temp: ' + tempV + '˚C';
            pressure.innerHTML = 'Current pressure: ' + pressureV + ' hPa';
            wind.innerHTML = 'Wind Speed: ' + windV + 'm/s';
            humid.innerHTML = 'Humidity: ' + humidV + '%';
        })
        .catch(err=>{
            msg.innerHTML = err;
            alert(err)
        });
    }
    reset.addEventListener('click', resetFunc)

    function resetFunc(){
        window.location.reload('weather1.html');
    }
