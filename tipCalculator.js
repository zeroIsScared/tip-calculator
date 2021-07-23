/*  Create a project that will allow you to calculate the Tip for the waitress in a restaurant.
You should include a HTML file, a CSS file and a JS file.

Your project should allow the end user to enter:
- The total bill amount (textbox)
- The Service level: Outstanding-30%, Good-20%, OKish-15%, Bad - 10%, Never coming back - 0% (radio buttons)
- The number of persons that are splitting the bill (dropdown with values from 1 to 10)

Your project should have a button Calculate that will return the Tip value for each person based on next calculation:
(TotalBillAmount * ServiceLevel)/NumberOfPersons */




const calculateTip = () =>{
    let form = document.getElementById('form');
    let billAmount = form.elements['bill'].value;
    let numberOfPersons = form.elements["persons"].value;
    let service = document.getElementById('servLevel');
    let serviceValue = service.value; 
    let tip = 0;
    let printTip = document.getElementById('tip');
    
    tip = billAmount * serviceValue / numberOfPersons;

    printTip.innerText = tip;
    console.log(billAmount);
    };

let tipCalculated = document.getElementById("calculate");


tipCalculated.addEventListener("click", calculateTip);




