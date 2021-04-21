var Calculator = {
	add(a,b) {
        	return ((a*1)+(b*1));
	},

	rest(a, b) {
        	return ((a*1)-(b*1));
	},
	badFunction(a,b) {
 	       return (a,(b-1));
	},
	divide(a,b) {
		if(b != 0) {
			return a/b;
		} else {
			return 0;
		}
	}
}
module.exports = Calculator;
