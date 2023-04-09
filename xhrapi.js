var XMLHttpRequest = require('xhr2');

var xhr=new XMLHttpRequest();



var xhr=new XMLHttpRequest();


xhr.open("GET","https://restcountries.com/v3.1/name/india");

xhr.onload=function(){
    if(xhr.status===200){
        const country=JSON.parse(xhr.responseText);
       
        country.forEach(countryDetails=>{
            console.log(`Country: ${countryDetails.name.common} 
            Capital: ${countryDetails.capital}
            Region: ${countryDetails.region}
           
            Population: ${countryDetails.population}
            Flag : ${countryDetails.flag}
            Flag URL: ${countryDetails.flags.png}`);

            // countryDetails.Languages.forEach(function(language) {
            //     console.log(language);
            // })
            const lang = countryDetails.languages;
            // console.log(lang);
            console.log("languages:");
            for (let [key, value] of Object.entries(lang)) {
                console.log(value);
            }
            
        })

  

    }else{
        console.error('Error: ', xhr.status);
    }
}

//Open a method 
xhr.send();
