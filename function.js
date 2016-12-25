function getJSON(path) {
  console.log(path);
  var req = new XMLHttpRequest();
  req.overrideMimeType("application/json");
  req.open("GET", path, false);
  req.send(null);
  return JSON.parse(req.responseText);
}

function getSection(path) {
  path = "ref/" + path
  console.log("  " + path);
  var req = new XMLHttpRequest();
  req.overrideMimeType("text/html");
  req.open("GET", path, false);
  req.send(null);
  return req.responseText;
}

function load(path) {
  var config = getJSON(path);
  var toc = "";
  var content = "";
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
      content += getSection(section.path);
      content += "\n<a href=\"#toc\">Table of Contents</a>\n";
      content += "</div>\n<hr>\n";
    }
    toc += "</ul>\n";
  }
  document.getElementById("toc").innerHTML = toc;
  document.getElementById("content").innerHTML = content;
}
