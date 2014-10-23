angular.module('borg.utils.services')
  .service('Redirect', function ($location) {
    var Redirect = {
      index: function (options) {
        Redirect.redirect('/', options);
      },

      login: function (options) {
        Redirect.redirect('/login', options);
      },

      redirect: function (path, options) {
        options = _.extend({ reload: false }, options);

        if (options.reload) {
          window.location = path;
        } else {
          $location.path(path);
        }
      }
    };

    return Redirect;
  });
