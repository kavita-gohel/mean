module.exports = (length, breadth, callback) => { 
	if (length <= 0 || breadth <= 0) 
		setTimeout(() => callback(new Error( 
				"Dimmensions cannot be negative: length = "
				+ length + ", and breadth = "
				+ breadth), null), 2000); 
	else
		setTimeout(() => callback(null, { 
				Perimeter: () => (2*(length+breadth)), 
				Area:() => (length*breadth) }), 2000); 
} 
