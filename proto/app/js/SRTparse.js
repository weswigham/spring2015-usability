// SRTparse, script to turn SRT files into JSON

module.exports = function(SRTstring) {
    var srtSplit = ("\n"+SRTstring).split(/\n[\d]+\n/);
    srtSplit.shift();
    subtitleObject = {};
    srtSplit.forEach( function(block) {
      var lines = block.split("\n");
    	var startTime = lines[0].split("-->")[0];
      var endTime = lines[0].split("-->")[1];
      var text = lines.slice(1).filter(function(line) {
          return (line != "");
      });
      subtitleObject[startTime] = {
        start: startTime,
        end: endTime,
        text: text
      };
    });
    return subtitleObject;
};
