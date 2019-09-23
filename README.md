# AnimatedCountDownTimer
This includes all the files from AnimatedCountDownTimer

Event-based architecture

1. Display a timer that does a countdown from the time the user inputs
2. Show an animated border around the timer does gradually reduces proportional to the time.


Pseudocode

-Wait for the input from user
    -Wait for user to click the start button
    -Initiate the timer
    -Draw border around the timer
    -Timer starts with a 1000 sec delay to mimic the countdown timer
        -During this time, user is free to pause and continue the timer
    -Check if the timer reached 0
    -Notify the user and input box is available again
    -border should show 0 progression