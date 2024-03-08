$(() => {
  $("#invest-form").validate({
    errorClass: "error-message",
    rules: {
      firstname: {
        required: true,
        minlength: 2,
      },
      lastname: {
        required: true,
        minlength: 2,
      },
      fathersname: {
        required: true,
        minlength: 2,
      },
      address: {
        required: true,
        minlength: 2,
      },
      passportNumber: {
        required: true,
        minlength: 2,
      },
      email: {
        required: true,
        email: true,
      },
      language: {
        required: true,
      },
    },
    submitHandler: (form, event) => {
      event.preventDefault();
      const submitButton = $(form).find('button[type="submit"]');
      submitButton.prop("disabled", true);

      const formData = {};
      $(form)
        .find("input")
        .each(function () {
          if ($(this).attr("name")) {
            formData[$(this).attr("name")] = $(this).val();
          }
        });

      const generateName = (formData) => {
        return `${formData.lastname} ${formData.firstname}${
          formData.fathersname ? " " + formData.fathersname : ""
        }`;
      };

      const requestBody = {
        ...formData,
        loanValue: +$("#inputWrapperSecond input").val(),
        returnUrl: `${window.location.href}`,
        name: generateName(formData),
      };

      delete requestBody.firstname;
      delete requestBody.lastname;
      delete requestBody.fathersname;

      const url = "https://whatmoneyapi.azurewebsites.net/api/Document";

      $.ajax({
        url: url,
        type: "POST",
        contentType: "application/json",
        data: JSON.stringify(requestBody),
        success: (response) => {
          submitButton.prop("disabled", false);
          $(form).trigger("reset");
          showDocument(response.url);
          // addQuery("doc", response.url);

          // window.open(`${window.location.href}?doc=${response.url}`, "_blank");
        },
        error: function (jqXHR, textStatus, errorThrown) {
          console.error("Error:", errorThrown);
        },
      });
    },
  });
});
