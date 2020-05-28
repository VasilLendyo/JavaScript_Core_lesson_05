function makeBuffer() {

	var s = '';

	function buffer() {
		return s;
	}

	buffer.add = function(value) {
		s = s.concat(value + ' ');
	};

	buffer.print = function() {
		return s;
	}

	buffer.clear = function() {
		s = '';
	}

	return buffer;
}

var buffer = makeBuffer();

buffer.add('JavaScript');
buffer.add('to teach');
buffer.add('necessarily!');

console.log(buffer.print());

buffer.clear();
console.log(buffer.print());