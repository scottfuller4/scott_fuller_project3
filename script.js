const breakup = {
    match: [
        {
            teach: 'love',
            heartBreaker: true,
            grateful: true,
            textMessage: 'output text message'
        },
        {
            teach: 'love',
            heartBreaker: true,
            grateful: false,
            textMessage: 'output text message'
        },
        {
            teach: 'love',
            heartBreaker: false,
            grateful: true,
            textMessage: 'output text message'
        },
        {
            teach: 'love',
            heartBreaker: false,
            grateful: false,
            textMessage: 'output text message'
        }
    ],
    songLaugh: [
        {
            teach: 'love',
            heartBreaker: 'true',
            grateful: 'true',
            textMessage: 'suck a bag of lemons'
        },
        {
            teach: 'love',
            heartBreaker: 'true',
            grateful: 'false',
            textMessage: 'output text message'
        },
        {
            teach: 'love',
            heartBreaker: 'false',
            grateful: 'true',
            textMessage: 'different output 1'
        },
        {
            teach: 'love',
            heartBreaker: 'false',
            grateful: 'false',
            textMessage: 'different output 2'
        }
    ],
    engagement: [
        {
            teach: 'love',
            heartBreaker: true,
            grateful: true,
            textMessage: 'output text message'
        },
        {
            teach: 'love',
            heartBreaker: true,
            grateful: false,
            textMessage: 'output text message'
        },
        {
            teach: 'love',
            heartBreaker: false,
            grateful: true,
            textMessage: 'output text message'
        },
        {
            teach: 'love',
            heartBreaker: false,
            grateful: false,
            textMessage: 'output text message'
        }
    ],
    betterDiscussions: [
        {
            teach: 'love',
            heartBreaker: true,
            grateful: true,
            textMessage: 'output text message'
        },
        {
            teach: 'love',
            heartBreaker: true,
            grateful: false,
            textMessage: 'output text message'
        },
        {
            teach: 'love',
            heartBreaker: false,
            grateful: true,
            textMessage: 'output text message'
        },
        {
            teach: 'love',
            heartBreaker: false,
            grateful: false,
            textMessage: 'output text message'
        }
    ]
};

$(function() {

    const getRandomIndex = function(array) {
        return array[Math.floor((Math.random() * array.length))];
    }

    $('.quiz-form').on('submit', function(event){
        //stop the natural behaviour of the form
        event.preventDefault();

        //capture the input value of the user's name and their partner's name
        //clear the text field after the user submits the form
        const userName = $('input[name=userName]').val();
        const partnerName = $('input[name=partnerName]').val();

        if (userName === '') {
            alert("Please enter your name.");
            return;
        } else {
            $('input[name=userName]').val('');
        };

        if (partnerName === '') {
            alert("Please enter your partner's name.");
            return;
        } else {
            $('input[name=partnerName]').val('');
        };

        //capture the value of all the radio buttons and add them to a variable
        const breakUpReason = $('input[name=breakUp]:checked').val();
        const lessonLearned = $('input[name=teach]:checked').val();
        const heartBreakChoice = $('input[name=heartBreak]:checked').val();
        const goodMemories = $('input[name=grateful]:checked').val();

        // console.log(breakUpReason, lessonLearned, heartBreakChoice, goodMemories);

        //based on the users break up reason, get the correct array from the breakup object

        const userBreakup = breakup[breakUpReason];

        //create an empty array to store objects that match all user input selections
        const textMessageOption = [];

        //iterate through the userBreakup array and push any objects that match all user input to the textMessageOption array.
        for (let i = 0; i < userBreakup.length; i++) {
            if (userBreakup[i].teach === lessonLearned && userBreakup[i].heartBreaker === heartBreakChoice && userBreakup[i].grateful === goodMemories)  {
                textMessageOption.push(userBreakup[i]);
            }
        }

        const textMessageDisplay = getRandomIndex(textMessageOption);

        //add a concatenated string of partner name, a random text message from the options in textMessageOption and the username

        $('.generated-text').html(`<h2>${partnerName}, ${textMessageDisplay.textMessage}. ${userName}</h2>`)

        // shuffle the text message options
    })
});