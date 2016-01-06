'use strict';

class NavbarController {
  //start-non-standard
  menu = [
    {
    'title': 'Home',
    'state': 'main'
    },
    {'title': 'Add',
    'state': 'add',
    'submenu': [{'title': 'Add entry',
                'state': 'addEntry'},
                {'title': 'Add category',
                  'state': 'addCategory'}]
    },
    {'title': 'Entries',
    'state': 'entries'
    },
    {'title': 'Dashboard',
      state: 'dash'
    }
  ];

  isCollapsed = false;
  //end-non-standard

  constructor(Auth) {
    this.isLoggedIn = Auth.isLoggedIn;
    this.isAdmin = Auth.isAdmin;
    this.getCurrentUser = Auth.getCurrentUser;
  }
}

angular.module('hhbApp')
  .controller('NavbarController', NavbarController);
