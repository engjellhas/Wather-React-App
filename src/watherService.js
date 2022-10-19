const API_KEY = '74f3687107999ff4b0cf0d66850d8479'

const makeIconUrl =(iconId) => `https://openweathermap.org/img/wn/${iconId}@2x.png`

const getFormattedWatherData = async(city, units='metric')=> {
    const URL=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=${units}`;

    const data =await fetch(URL)
    .then((res) => res.json())
    .then((data) => data);

    const {
        weather,
        main: {temp, feels_like, temp_min, temp_max, pressure,
        humidity },
        wind: {speed},    
        sys: {country},
        name,
    }= data;

    const {description, icon}= weather[0];

    return {
        description, 
        iconUrl:makeIconUrl(icon) ,
        temp, feels_like, temp_min, temp_max, pressure,
        humidity,speed, country, name,
    };
};

export {getFormattedWatherData};


