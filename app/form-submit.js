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
      address: {
        required: true,
        minlength: 2,
      },
      passportnumber: {
        required: true,
        minlength: 2,
      },
      email: {
        required: true,
        email: true,
      },
    },
    submitHandler: (form) => {
      const submitButton = $(form).find("button");
      submitButton.prop("disabled", true);

      const formData = {};
      $(form)
        .find("input")
        .each(function () {
          formData[$(this).attr("name")] = $(this).val();
        });

      console.log(formData);
      // const url = "https://whatmoneyapi.azurewebsites.net/user";

      // $.ajax({
      //   url: url,
      //   type: "POST",
      //   contentType: "application/json",
      //   data: JSON.stringify(formData),
      //   success: () => {
      //     $("#submit-form").prop("disabled", false);
      //     $(form).trigger("reset");
      //   },
      //   error: function (jqXHR, textStatus, errorThrown) {
      //     console.error("Error:", errorThrown);
      //   },
      // });
    },
  });
});
