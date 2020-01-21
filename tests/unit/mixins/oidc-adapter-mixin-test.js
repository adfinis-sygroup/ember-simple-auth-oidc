import EmberObject from "@ember/object";
import OidcAdapterMixinMixin from "ember-simple-auth-oidc/mixins/oidc-adapter-mixin";
import { module, test } from "qunit";

module("Unit | Mixin | oidc-adapter-mixin", function() {
  // Replace this with your real tests.
  test("it works", function(assert) {
    const OidcAdapterMixinObject = EmberObject.extend(OidcAdapterMixinMixin);
    const subject = OidcAdapterMixinObject.create();
    assert.ok(subject);
  });
});
