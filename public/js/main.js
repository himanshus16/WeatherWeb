
const cityName=document.getElementById("cityname");
const submitBtn=document.getElementById("submitBtn");

const citydisplay=document.getElementById("cityName");

const tempVal=document.getElementById('tempVal');
const tempStatus=document.getElementById("tempStatus");

const dataHide=document.querySelector(".middleLayer");


const getInfo=async (e)=>{
    e.preventDefault();
    let cityVal=cityName.value
    if(cityVal===""){
        citydisplay.innerText= "please write city name to search";
        dataHide.classList.add('dataHide');
    }
    else{
        try{
            let url= `https://api.openweathermap.org/data/2.5/weather?q=${cityVal}&appid=bd349882e3bb8939eae25e7a9a242873`;
            const res= await fetch(url);
            const data=await res.json();
            const arrData=[data];

            citydisplay.innerText=`${arrData[0].name}, ${arrData[0].sys.country}`;
            let tempC= [(arrData[0].main.temp-32)*5]/9;
            tempVal.innerText = Math.floor(tempC);
            let tempMood= arrData[0].weather[0].main;

            if(tempMood=="Clear"){
                tempStatus.innerHTML = "<i class='fas fa-sun' style='color:#eccc68'></i>"
            }
            else if(tempMood=="Clouds"){
                tempStatus.innerHTML = "<i class='fas fa-clouds' style='color:#f1f2f6'></i>"
            }
            if(tempMood=="Rain"){
                tempStatus.innerHTML = "<i class='fas fa-rain' style='color:#a4b0be'></i>"
            }
            else{
                tempStatus.innerHTML = "<i class='fas fa-cloud' style='color:#f1f2f6'></i>"
            }
            dataHide.classList.remove('dataHide');
        }
        catch{
            citydisplay.innerText= "please enter correct city name";
            dataHide.classList.add('dataHide');
        }

    }
}

submitBtn.addEventListener('click', getInfo);

