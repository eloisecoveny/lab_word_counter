const assert = require('assert');
const WordCounter = require('../WordCounter.js');

describe('WordCounter', function () {

  let word_counter;

  it('should count the number of words', function(){
    const actual = WordCounter.wordCount("This is a test string");
    assert.strictEqual(actual, 5);
  })

});
