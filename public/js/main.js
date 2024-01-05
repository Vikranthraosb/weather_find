const cityname =document.querySelector("#cityname");
const subbtn= document.querySelector("#submitbtn");
const city_name =document.querySelector("#city_name");


 const getinfo = async (event)=>{
    let cityval=cityname.Value;

    alert("hmm");

    event.prevetDefault();
if(cityval == ""){
    city_name.innerHTML = "Please Enter Name of city";
}

else{
  try{
    let url = `api.openweathermap.org/data/2.5/weather?q=pune&appid=d5359962e6c01ae89915cd260d92c425`;
    const response = await fetch(url)
    
  }  
  catch{
    city_name.innerHTML = `Please Enter Name of city`

  }
}
}
subbtn.addEventListener("click",getinfo);
