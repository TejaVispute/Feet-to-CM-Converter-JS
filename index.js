let getval = () => {
    // To access input values from input section
    let access = document.querySelector('#inputaccess').value;

    if (access <=0) {
        alert("Please Enter Value > 0 !");//if value is  less than 0 this alert will be shown
    }

    else if(access >=1){
       document.querySelector('.answer').innerHTML =  " CM:- "+access * 30.48;//formula to convert feet  to centemetres
    }

    else if(access>"a" || access<"z" && access>"A" || access<"Z")  {
        alert("Alphabets are not allowd enter only numbers!!");
    }//if input values are alphabetes show this error


}
