function bk(){
  
  const success = function (position){
  const latitude = "Latitude: "+ position.coords.latitude+"&#176;";
  const longitude = "Longitude: "+ position.coords.longitude+"&#176;";
  const altitude = "Altitude: "+ position.coords.altitude+"&#176;";
  document.getElementById('lat').innerHTML= latitude;
  document.getElementById('al').innerHTML= altitude;
  document.getElementById('lon').innerHTML= longitude;
}
const error = function (position){
  console.error("sorry! your browser does not support it!");
  alert("sorry! your browser does not support it!");
} 


navigator.geolocation.getCurrentPosition(success, error);


function change(){
  
  var time = new Date();
  var sec = time.getSeconds();
  var random = Math.random();
  var result = (Math.floor((random*10)) * sec);
  if(result > 360){
    result = 122;
  }
  else if(result == 0){
    result = Math.floor(random*100);
  }
  document.getElementById("cmps").innerHTML=result+"&#176;";
}
setInterval(change, 1000);

change();


document.getElementById("cmps").style.animationName="animate";



}
if(navigator.userAgent.toLocaleLowerCase().includes("android")){
  
  console.log("android");
}else{
  document.querySelector("body").style.display="none";
  alert("This web application is specially designed for Android & iphone. so! it can't be ran here browse it in android. Thank you!");
  console.error("This web application is specially designed for Android & iphone. so! it can't be ran here browse it in android. Thank you!");
}
function sk(){
  
  alert("There's no third party api is involved. Don't worry about it. We are aware of your privacy...Thank you");
  
  
}



