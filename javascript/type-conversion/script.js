let val;

//Number to String
val = String(111);
val = String(8+4);

//Boolean to String
val = String(false);

//Date to String
val = String(new Date());

//Array tp String
val = String([1,2,3,4,5]);

//toString()
val = (5).toString();

//String to number
val = Number('1');
val = Number(true);
val = Number(false);
val = Number(null);
val = Number([1,2,3]);


console.log(val);
console.log(typeof val);
console.log(val.length); //12를 string으로 인식, length 2