import assert from 'node:assert/strict';
import test from 'node:test';
import { buildMailtoUrl, buildWhatsAppUrl } from '../connect-links.mjs';

test('buildWhatsAppUrl trims and URL-encodes message', () => {
  assert.equal(
    buildWhatsAppUrl('  Hello & welcome!  '),
    'https://wa.me/918847624755?text=Hello%20%26%20welcome!'
  );
});

test('buildWhatsAppUrl rejects blank messages', () => {
  assert.throws(() => buildWhatsAppUrl('  \n '), { message: 'Message is required.' });
});

test('buildMailtoUrl encodes subject and multiline body', () => {
  assert.equal(
    buildMailtoUrl(' Quick question & thanks ', 'Line 1\nLine 2 & <3 '),
    'mailto:gneeraj32595@gmail.com?subject=Quick%20question%20%26%20thanks&body=Line%201%0ALine%202%20%26%20%3C3'
  );
});

test('buildMailtoUrl omits blank subject and rejects blank body', () => {
  assert.equal(
    buildMailtoUrl('  ', ' Hello '),
    'mailto:gneeraj32595@gmail.com?body=Hello'
  );
  assert.throws(() => buildMailtoUrl('Question', '  '), { message: 'Message is required.' });
});
