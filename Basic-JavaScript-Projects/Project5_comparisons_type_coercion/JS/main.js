//  write string
document.writeln(typeof "bob");

// coercion to string - display "5.0"
let guessType = 5;
document.writeln("<br>" + guessType + ".0");

// division by zero - NaN
document.writeln("<br>" + (0 / 0) );

// test if value is a number
document.writeln("<br>" + isNaN("hello"));
document.writeln("<br>" + isNaN(5));

// +/- infinity
document.writeln("<br>" + 2E310);
document.writeln("<br>" + -2E310);

// boolean operators
document.writeln("<br>" + (5 > 3)); // true
document.writeln("<br>" + ((5 > 3) && (1 > 2))); // false

// output to console
console.log('Foo!'); 

// output false to console
console.log('false'); // Haha, just kidding!
console.log("a" > "b");

// comparison with ==
document.writeln("<br>" + (5 == 3));
document.writeln("<br>" + (5 == 5));

// comparison with ===
document.writeln("<br>" + ("foo" === "foo"));
document.writeln("<br>" + ("bob" === 82));
document.writeln("<br>" + ("82" === 82));
document.writeln("<br>" + (99 === 82));

// boolean comparisons
document.writeln("<br>" + ((1 === 1) && (2 === 2)));
document.writeln("<br>" + ((1 === 2) && (2 === 2)));
document.writeln("<br>" + ((1 === 1) || (2 === 2)));
document.writeln("<br>" + ((1 === 2) || (3 === 2)));
document.writeln("<br>" + (!(1 === 2)));
document.writeln("<br>" + (!(1 === 1)));


