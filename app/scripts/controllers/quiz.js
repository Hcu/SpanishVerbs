'use strict';

angular.module('spanishApp')
  .controller('QuizCtrl', function ($scope, $location, $http) {
    //Default quiz is 5 questions. The user can configure this
    $scope.questionCount = 5;
    $scope.quiz = {all: false, futuro: false, present: false, imperfect: false, preterite: false};
    var questionsLeft = 0;
    
    
    $scope.toggleAllTenses = function(){
        $scope.quiz.futuro = !$scope.quiz.all;
        $scope.quiz.present = !$scope.quiz.all;
        $scope.quiz.imperfect = !$scope.quiz.all;
        $scope.quiz.preterite = !$scope.quiz.all;
    };
    
    function getNewQuestion(){
        //Get random verb
        var rnd = Math.round(Math.random($scope.verbs.length-1)* ($scope.verbs.length-1));
        //TODO Fetch verb from db and populate tenses (cache it if needed), right now
        //we have prefetched all verbs in the scope verbs array
        var verb = $scope.verbs[rnd];
        //Get random available tense from verb
        
        var tenseRnd = Math.round(Math.random(verb.tenses.length-1) * (verb.tenses.length-1));
        var tense = verb.tenses[tenseRnd];
        
        
        //Get random person (usted, yo, ...)
        var persons = ['yo', 'tu', 'el', 'nosotros', 'vosotros', 'ustedes'];
        var personRnd = Math.round(Math.random(5) * 5);
        
        //Store the correct answer in the object.
        
        
        //Populate question object
        return { verb: verb.verb,
                            tense: tense.name,
                            person: persons[personRnd],
                            correctAnswer: tense[persons[personRnd]],
                            answer: '',
                            correct: function(){
                                return this.answer === this.correctAnswer;
                            }
                };
    }
    
    function showResults(){
        $scope.isQuizFinished=true;
        
       
        //Loop over all $scope.answers and compare correctAnswer with given answer
        for(var answerIndex in $scope.answers)
        {
            var question = $scope.answers[answerIndex];
            if (question.answer === question.correctAnswer)
            {
                $scope.quizScore++;
            } 
        
        }
        
        //Show results to user.
        
    }
    
    $scope.startQuiz = function(){
        $scope.quizScore = 0;
        $scope.answers = [];
        $scope.quizTotal = $scope.questionCount;
        questionsLeft = $scope.questionCount;
        $scope.tenses = ['Present', 'Preterite', 'Imperfect', 'Futuro'];
        
        //TODO , don't get all the tenses from the verbs yet
        //Get only the tenses that were selected in the quiz
        
        $http.get('/api/verbs', {params: {present:$scope.quiz.present,
            imperfect: $scope.quiz.imperfect,
            futuro: $scope.quiz.futuro,
            preterite: $scope.quiz.preterite}}).success(function(verbs) {
          $scope.verbs = verbs;
          $scope.question = getNewQuestion();
          $scope.isQuizStarted = true;
          $scope.isQuizFinished = false;
        });    
        
    };
    
    $scope.storeAnswerAndProceed = function(){
        $scope.answers.push($scope.question);
        questionsLeft--;
        
        if (questionsLeft != 0)
        {
            $scope.question = getNewQuestion();
        } else {
            showResults();
        }
    };
  });
