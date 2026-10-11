var app = angular.module("exploreSpaceApp", []);

app.controller("SpaceController", function($scope) {

    $scope.searchText = "";

    $scope.selectedPlanet = null;
    $scope.favoritePlanets = [];

$scope.isPlanetFavorite = function(planet) {
    return $scope.favoritePlanets.indexOf(planet) !== -1;
};

$scope.togglePlanetFavorite = function(planet) {

    var index = $scope.favoritePlanets.indexOf(planet);

    if (index === -1) {
        $scope.favoritePlanets.push(planet);
    } else {
        $scope.favoritePlanets.splice(index, 1);
    }
};

    $scope.planets = [

        {
            name: "Mercury",
            icon: "🌑",
            moons: 0,
            distance: "57.9M km",
            diameter: "4,879 km",
            gravity: "3.70 m/s²",
            day: "1,408 hours",
            year: "88 Earth days",
            description: "The smallest planet and the closest planet to the Sun.",
            fact: "Mercury has extreme temperature changes between day and night."
        },

        {
            name: "Venus",
            icon: "🟡",
            moons: 0,
            distance: "108.2M km",
            diameter: "12,104 km",
            gravity: "8.87 m/s²",
            day: "5,832 hours",
            year: "225 Earth days",
            description: "A hot world covered by a thick atmosphere.",
            fact: "Venus is the hottest planet in our solar system."
        },

        {
            name: "Earth",
            icon: "🌍",
            moons: 1,
            distance: "149.6M km",
            diameter: "12,742 km",
            gravity: "9.81 m/s²",
            day: "24 hours",
            year: "365 days",
            description: "Our home planet and the only known world with life.",
            fact: "Earth is about 4.5 billion years old."
        },

        {
            name: "Mars",
            icon: "🔴",
            moons: 2,
            distance: "227.9M km",
            diameter: "6,779 km",
            gravity: "3.71 m/s²",
            day: "24.6 hours",
            year: "687 Earth days",
            description: "The Red Planet with a cold and dusty surface.",
            fact: "Mars is home to Olympus Mons, a giant volcano."
        },

        {
            name: "Jupiter",
            icon: "🟠",
            moons: 95,
            distance: "778.5M km",
            diameter: "139,820 km",
            gravity: "24.79 m/s²",
            day: "9.9 hours",
            year: "11.86 Earth years",
            description: "The largest planet in our solar system.",
            fact: "Jupiter has a huge storm called the Great Red Spot."
        },

        {
            name: "Saturn",
            icon: "🪐",
            moons: 146,
            distance: "1.43B km",
            diameter: "116,460 km",
            gravity: "10.44 m/s²",
            day: "10.7 hours",
            year: "29.45 Earth years",
            description: "A giant planet famous for its spectacular rings.",
            fact: "Saturn's rings are made mostly of ice and rocky particles."
        },

        {
            name: "Uranus",
            icon: "🔵",
            moons: 28,
            distance: "2.87B km",
            diameter: "50,724 km",
            gravity: "8.69 m/s²",
            day: "17.2 hours",
            year: "84 Earth years",
            description: "An ice giant that rotates on its side.",
            fact: "Uranus rotates at a very unusual angle."
        },

        {
            name: "Neptune",
            icon: "🔵",
            moons: 16,
            distance: "4.5B km",
            diameter: "49,244 km",
            gravity: "11.15 m/s²",
            day: "16.1 hours",
            year: "164.8 Earth years",
            description: "The farthest major planet from the Sun.",
            fact: "Neptune has extremely powerful winds."
        }

    ];


    // OPEN PLANET DETAILS
    $scope.selectPlanet = function(planet) {

        $scope.selectedPlanet = planet;

    };


    // CLOSE PLANET DETAILS
    $scope.closePlanet = function() {

        $scope.selectedPlanet = null;

    };
    // =========================
// SPACE QUIZ
// =========================

$scope.currentQuestion = 0;

$scope.selectedAnswer = null;

$scope.score = 0;

$scope.quizFinished = false;


$scope.questions = [

    {
        question: "Which planet is known as the Red Planet?",
        options: [
            "Earth",
            "Mars",
            "Jupiter",
            "Venus"
        ],
        answer: "Mars"
    },

    {
        question: "Which is the largest planet in our solar system?",
        options: [
            "Earth",
            "Saturn",
            "Jupiter",
            "Neptune"
        ],
        answer: "Jupiter"
    },

    {
        question: "Which planet is famous for its rings?",
        options: [
            "Mars",
            "Venus",
            "Saturn",
            "Mercury"
        ],
        answer: "Saturn"
    },

    {
        question: "How many moons does Earth have?",
        options: [
            "1",
            "2",
            "4",
            "0"
        ],
        answer: "1"
    },

    {
        question: "Which planet is closest to the Sun?",
        options: [
            "Venus",
            "Mercury",
            "Earth",
            "Mars"
        ],
        answer: "Mercury"
    }

];


$scope.submitAnswer = function() {

    if ($scope.selectedAnswer === null) {

        alert("Please select an answer!");

        return;

    }


    // Check answer

    if (
        $scope.selectedAnswer ===
        $scope.questions[$scope.currentQuestion].answer
    ) {

        $scope.score++;

    }


    // Move to next question

    if (
        $scope.currentQuestion <
        $scope.questions.length - 1
    ) {

        $scope.currentQuestion++;

        $scope.selectedAnswer = null;

    }

    else {

        $scope.quizFinished = true;

        if ($scope.score === 5) {

            $scope.resultMessage =
                "Perfect score! You are a true Space Explorer! 🚀";

        }

        else if ($scope.score >= 3) {

            $scope.resultMessage =
                "Great job! You know your universe well! 🌟";

        }

        else {

            $scope.resultMessage =
                "Keep exploring! The universe has many secrets. 🌌";

        }

    }

};


$scope.restartQuiz = function() {

    $scope.currentQuestion = 0;

    $scope.selectedAnswer = null;

    $scope.score = 0;

    $scope.quizFinished = false;

};
// =========================
// SPACE MISSIONS
// =========================

$scope.selectedMission = null;

$scope.missions = [

    {
        name: "Artemis II",
        icon: "🌙",
        destination: "Moon",
        year: "2026",
        status: "Upcoming",
        description: "A human spaceflight mission designed to travel around the Moon and return safely to Earth.",
        objective: "Test the systems required for future human exploration of the Moon.",
        agency: "NASA"
    },

    {
        name: "Mars Exploration",
        icon: "🔴",
        destination: "Mars",
        year: "Ongoing",
        status: "Active",
        description: "Robotic missions studying the surface, atmosphere and history of Mars.",
        objective: "Understand the environment of Mars and search for evidence about its past.",
        agency: "NASA"
    },

    {
        name: "James Webb Telescope",
        icon: "🔭",
        destination: "Deep Space",
        year: "2021",
        status: "Active",
        description: "A powerful space telescope observing distant galaxies, stars and planets.",
        objective: "Study the universe and investigate how stars and galaxies formed.",
        agency: "NASA / ESA / CSA"
    },

    {
        name: "Europa Clipper",
        icon: "🪐",
        destination: "Europa",
        year: "2024",
        status: "Active",
        description: "A spacecraft studying Jupiter's moon Europa and its potential habitability.",
        objective: "Investigate whether Europa has conditions suitable for life.",
        agency: "NASA"
    }

];


// Open mission details
$scope.selectMission = function(mission) {

    $scope.selectedMission = mission;

};


// Close mission details
$scope.closeMission = function() {

    $scope.selectedMission = null;

};
$scope.spaceFacts = [
    "A day on Venus is longer than a year on Venus. 🪐",
    "Jupiter is the largest planet in our solar system. 🌌",
    "Mars has the largest volcano in the solar system, Olympus Mons. 🔴",
    "Saturn's rings are made mostly of ice and rocky particles. 💫",
    "Neptune has some of the fastest winds in the solar system. 🌪️",
    "One year on Neptune is about 165 Earth years. 🌍",
    "Earth is the only planet currently known to support life. 🌎",
    "The Sun contains more than 99% of the mass in our solar system. ☀️"
];

$scope.currentFact = $scope.spaceFacts[0];

$scope.newFact = function() {
    var randomIndex = Math.floor(Math.random() * $scope.spaceFacts.length);
    $scope.currentFact = $scope.spaceFacts[randomIndex];
};

});