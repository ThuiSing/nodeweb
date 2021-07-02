const submitbtn = document.getElementById("submitbtn");
const Cityvalue = document.getElementById("CityName");
const city_error = document.getElementById("city_error");

const CiName = document.getElementById("CiName");
const temp = document.getElementById("temp");
const temp_status = document.getElementById("temp_status");


const dataHide = document.querySelector(".middle_layer");

const getInfo = async (evnt) => {
  evnt.preventDefault();
  let cityname = Cityvalue.value;

  if (cityname === "") {
    city_error.innerHTML = "Enter a City Name";
    dataHide.classList.add('data_hide');
  } else {
    try {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityname}&units=metric&appid=be658161734d631e955fd234e2111a6a`;
      const res = await fetch(url);
      const jsonData = await res.json();
      const data = [jsonData];

      CiName.innerHTML = `${data[0].name} , ${data[0].sys.country}`;

      const Weather = data[0].weather[0].main;
      temp.innerHTML = `${data[0].main.temp}<sup>o</sup>C ${Weather}`;

      if (Weather === "Sunny") {
        temp_status.innerHTML = "<i class='fas fa-sun' ></i>";
      } else if (Weather === "Rain") {
        temp_status.innerHTML =
          "<i class='fas fa-cloud-rain' style='color : #2590c2'></i>";
      } else if (Weather === "Clouds") {
        temp_status.innerHTML =
          "<i class='fas fa-cloud' style='color : blue'></i>";
      } else {
        temp_status.innerHTML = "<i class='fab fa-sun'></i>";
      }

      dataHide.classList.remove('data_hide');
    } catch (error) {
      console.log(error);
    }
  }
};

submitbtn.addEventListener("click", getInfo);
