const EMAIL_QUERY = "email";
const ENVELOPE_QUERY = "envelopeId";

const addQuery = (queryParam, queryValue) => {
  var oldURL = window.location.href;
  if (history.pushState) {
    const newUrl = oldURL + `?${queryParam}=${queryValue}`;
    window.history.pushState({ path: newUrl }, "", newUrl);
  }
  return false;
};

const getQuery = (key) => {
  const urlParams = new URLSearchParams(window.location.search);
  if (urlParams.has(key)) {
    return urlParams.get(key);
  }
};

const generateIframeEl = (src) => {
  return `<iframe src="${src}" frameborder="0" id="docusignFrame"></iframe>`;
};

const showDocument = (docUrl) => {
  $("#loader").append(generateIframeEl(docUrl));
  $("#docusignFrame").on("load", function () {
    $("#loader .spinner").fadeOut();
  });
  $("body").css("overflow", "hidden");
};

const checkPopup = () => {
  if (getQuery(EMAIL_QUERY) && getQuery(ENVELOPE_QUERY)) {
    const docUrl = `https://whatmoneyapi.azurewebsites.net/api/Document/GetDocumentUrl/${getQuery(
      ENVELOPE_QUERY
    )}`;

    fetch(docUrl, {
      method: "GET",
      // Additional headers and/or credentials might be needed depending on your setup
    })
      .then((response) => {
        if (response.ok) return response.blob();
        throw new Error("Network response was not ok.");
      })
      .then((blob) => {
        // Create a new URL for the blob
        const documentUrl = window.URL.createObjectURL(blob);

        // Automatically download the file
        const downloadLink = document.createElement("a");
        downloadLink.href = documentUrl;
        downloadLink.setAttribute("download", Document.pdf); // Or dynamically set the filename

        $("#downloadDocument").attr("href", downloadLink);
        $("#printDocument").attr("href", downloadLink);
        $("#downloadDocument").removeClass("loading");
        $("#printDocument").removeClass("loading");
      })
      .catch((error) => console.error("Error fetching document:", error));

    $("#investorEmail").text(getQuery(EMAIL_QUERY));
    $("#thank-you-popup").modal({
      fadeDuration: 250,
      escapeClose: false,
      // clickClose: false,
    });
  }
};

checkPopup();

// $.ajax({
//   url: docUrl,
//   type: "GET",
//   success: (response) => {
//     console.log(response);
//   },
//   error: function (jqXHR, textStatus, errorThrown) {
//     console.error("Error:", errorThrown);
//   },
// });

// function printPdf() {
//   var pdfWindow = window.open(
//     "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf"
//   );
//   pdfWindow.onload = function () {
//     pdfWindow.print();
//   };
// }

// const urlParams = new URLSearchParams(window.location.search);
// if (urlParams.has("doc")) {
//   showDocument(urlParams.get("doc"));
// }
