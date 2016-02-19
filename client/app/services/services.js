angular.module('hackoverflow.services', [])

.factory('Posts', function ($http) {

  function getPosts() {

    // db integration to replace test data
    return [
      {
        author: 'Spiney Norman',
        title: 'What is up with Angular and injection?',
        created: '5/2/15'
      },
      {
        author: 'Bobby Bobson',
        title: 'The pros and cons of two-way createdbinding in AngularJS and Angular2',
        created: '5/2/15'
      },
      {
        author: 'Mr. Fancy Pants',
        title: 'This, that, bind, call, apply, scope, closure. WTF?',
        created: '5/2/15'
      },
      {
        author: 'Gerry Geriatric',
        title: 'Codybot and the perils of community-assisted code manipulation',
        created: '5/2/15'
      },
      {
        author: 'Spiney Norman',
        title: 'My hovercraft is full of eels and that is why I used a Backbone collection',
        created: '5/2/15'
      },
      {
        author: 'Spiney Norman',
        title: 'What is up with Angular and injection?',
        created: '5/2/15'
      },
      {
        author: 'Bobby Bobson',
        title: 'The pros and cons of two-way createdbinding in AngularJS and Angular2',
        created: '5/2/15'
      },
      {
        author: 'Mr. Fancy Pants',
        title: 'This, that, bind, call, apply, scope, closure. WTF?',
        created: '5/2/15'
      },
      {
        author: 'Gerry Geriatric',
        title: 'Codybot and the perils of community-assisted code manipulation',
        created: '5/2/15'
      },
      {
        author: 'Spiney Norman',
        title: 'My hovercraft is full of eels and that is why I used a Backbone collection',
        created: '5/2/15'
      }      
    ];
  }

  return {
    getPosts: getPosts
  };
});