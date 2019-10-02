# AnimatedCountDownTimer
This includes all the files from AnimatedCountDownTimer

Event-based architecture

1. Display a timer that does a countdown from the time the user inputs
2. Show an animated border around the timer does gradually reduces proportional to the time.


Pseudocode:

-Wait for the input from user
    -Wait for user to click the start button
    -Initiate the timer
    -Draw border around the timer
    -Timer starts with a 1000 sec delay to mimic the countdown timer
        -During this time, user is free to pause and continue the timer
    -Check if the timer reached 0
    -Notify the user and input box is available again
    -border should show 0 progression

Challenges:

-The architecture alters between timer and border instance everytime a validation occurs.

Solution:

-To have a whole block of code that is centralised on the function of timer. This code then triggers an event when timer 'starts', 'ticks' or 'done'.

Class structure:

class Timer
    constructure(durationInput, startButton, pauseButton)
        start()
        pause()
        onDurationChange() - used when input box is changed
        tick() - used to update number and border etc



----------------------------------------------------------------
Version 0.11

     Added buttons and tested out the Timer object
----------------------------------------------------------------
Version 0.12

     link tick method to the start and pause method
----------------------------------------------------------------
Version 0.13

     DOM value storage, getter and setter update
----------------------------------------------------------------
Version 0.14

     Prepare border callback functions aim to help communication
     with graphics
----------------------------------------------------------------
Version 0.141

     Extract timer class for cleaner code
----------------------------------------------------------------
Version 0.15

     Added SVG for the circular border and use stroke-dasharray,
     stroke-dashoffset for the animation. fill and stroke to
     draw the circle.
----------------------------------------------------------------
Version 0.16

     Fixed floating point error, moving border with a fixed off
     set. Clockwise and correct opening direction.