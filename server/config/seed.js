/**
 * Populate DB with sample data on server start
 * to disable, edit config/environment/index.js, and set `seedDB: false`
 */

'use strict';
import Thing from '../api/thing/thing.model';
import User from '../api/user/user.model';
import Entry from '../api/entry/entry.model';
import Category from '../api/category/category.model';

Thing.find({}).removeAsync()
  .then(() => {
    Thing.create({
      name: 'Keep track of everything you spend',
      info: 'Is een meisje ' +
             'Mocha, JSHint, Node Inspector, Livereload, Protractor, Jade, ' +
             'Stylus, Sass, and Less.'
    }, {
      name: 'Overview of what you spend money on',
      info: 'Built with a powerful and fun stack: MongoDB, Express, ' +
             'AngularJS, and Node.'
    }, {
      name: 'Easy inline editing',
      info: 'Build system ignores `spec` files, allowing you to keep ' +
             'tests alongside code. Automatic injection of scripts and ' +
             'styles into your index.html'
    }, {
      name: 'Free up to 200 entries',
      info: 'Best practice client and server structures allow for more ' +
             'code reusability and maximum scalability'
    }, {
      name: 'Attractive pricing afterwards',
      info: 'Build process packs up your templates as a single JavaScript ' +
             'payload, minifies your scripts/css/images, and rewrites asset ' +
             'names for caching.'
    }, {
      name: 'Deployment Ready',
      info: 'Easily deploy your app to Heroku or Openshift with the heroku ' +
             'and openshift subgenerators'
    });
  });

User.find({}).removeAsync()
  .then(() => {
    User.createAsync({
      provider: 'local',
      name: 'Test User',
      email: 'test@example.com',
      password: 'test'
    }, {
      provider: 'local',
      role: 'admin',
      name: 'Admin',
      email: 'admin@example.com',
      password: 'admin'
    })
    .then(() => {
      console.log('finished populating users');
    });
  });

//sample Data entries added by Santi
Entry.find({}).removeAsync()
    .then(() => {
    Entry.createAsync(
    {date: new Date(),
    description: 'Drankjes met de meiden',
    category: 'Party',
    amount: 15,
    period: 'Monthly'},
    {date: new Date("2015-03-25"),
    description: 'Met de trein naar Grun',
    category: 'Travel',
    amount: 30,
    period: 'Monthly'},
    {date: new Date("2016-01-03"),
    description: 'Sushi Dushi',
    category: 'Food',
    amount: 49,
    period: 'Monthly'},
    {date: new Date("2016-02-03"),
    description: '2015',
    category: 'Food',
    amount: 3,
    period: 'Monthly'},
    {date: new Date("2016-02-017"),
    description: 'Albert Heijn',
    category: 'Food',
    amount: 120,
    period: 'Monthly'},
    {date: new Date("2016-01-22"),
    description: 'Bus',
    category: 'Travel',
    amount: 8,
    period: 'Monthly'})
    .then(() => {
    console.log('finished populating entries');
    });
});

//populate categories

Category.find({}).removeAsync()
    .then(() => {
    Category.createAsync({
        title: 'Party',
    },{
        title: 'Food',
    }, {
        title: 'Travel',
    })
    .then(() => {
    console.log('finished populating categories');
    });
});

