angular.
  module('phoneDetail').
  component('phoneDetail', {
    templateUrl: 'app/phone-detail/phone-detail.template.html',
    controller: ['$routeParams', 'Phone',
      function PhoneDetailController($routeParams, Phone) {
        var self = this;
        self.phone = Phone.get({phoneId: $routeParams.phoneId}, function(phone) {
        
        });

   
      }
    ]
  });