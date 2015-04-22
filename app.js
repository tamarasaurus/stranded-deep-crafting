console.log(items);

var drawItems = function(items) {
  var elements = "";
  _.each(items, function(item) {
    if (!item.materials || item.materials.length === 0) return;
    var string = "<li id=\"" + item.id + "\"><h2>" + item.name + "</h2>";

    if (item.materials) {
      string += "<strong>Materials</strong>";
      _.each(item.materials, function(material) {
        var mat = _.findWhere(items, {
          id: material.id
        });

        console.log(material)
          // If it contains materials
        if (!mat.materials || mat.materials.length === 0) {
          string += "<div class=\"material\">" + mat.name + " <small>&times;</small><span>" + material.amount + "</span></div>";
        } else {
          string += "<div class=\"material\">" + "<a href=\"#" + mat.id + "\">" + mat.name + "</a> <small>&times;</small><span>" + material.amount + "</span></div>";
        }

      });
    }

    if (item.notes) {
      string += "<strong>Notes</strong>";

      _.each(item.notes, function(note) {
        string += "<div class=\"note\">" + note + "</div>";
      });

    }

    string += "</li>";
    elements += string;
  });

  return elements;
};


var drawLinks = function() {
  var links = "";
  _.each(items, function(item) {
    if (!item.materials || item.materials.length === 0) return;
    links += "<li><a href=\"#" + item.id + "\">" + item.name + "</a></li>";
  });
  return links;
};

$(document).ready(function() {
  var template = drawItems(items);
  $(".materials").append(template);
  var links = drawLinks(items);
  $(".links").append(links);
  $(document).foundation();
});