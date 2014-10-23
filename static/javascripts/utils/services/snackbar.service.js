angular.module('borg.utils.services')
  .service('Snackbar', function () {
    var Snackbar = {
      show: function (content, options) {
        options = _.extend({ timeout: 3000 }, options);
        options.content = content;

        $.snackbar(options);
      }
    };

    return Snackbar;
  });
