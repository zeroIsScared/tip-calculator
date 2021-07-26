





const getServiceLevel =()=> {

  const serviceLevels = document.querySelectorAll('input[name="service"]');
  let checkedValue = '';
  for (const serviceLevel of serviceLevels) {
    if(serviceLevel.checked) {
        checkedValue = serviceLevel.value;
        break;
    }
  }
  return checkedValue;
}

const calculateTip =()=> {
    
    const billAmount = document.getElementById('bill').value;
    const service = getServiceLevel();
    const persons = document.getElementById('numPer').value;
    const tip = billAmount * service / persons;
    const showResult = document.querySelector('strong');
    showResult.innerHTML= tip;
  
}

const result = document.querySelector('input[name="button"]');
result.addEventListener("click", calculateTip);