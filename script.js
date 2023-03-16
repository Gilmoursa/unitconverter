function convertWeight() {
    const weight = document.getElementById("weight").value;
    const from = document.getElementById("from").value;
    const to = document.getElementById("to").value;
  
    let result;
  
    if (from === "kg" && to === "lbs") {
      result = weight * 2.20462;
    } else if (from === "kg" && to === "oz") {
      result = weight * 35.274;
    } else if (from === "lbs" && to === "kg") {
      result = weight / 2.20462;
    } else if (from === "lbs" && to === "oz") {
      result = weight * 16;
    } else if (from === "oz" && to === "kg") {
      result = weight / 35.274;
    } else if (from === "oz" && to === "lbs") {
      result = weight / 16;
    } else {
      result = weight;
    }
  
    document.getElementById("result").value = result.toFixed(2);
  }
  