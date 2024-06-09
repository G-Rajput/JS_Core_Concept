let name = {
  firstName: "Govind",
  lastName: "Rajput",
};

let printName = function (hometown, state, country) {
  console.log(
    this.firstName +
      " " +
      this.lastName +
      "," +
      hometown +
      "," +
      state +
      "," +
      country
  );
};

let printMyName = printName.bind(name, "Kanpur Dehat", "Uttar Pradesh");
printMyName("India");

Function.prototype.mybind = function (...args) {
  let obj = this;
  params = args.slice(1);
  return function (...args2) {
    obj.apply(args[0], [...params, ...args2]);
  };
};

let printMyName2 = printName.mybind(name, "Kanpur Dehat", "Uttar Pradesh");
printMyName2("India");
