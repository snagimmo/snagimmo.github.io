var lunrIndex, $results, pagesIndex;

function initLunr() {
  $.getJSON("/index.json").done(function(index) {
    pagesIndex = index;
    lunrIndex = lunr(function() {
      var lunrConfig = this;
      lunrConfig.use(lunr.multiLanguage('en', 'jp'));
      lunrConfig.ref("href");
      lunrConfig.field("title", { boost: 10 });
      lunrConfig.field("contents");
      pagesIndex.forEach(function(page) {
        lunrConfig.add(page);
      });
    });
  })
  .fail(function(jqxhr, textStatus, error) {
    var err = textStatus + ", " + error;
    console.error("Error getting Hugo index flie:", err);
  });
}

function search(){
  $results = $("#results");
  $results.empty();
  var query = document.getElementById('search-query').value;
  if (query.length < 2) {
    return;
  }
  renderResults(results(query));
}

function results(query) {
  return lunrIndex.search(`*${query}*`).map(function(result) {
    return pagesIndex.filter(function(page) {
      return page.href === result.ref;
    })[0];
  });
}

function renderResults(results) {
  if (!results.length) {
    $results.append('<p>No matches found</p>');
    return;
  }

  results.forEach(function(result) {
    var $result = $("<li>");
    $result.append($("<a>", {
      href: result.href,
      text: result.title
    }));
    if (result.contents.length <= 100) {
      $result.append($("<p>", {
        text: result.contents
      }));
    } else {
      $result.append($("<p>", {
        text: result.contents.slice(0, 100) + " ..."
      }));
    }
    $results.append($result);
  });
}

initLunr();

