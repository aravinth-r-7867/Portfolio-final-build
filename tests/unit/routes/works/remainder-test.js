import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | works/remainder', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:works/remainder');
    assert.ok(route);
  });
});
