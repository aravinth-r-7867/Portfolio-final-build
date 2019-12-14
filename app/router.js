import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('about');
  this.route('works', function() {
    this.route('remainder');
  });
  this.route('gallery', function() {
    this.route('marina');
    this.route('kerala');
    this.route('south-india');
    this.route('manali');
    this.route('rajasthan');
  });
});

export default Router;
