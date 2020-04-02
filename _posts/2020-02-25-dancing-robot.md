---
layout: post
title: Dancing BiPed Robot
tags: completedproject
image: dancing-robot.jpg
---

Built a dancing biped robot with [Arnold](https://arnoldying.github.io/project/dancing-biped-robot.html), Rain, Amir, Parsa, Sanjeev, and Manek for a CPEN 291 course mini project. 


## Functionality
### Dance moves
1.	**Waddle**: The robot flaps its feet up and down similar to how a penguin waddles
2.	**Pop-Step**: The robot rotates its feet inwards and outwards in a pop and step sort of fashion
3.	**Ballerina**: The robot rotates its legs and performs a tip toe sort of action. The robot then proceeds to rotate and kick at the end.
4.	**High-Knees**: The robot brings its legs up and down one by one, similar to a high knees exercise.
5.	**Excite**: This move performs several kicks back to back, switching between the right and left legs.
6.	**Shuffle**: The robot performs a simple shuffle by turning its legs left and right several times.

### Songs
1.	**Anthem**: A powerful moving anthem
2.	**Mario**: Super Mario Bros Theme Song
3.	**Stranger Things**: Stranger Things Theme Song
4.	**All Star**: All-Star by Smash Mouth Chorus
5.	**Tetris**: Class Tetris Game Theme Song
6.	**Fortnite**: Fortnite Default Dance Song

### GUI Display
- loading and welcome screen that prompts for user input upon startup
- Course info screen
- Passcode login screen
- Main menu, consisting of 5 options:
  1. Default Menu - displays an animation showing dance moves and corresponding dance name
  2. Dance Menu - choose between six dance moves
  3. Song Menu - choose between six songs
  4. About - displays system information and general information
  5. Exit - terminates the program

### Wall detection
- Wall detection and motion sensing to abort task when distance to solid object is below a certain threshold. 
- Returns a ‘Runtime error’ when it is not able to detect a distance. 

### Passcode detection
- Passcode detection, system diagnostics, and an interactive UI with a keypad

### LED output
- LED lights that indicate button clicks, dance moves and supplemental information via output to a RGB module


## Software implementation 
### Finite State Machine
A finite state machine with nine states (Loading, Passcode, Home, Dance, Music, About, Exit, Request and Default) is used to run the GUI. Each state has a different, specific function for the GUI, and input from the sensor(Keypad or Ultrasonic) changes its state.
1. Loading state - a loading screen with an animation
2. Passcode state - a welcome screen and prompts for a password upon powering on the robot
-	if the password is wrong the screen will show this and let you try again
-	if the password is right it goes to the main menu
3. Home state - consists of 5 options to choose from the keypad:
    (1)Default, (2)Dance, (3)Song, (4)About, (5)Exit
4. Default state - Plays all the dance moves
5. Dance state - Choose between six dance moves with the six buttons, respectively: Waddle, Pop-step, Ballerina, High-Knees, Excite, Shuffle to keypad 1-6. Returns to the Main Menu once done or an interrupt is triggered.
6. Song state - Choose between six songs with the six buttons, respectively: Anthem, Mario, Stranger-Things, All-Star, Tetris, and Fortnite to keypad 1-6. Returns to the Main Menu once done or an interrupt is triggered.
7. Request state - asks the user if they want to (1) Play Again, (2) Dance, (3) Play Music or (4) return to home
8. About state - shows system information and general info about the bipedal dancing robot returns to Main Menu
9. Exit state -  terminates the program

### Interrupt
Since circuit python does not support interrupt service routine, we created an interrupt method that breaks out of loops when a sensor is triggered. 


## Hardware
### Components
- Itsy Bitsy M4 Express microcontroller
- 1.44" TFT LCD display
- numeric matrix keypad
- HCSR04 ultrasonic sonar sensor
- Servo motors
- breadboard
- Piezo buzzer
- Protoboard
- RGB module with unified voltage line
- Servo motors
- 3-D printed casing components
- 7404 NOT gate array
- 7400 NAND gate array
- 2N3904 NPN Transistors
- Ultrasonic Range Sensor
- 

### Electronic Circuit
![fritzing](https://github.com/stellaw1/stellaw1.github.io/blob/master/images/projects/dancing-robot-fritzing.jpg?raw=true)


## Skills practiced
- Python and CircuitPython
- GitHub
- Circuits (wiring and fritzing)
- SPI 
- soldering
- PWM (Pulse Width Modulation)
- Fritzing


## Reflection
This project was super fun. I worked with a group of fun people to develop an open-ended product that we are proud of. 


## Future 
I am hoping to film a feature video for our completed dancing biped robot. 
