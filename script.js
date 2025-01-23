let age = Number(prompt("enter your age"));
let filmTipe = prompt("Enter movie type (regular or 3D):");
let time = prompt("Enter time of day (matinee or evening):");
let price = 5;
if (age <= 10 && age >= 0) {
  if (filmTipe === "regular") {
    if (time === "matinee") {
      price = 5;
    }
    if (time === "evening") {
      price = price + 5;
    }
  } else if (filmTipe === "3D") {
    if (time === "matinee") {
      price = price + 5;
    }
    if (time === "evening") {
      price = price + 10;
    }
  }
  alert(price);
}

// it was for children
else if (age >= 65) {
  price = 10;
  if (filmTipe === "regular") {
    if (time === "matinee") {
      price = 10;
    }
    if (time === "evening") {
      price = price + 5;
    }
  } else if (filmTipe === "3D") {
    if (time === "matinee") {
      price = price + 5;
    } else if (time === "evening") {
      price = price + 10;
    }
  }
  alert(price);
} else {
  price = 15;
  if (filmTipe === "regular") {
    if (time === "matinee") {
      price = 10;
    }
    if (time === "evening") {
      price = price + 5;
    }
  } else if (filmTipe === "3D") {
    if (time === "matinee") {
      price = price + 5;
    } else if (time === "evening") {
      price = price + 10;
    }
  }
  alert(price);
}