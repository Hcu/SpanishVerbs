angular.module('spanishApp')
    .factory('verbSvc', function() {
            return {

                fillRegular: function(theVerb, tense) {
                    var infinitive = theVerb;
                    var stem = this.getStem(theVerb);
                    var ending = this.getEnding(theVerb);
                    var verb = {};
                    verb.name = tense;
                    
                    if (tense === 'Present') {
                        if (ending === 'ar') {
                            verb.yo = stem + 'o';
                            verb.tu = stem + 'as';
                            verb.el = stem + 'a';
                            verb.nosotros = stem + 'amos';
                            verb.vosotros = stem + 'aís';
                            verb.ustedes = stem + 'an';
                        }
                        if (ending === 'er') {
                            verb.yo = stem + 'o';
                            verb.tu = stem + 'es';
                            verb.el = stem + 'e';
                            verb.nosotros = stem + 'emos';
                            verb.vosotros = stem + 'eís';
                            verb.ustedes = stem + 'en';
                        }
                        if (ending === 'ir') {
                            verb.yo = stem + 'o';
                            verb.tu = stem + 'es';
                            verb.el = stem + 'e';
                            verb.nosotros = stem + 'imos';
                            verb.vosotros = stem + 'ís';
                            verb.ustedes = stem + 'en';
                        }
                    } else if (tense === 'Futuro') {
                        verb.yo = infinitive + 'é';
                        verb.tu = infinitive + 'ás';
                        verb.el = infinitive + 'á';
                        verb.nosotros = infinitive + 'emos';
                        verb.vosotros = infinitive + 'éis';
                        verb.ustedes = infinitive + 'án';

                    } else if (tense === 'Preterite') {
                        if (ending === 'ar') {
                            verb.yo = stem + 'é';
                            verb.tu = stem + 'aste';
                            verb.el = stem + 'ó';
                            verb.nosotros = stem + 'amos';
                            verb.vosotros = stem + 'asteis';
                            verb.ustedes = stem + 'aron';
                        }
                        if (ending === 'er' || ending === 'ir') {
                            verb.yo = stem + 'í';
                            verb.tu = stem + 'iste';
                            verb.el = stem + 'ió';
                            verb.nosotros = stem + 'imos';
                            verb.vosotros = stem + 'isteis';
                            verb.ustedes = stem + 'ieron';
                        }
                    } else if (tense === 'Imperfecto') {

                        if (ending === 'ar') {
                            verb.yo = stem + 'aba';
                            verb.tu = stem + 'abas';
                            verb.el = stem + 'aba';
                            verb.nosotros = stem + 'ábamos';
                            verb.vosotros = stem + 'abais';
                            verb.ustedes = stem + 'aban';
                        }
                        if (ending === 'er' || ending === 'ir') {
                            verb.yo = stem + 'ía';
                            verb.tu = stem + 'ías';
                            verb.el = stem + 'ía';
                            verb.nosotros = stem + 'íamos';
                            verb.vosotros = stem + 'íais';
                            verb.ustedes = stem + 'ían';
                        }
                    }
                    return verb;
                },

                getEnding: function(verb) {
                    if (verb)
                        return verb.substring(verb.length - 2);
                    return "";
                },

                getStem: function(verb) {
                    return verb.substring(0, (verb.length - 2));
                }

            };
        });