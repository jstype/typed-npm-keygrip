/// <reference path="../out/index.d.ts" />

import test = require('blue-tape');

import Keygrip = require('keygrip');

test('should sign a string', (t) => {
    t.plan(1);
    let keys = new Keygrip(['123']);
    let hash = keys.sign('asdf');
    t.true(/^[\w_-]{27}$/.test(hash));
});