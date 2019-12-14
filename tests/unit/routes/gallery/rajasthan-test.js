import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | gallery/rajasthan', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:gallery/rajasthan');
    assert.ok(route);
  });
});
