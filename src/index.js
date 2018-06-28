// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.

const randomNatural = require('random-natural');

const { NODE_ENV } = process.env;
const TEST = NODE_ENV === 'test';

// From https://github.com/styled-components/styled-components/blob/065001c725744629c7870240e4a955b924ef5337/src/utils/generateAlphabeticName.js
const chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
let i = 0;

const rndId = _code => {
  if (TEST && !_code) {
    _code = ++i;
  }

  const code = _code ? _code : randomNatural({ min: 1000000000 });
  const lastDigit = chars[code % chars.length];

  return code > chars.length
    ? `${rndId(Math.floor(code / chars.length))}${lastDigit}`
    : lastDigit;
};

module.exports = rndId;
