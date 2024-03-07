const addQuery = (queryParam, queryValue) => {
  var oldURL = window.location.href;
  if (history.pushState) {
    const newUrl = oldURL + `?${queryParam}=${queryValue}`;
    window.history.pushState({ path: newUrl }, "", newUrl);
  }
  return false;
};

const showDocument = (docUrl) => {
  $("#loader").addClass("show");
  $("#docusignFrame").attr("src", docUrl);
  $("body").css("overflow", "hidden");
};

// const urlParams = new URLSearchParams(window.location.search);
// if (urlParams.has("doc")) {
//   showDocument(urlParams.get("doc"));
// }
