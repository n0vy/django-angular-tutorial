angular.module('borg.utils.services')
  .service('Snackbar', function () {
    var Snackbar = {
      error: function (content, options) {
        Snackbar.snackbar('Error: ' + content, options);
      },

      show: function (content, options) {
        Snackbar.snackbar(content, options);
      },

      snackbar: function (content, options) {
        options = _.extend({ timeout: 3000 }, options);
        options.content = content;

        $.snackbar(options);
      }
    };

    return Snackbar;
  });
