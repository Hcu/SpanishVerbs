'use strict';

var mongoose = require('mongoose'),
  Verb = mongoose.model('Verb'),
  Tense = mongoose.model('Tense');

 
//Clear old things, then add things in
Verb.find({}).remove(function() {
  Verb.create({verb:'hablar', meaning: 'to speak', tenses: [{
                  name: 'Present',
                  yo: 'hablo',
                  tu: 'hablas',
                  el: 'habla',
                  nosotros: 'hablamos',
                  vosotros: 'hablaís',
                  ustedes: 'hablan'
                }, {
                  name: 'Preterite',
                  yo: 'hablé',
                  tu: 'hablaste',
                  el: 'habló',
                  nosotros: 'hablamos',
                  vosotros: 'hablasteis',
                  ustedes: 'hablaron'
                }]},
                
                {verb:'poner', meaning: 'to put', tenses: [{
                  name: 'Futuro',
                  irregular: true,
                  yo: 'pondré',
                  tu: 'pondrás',
                  el: 'pondrá',
                  nosotros: 'pondremos',
                  vosotros: 'pondréis',
                  ustedes: 'pondrán'
                }, {
                  name: 'Preterite',
                  irregular: true,
                  yo: 'puse',
                  tu: 'pusiste',
                  el: 'puso',
                  nosotros: 'pusimos',
                  vosotros: 'pusisteis',
                  ustedes: 'pusieron'
                }
                
                ]},
                
                {verb:'venir', meaning: 'to come', tenses: [{
                  name: 'Futuro',
                  irregular: true,
                  yo: 'vendré',
                  tu: 'vendrás',
                  el: 'vendrá',
                  nosotros: 'vendremos',
                  vosotros: 'vendréis',
                  ustedes: 'vendrán'
                }, {
                  name: 'Preterite',
                  irregular: true,
                  yo: 'vine',
                  tu: 'viniste',
                  el: 'vino',
                  nosotros: 'vinimos',
                  vosotros: 'vinisteis',
                  ustedes: 'vinieron'
                }]},
                
                
                {verb:'salir', meaning: 'to leave,go out', tenses: [{
                  name: 'Futuro',
                  irregular: true,
                  yo: 'saldré',
                  tu: 'saldrás',
                  el: 'saldrá',
                  nosotros: 'saldremos',
                  vosotros: 'saldréis',
                  ustedes: 'saldrán'
                }]},
                
                {verb:'poder', meaning: 'to be able, to can', tenses: [{
                  name: 'Futuro',
                  irregular: true,
                  yo: 'podré',
                  tu: 'podrás',
                  el: 'podrá',
                  nosotros: 'podremos',
                  vosotros: 'podréis',
                  ustedes: 'podrán'
                }, {
                  name: 'Preterite',
                  irregular: true,
                  yo: 'pude',
                  tu: 'pudiste',
                  el: 'pudo',
                  nosotros: 'pudimos',
                  vosotros: 'pudisteis',
                  ustedes: 'pudieron'
                }]},
                
                {verb:'querer', meaning: 'to want', tenses: [{
                  name: 'Futuro',
                  irregular: true,
                  yo: 'querré',
                  tu: 'querrás',
                  el: 'querrá',
                  nosotros: 'querremos',
                  vosotros: 'querréis',
                  ustedes: 'querrán'
                }, {
                  name: 'Preterite',
                  irregular: true,
                  yo: 'quise',
                  tu: 'quisiste',
                  el: 'quiso',
                  nosotros: 'quisimos',
                  vosotros: 'quisisteis',
                  ustedes: 'quisieron'
                }]},
                
                {verb:'tener', meaning: 'to have', tenses: [{
                  name: 'Futuro',
                  irregular: true,
                  yo: 'tendré',
                  tu: 'tendrás',
                  el: 'tendrá',
                  nosotros: 'tendremos',
                  vosotros: 'tendréis',
                  ustedes: 'tendrán'
                }, {
                  name: 'Preterite',
                  irregular: true,
                  yo: 'tuve',
                  tu: 'tuviste',
                  el: 'tuvo',
                  nosotros: 'tuvimos',
                  vosotros: 'tuvisteis',
                  ustedes: 'tuvieron'
                }]},
                
                {verb:'valer', meaning: 'to value', tenses: [{
                  name: 'Futuro',
                  irregular: true,
                  yo: 'valdré',
                  tu: 'valdrás',
                  el: 'valdrá',
                  nosotros: 'valdremos',
                  vosotros: 'valréis',
                  ustedes: 'valdrán'
                }]},
                
                {verb:'hacer', meaning: 'to make, to do', tenses: [{
                  name: 'Futuro',
                  irregular: true,
                  yo: 'haré',
                  tu: 'harás',
                  el: 'hará',
                  nosotros: 'haremos',
                  vosotros: 'haréis',
                  ustedes: 'harán'
                }, {
                  name: 'Preterite',
                  irregular: true,
                  yo: 'hice',
                  tu: 'hiciste',
                  el: 'hizo',
                  nosotros: 'hicimos',
                  vosotros: 'hicisteis',
                  ustedes: 'hicieron'
                }]},
                
                
                {verb:'decir', meaning: 'to say, to tell', tenses: [{
                  name: 'Futuro',
                  irregular: true,
                  yo: 'diré',
                  tu: 'dirás',
                  el: 'dirá',
                  nosotros: 'diremos',
                  vosotros: 'diréis',
                  ustedes: 'dirán'
                }]},
                
                {verb:'comenzar', meaning: 'to start', tenses: [{
                  name: 'Preterite',
                  irregular: true,
                  yo: 'comencé',
                  tu: 'comenzaste',
                  el: 'comenzó',
                  nosotros: 'comenzamos',
                  vosotros: 'comenzasteis',
                  ustedes: 'comenzaron'
                }]},
                
                
                {verb:'pescar', meaning: 'to fish', tenses: [{
                  name: 'Preterite',
                  irregular: true,
                  yo: 'pesqué',
                  tu: 'pescaste',
                  el: 'pescó',
                  nosotros: 'pescamos',
                  vosotros: 'pescasteis',
                  ustedes: 'pescaron'
                }]},
                
                
                {verb:'pagar', meaning: 'to pay', tenses: [{
                  name: 'Preterite',
                  irregular: true,
                  yo: 'pagué',
                  tu: 'pagaste',
                  el: 'pagó',
                  nosotros: 'pagamos',
                  vosotros: 'pagasteis',
                  ustedes: 'pagaron'
                }]},
                
                
                {verb:'leer', meaning: 'to read', tenses: [{
                  name: 'Preterite',
                  irregular: true,
                  yo: 'leí',
                  tu: 'leíste',
                  el: 'leyó',
                  nosotros: 'leímos',
                  vosotros: 'leísteis',
                  ustedes: 'leyeron'
                }]},
                
                {verb:'saber', meaning: 'to know, to know how', tenses: [{
                  name: 'Futuro',
                  irregular: true,
                  yo: 'sabré',
                  tu: 'sabrás',
                  el: 'sabrá',
                  nosotros: 'sabremos',
                  vosotros: 'sabréis',
                  ustedes: 'sabrán'
                },
                {
                  name: 'Preterite',
                  irregular: true,
                  yo: 'supe',
                  tu: 'supiste',
                  el: 'supo',
                  nosotros: 'supimos',
                  vosotros: 'supisteis',
                  ustedes: 'supieron'
                }]},
                
                
                {verb:'traer', meaning: 'to bring', tenses: [{
                  name: 'Preterite',
                  irregular: true,
                  yo: 'traje',
                  tu: 'trajiste',
                  el: 'trajo',
                  nosotros: 'trajimos',
                  vosotros: 'trajisteis',
                  ustedes: 'trajeron'
                }]},
                
                
                {verb:'ir', meaning: 'to go', tenses: [{
                  name: 'Preterite',
                  irregular: true,
                  yo: 'fui',
                  tu: 'fuiste',
                  el: 'fue',
                  nosotros: 'fuimos',
                  vosotros: 'fuisteis',
                  ustedes: 'fueron'
                }]},
                
                
                {verb:'ser', meaning: 'to be:permanent', tenses: [{
                  name: 'Preterite',
                  irregular: true,
                  yo: 'fui',
                  tu: 'fuiste',
                  el: 'fue',
                  nosotros: 'fuimos',
                  vosotros: 'fuisteis',
                  ustedes: 'fueron'
                }]},
                function(err){
                    if (err)
                        console.log(err);
                });
});
