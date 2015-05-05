// SRTparse, script to turn SRT files into JSON

module.exports = function(SRTstring) {
    var srtSplit = ("\n"+SRTstring).split(/\n[\d]{1,2}[^:\d]/);
    srtSplit = srtSplit.filter(function(line) {
      return (line != "");
    });
    subtitleObject = {};
    srtSplit.forEach( function(block) {
      var lines = block.split("\n").filter(function(line){
        return (line!="")
      });
      var startTime = lines[0].split("-->")[0].split(",")[0];
      var endTime = lines[0].split("-->")[1].split(",")[0];
      var text = lines.slice(1).filter(function(line) {
          return (line != "");
      });
      subtitleObject[startTime.trim()] = {
        text: text
      };
      subtitleObject[endTime.trim()] = {
        text: ["", ""]
      };
    });
    return subtitleObject;
};
