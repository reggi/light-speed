import assert from 'assert'
import lightspeed from '../src/index'

/* global describe, it */

describe('lightspeed', () => {
  it('should provide lightspeed', () => {
    assert.equal(lightspeed, 299792458)
  })
})
