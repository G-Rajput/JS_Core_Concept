let user1 = {
  firstName: "Govind",
  lastName: "Rajput",
  // This function allows borrowing
  printName: function () {
    console.log(this.firstName + " " + this.lastName);
  },
};

user1.printName();

let user2 = {
  firstName: "Vimal",
  lastName: "Soni",
};

// function borrowing
user1.printName.call(user2);

let printNameOuter = function (hometown, state) {
  console.log(
    this.firstName + " " + this.lastName + " from " + hometown + " , " + state
  );
};

printNameOuter.call(user1, "Ashok Nagar", "Delhi from call");
printNameOuter.call(user2, "Kanpur", "Uttar Pradesh from call");

// Apply method
printNameOuter.apply(user2, ["Kanpur", "Uttar Pradesh from apply"]);

// bind method

let printMyName = printNameOuter.bind(user1, "Ashok Nagar", "Delhi from bind");
console.log(printMyName);
printMyName();
