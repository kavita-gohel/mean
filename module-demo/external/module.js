var rect = require('./rectangle'); 
module.exports.Rect = function Rect(l, b) { 
	rect(l, b, (err, rectangle) => { 
		if (err) 
			console.log("There is an ERROR!!: ", err.message); 
		else { 
			console.log("Area of rectangle with dimensions length = "
				+ l + " and breadth = " + b + " : " + rectangle.Area()); 
			
			console.log("Perimeter of the rectangle with dimensions length = "
				+ l + " and breadth = " + b + " : " + rectangle.Perimeter()); 
		} 
	
	}); 
}; 
