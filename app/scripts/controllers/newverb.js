angular.module('spanishApp')
.controller('NewVerbCtrl', function ($scope, $routeParams, $location, $http) {
    $scope.verb = {
        tenses : []
    };

    if ($routeParams.verb)
    {
        //we are editing
        $http.get('/api/verb/' + $routeParams.verb).success(function(verbs) {
              $scope.verb = verbs[0];
            });
    }            
    
    
    $scope.saveVerb = function () {
        console.log("saving verb");
        var config = {};
        $http.post('api/verbs', $scope.verb, config).success(function (data, status, headers, config) {
            $scope.saved = true;
        }).error(function (data, status, headers, config) {
            $scope.saved = false;
        });
        $location.path('/');
    };

    $scope.saveTense = function () {
        console.log($scope.verb);

        var copy = {};
        $.extend(copy, $scope.verb.newtense);
        $scope.verb.tenses.push(copy);
        $scope.verb.newtense = {};
        $scope.isRegular = false;
    };

    $scope.fillRegular = function () {
        var infinitive = $scope.verb.verb;
        var stem = $scope.getStem($scope.verb.verb);
        var ending = $scope.getEnding($scope.verb.verb);
        var verb = $scope.verb.newtense;
        if ($scope.isRegular) {
            if ($scope.verb.newtense.name === 'Present') {
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
            } else if ($scope.verb.newtense.name === 'Futuro') {
                verb.yo = infinitive + 'é';
                verb.tu = infinitive + 'ás';
                verb.el = infinitive + 'á';
                verb.nosotros = infinitive + 'emos';
                verb.vosotros = infinitive + 'éis';
                verb.ustedes = infinitive + 'án';

            } else if ($scope.verb.newtense.name === 'Preterite') {
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
            } else if ($scope.verb.newtense.name === 'Imperfecto'){
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
            
            
        }
    }

    $scope.getEnding = function (verb) {
        if (verb)
            return verb.substring(verb.length - 2);
        return "";
    }

    $scope.getStem = function (verb) {
        return verb.substring(0, (verb.length - 2));
    }

    $scope.isVerbValid = function () {
        var ending = $scope.getEnding($scope.verb.verb);
        if (ending === 'ar' || ending === 'ir' || ending === 'er') {
            return true;
        }
        if (ending === 'se') {
            var reflexive = $scope.verb.verb.substring($scope.verb.verb.length - 4);

            if (reflexive === 'arse' || reflexive === 'irse' || reflexive === 'erse') {
                return true;
            }

        }

        return false;
    }

});
