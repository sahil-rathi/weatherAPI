let weather = {
    apiKey: "18d1c7c2679b9732ebcd2cf431b662cf",
    fetchWeather: function (city) {
        fetch(
            "https://api.openweathermap.org/data/2.5/weather?q="
            + city
            + "&units=metric&appid="
            + this.apiKey
        )
            .then((response) => {
                if(!response.ok){
                    alert("No weather found,try again!");
                    throw console.error("No weather found.");
                }
                return response.json();
            })
            .then((data) => this.displayWeather(data));     
    },
    displayWeather: function (data) {
        const {name}= data;
        const {temp,humidity}= data.main;
        const {icon,description}= data.weather[0];
        const {speed}= data.wind;
        let str=description;
        const arr=str.split(" "); 
        var obj=document.querySelector(".defaulttext");
        obj.remove();
        document.querySelector(".city").innerText = "Weather in "+name;
        document.querySelector(".temp").innerText = temp+"°C";
        document.querySelector(".icon").src = "https://openweathermap.org/img/wn/" + icon + ".png";
        document.querySelector(".description").innerText = description;
        document.querySelector(".humidity").innerText = "Humidity : "+humidity+"%";
        document.querySelector(".windSpeed").innerText = "Wind Speed : "+speed+" km/h";
        document.body.style.backgroundImage = "url('https://source.unsplash.com/1600x900/?" + name + ")";
        document.querySelector(".cardimg").src = "https://source.unsplash.com/1600x900/?" + arr[0]+","+arr[1];
    },
    searchcity: function(){
        this.fetchWeather(document.querySelector(".searchbox").value);
    }
    };
    document.querySelector(".searchbtn").addEventListener("click",(e)=> {
        e.preventDefault();
        weather.searchcity();
    });
