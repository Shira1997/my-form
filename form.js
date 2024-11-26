function displayErrorMessage(){
    const valid= isValid();
    if(!valid)
        {
        alert("חייב להכיל 2 תווים לפחות");
    }
}


function isValid(){
    const firstName= document.getElementById('firstName');
    const lastName= document.getElementById('lastName');
    const Mail= document.getElementById('mail');
    const genderMale = document.querySelector('input[name="gender"][value="male"]');
    const genderFemale = document.querySelector('input[name="gender"][value="female"]');


if(firstName.value.trim().length<2)
    {
    return false;
    }
    else if(lastName.value.trim().length<2)
        {
    return false;
        }
    else if(Mail.value.trim().length<2)
        {
    return false;
        }
    else if(!genderMale.checked &&!genderFemale.checked)
            {
    return false;
            }
return true;
}
