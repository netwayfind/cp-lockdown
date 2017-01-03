function getJSON(path) {
  console.log(path);
  var req = new XMLHttpRequest();
  req.overrideMimeType("application/json");
  req.open("GET", path, false);
  req.send(null);
  return JSON.parse(req.responseText);
}

function getSection(path, name) {
  path = "ref/" + path
  console.log("  " + path);
  var req = new XMLHttpRequest();
  req.overrideMimeType("text/html");
  req.onload = function() {
    document.getElementById(name).innerHTML = req.responseText;
  };
  req.open("GET", path, false);
  req.send(null);
}

function load(path) {
  var config = getJSON(path);
  var toc = "";
  var content = "";
  var requestQueue = [];
  for (i = 0; i < config.length; i++) {
    var group = config[i];
    var groupName = group.group;
    console.log(groupName);
    toc += groupName;
    toc += "<ul>\n";
    content += "<hr><h1>";
    content += groupName;
    content += "</h1>\n<hr>\n";
    var sections = group.sections;
    for (j = 0; j < sections.length; j++) {
      var section = sections[j];
      var sectionName = section.section;
      console.log(" " + sectionName);
      toc += "<li><a href=\"#";
      toc += sectionName;
      toc += "\">";
      toc += sectionName;
      toc += "</a></li>\n";
      content += "<div id=\"";
      content += sectionName;
      content += "\">\n"
      content += "</div>\n<a href=\"#toc\">Table of Contents</a>\n<hr>\n";
      requestQueue.push([section.path, sectionName]);
    }
    toc += "</ul>\n";
  }
  document.getElementById("toc").innerHTML = toc;
  document.getElementById("content").innerHTML = content;

  // asynchronously retrive the section content
  console.log("async retrieval of sections");
  while (requestQueue.length > 0) {
    var request = requestQueue.shift();
    var sectionPath = request[0];
    var sectionName = request[1];
    getSection(sectionPath, sectionName);
  }
}
