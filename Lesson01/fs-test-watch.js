

const fs = require("fs"),
      filename = process.argv[2],
      spawn = require("child_process").spawn;


fs.watch(filename, function() {
	console.log("File " + filename + " just changed!");
	let dir = spawn('cmd', [
		    		'/S',
				'/C',
				'dir',
				filename    
	]);
	dir.stdout.pipe(process.stdout);
});

console.log("Start watching file " + filename);
