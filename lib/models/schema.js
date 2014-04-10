'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;
    
/**
 * Tense Schema
 */
var TenseSchema = new Schema({
  name: String,
  irregular: Boolean,
  yo: String,
  tu: String,
  el: String,
  nosotros: String,
  vosotros: String,
  ustedes: String
});

mongoose.model('Tense', TenseSchema);


/**
 * Verb Schema
 */
var VerbSchema = new Schema({
  verb: String,
  meaning: String,
  tenses: [TenseSchema]
});

mongoose.model('Verb', VerbSchema);