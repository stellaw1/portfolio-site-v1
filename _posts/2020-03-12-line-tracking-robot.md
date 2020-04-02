---
layout: post
title: Line Tracking Robot
tags: completedproject
image: linerobot.jpg
---

Built a line-following robot using a Raspberry Pi and a PID controller with additional functionalities for a course project.


## Overview
![robot front](https://github.com/stellaw1/stellaw1.github.io/blob/master/images/projects/linerobot.jpg?raw=true)
![robot back](https://github.com/stellaw1/stellaw1.github.io/blob/master/images/projects/linerobot2.jpg?raw=true)

My team and I built a robot that essentially follows black lines on light surfaces. The additional functionalities include a Mobile App Controller, path history tracking, alert system (Twitter), and object detection. 


## Implementation

### Hardware
#### Main Robot Body 
The main body of our robot is the 2WD Mobile Platform, which consists of 5 AAA batteries and 2 DC motors. The two DC motors connect to pins on the Motor Hat (attached to our Raspberry Pi) to allow control of voltage supply via the MotorKit using software. The battery source is attached to a power switch on the 2WD Mobile Platform before connecting to the Motor Hat. The motors can independently go forwards and backwards due to the individual H-Bridges existing in the motor hat, removing the need for our team to use relays or another large hardware component. 


#### Infrared Sensor protoboard
![sensor1](https://github.com/stellaw1/stellaw1.github.io/blob/master/images/projects/linerobot-sensor1.jpg?raw=true)

We mounted and saudered reflective optical sensors at a specific angle chosen to minimize the effect of shadows cast, around 45 degrees. The placement of the inner sensors are at exactly tape width apart, such that ideally if the robot was directly on the black line, the inner sensors are direcly above the connection between the black and white (aka tape and floor), while the outer sensors read white (floor). A 100 Ohm resistor was connected to each Digital in pin on each sensor and a 4100 Ohm resistor connected to the 5V pin on the Motor Hat. This ratio was chosen to maintain the recommended circuit while increasing the power to the circuit at a safe level.

The four sensors are configured in two pairs that are situated tape-width apart (approximately 1 cm). This way, if the inner sensors detect black while the outer detect white, the robot is following the line. If both sensors in the right pair detect black while both sensors in the left pair detect white, then the robot is straying left, and vice versa for straying right. 

Sensors are sampled at a rate of 3000 Hz, namely approximately every 1/3000 seconds. The sample rate was decided upon after trial and error and fine tuning to allow for sufficient time to see a sharp turn and react to it. 


#### Headless Raspberry Pi 
●	The headless Pi use, implementation, and challenges
The headless Pi is used as the main controller for the PID algorithm and the motor speeds. It is attached to a portable battery pack and the Motor Hat and is situated on the 2WD Mobile Platform robot to allow autonomous function and can be controlled via ssh if needed after powering on. 
It is at times difficult to control the RPi headless, as it can only be communicated via terminal. In the beginning, it was difficult to get used to coding through the terminal, but this issue was solved by the team’s desire to always learn more and now each member can use the terminal to start the Pi. We also purchased a touchscreen LCD for our demo so this will allow easier use of the Pi going forward. 


#### Camera
![sensor2](https://github.com/stellaw1/stellaw1.github.io/blob/master/images/projects/linerobot-sensor2.jpg?raw=true)
The camera is used to take snapshots of the robot’s environment to be posted to Twitter as an update tweet upon terminating its route. 


#### Component list
-	Raspberry Pi
-	2WD Mobile Platform robot kit
-	Motor Hat
-	2x DC Motors
- 4x reflective optical sensors
- Resistors
- Protoboard 
-	TFT LCD Display
-	Raspberry Pi Camera attachment
-	Ultrasonic Sensor
-	5x AAA Batteries




### Software

#### PID Controller
The algorithm for the line tracking functionality is a Proportional Derivative Integral (PID) controller that takes into account the current error value, its derivative and its integral over time according to binary input from the four sensors. The PID controller generate a stream of error values based on the robot’s alignment with the track to output adjustment values to the motor, so the robot will turn smoothly and without significant oscillation.

The input to the PID controller is from the four reflective optical sensors. Each sensor outputs a bit, with 0 signifying white and 1 signifying black. Therefore, we get a 4-bit input from four sensors with the most significant bit from the leftmost sensor and least significant bit from the rightmost sensor. 

Using the input, we calculate an error value that is either positive, negative, or zero which signifies an adjustment to the right, left, or none, respectively. For example, if the input is 4b’0110, then our PID outputs a value of 0, namely no adjustment is required and the robot continues to move forward. 

The general method we used to determine accurate Derivative gain (Kd), Proportional gain (Kp), and Integral gain (Ki) values was similar to the Ziegler-Nichols method:
1.	Set all gains to 0
2.	Increase Kd until the system oscillates
3.	Reduce Kd by a factor of 2-4
4.	Set Kp to about 1% of Kd
5.	Increase Kp until oscillations start
6.	Decrease Kp by a factor of 2-4
7.	Set Ki to about 1% of Kp
8.	Increase Ki until oscillations start
9.	Decrease Ki by a factor of 2-4 
10. PID values are approximately set
11.	Minor fine tuning.


#### LCD Path Graphing 
We plotted the path of the robot's traversal and displayed it on a 2D grpah on the LCD display. The plot begins to show on the LCD dynamically after the robot stops to not interfere with the PID readings at our set rate of 3000 readings/second. We use coordinate and angle data from the mobile app and trigonometric identities and formulae to build an algorithm for plotting. 


#### Mobile App
![app screenshot](https://github.com/stellaw1/stellaw1.github.io/blob/master/images/projects/linerobot5.jpg?raw=true)
The Robot Controller app was developed in Android Studio, for Android phones. It connects to the robot via bluetooth and controls the robot through a joystick interface. The App sends the data in a string format to the pi, for which the main code has a decoder for and calls a function accordinly.

The first part of the app consists of bluetooth code that connects the Raspberry Pi to a bluetooth device - the mobile phone. The second part checks for the coordinates pf the joystick controlled by the app user and  casts the value to a string so it can be sent to the robot. Specifically, the Python code converts the x,y coordinates into vectors and an angle. The angle is used to find the direction the robot has to move in and  the distance of the joystick from the center determines the speed for the robot to move at. 

We chose a joystick UI rather than directional buttons because we felt the moving robot should not be constrained by 4 or even 8 directions. We thought this interface would provide the best and most realistic experience for the user. 


#### Twitter bot
Using ouput from the Raspberry Pi camera attachment, we used a Python Twitter API to have out robot automatically tweet a picture of its environment upon completing a track, along with relevant information about the distance of obstacles in front of it and the speed at which it travels. 
![tweet](https://github.com/stellaw1/stellaw1.github.io/blob/master/images/projects/linerobot4.jpg?raw=true)


#### Object detection
The robot looks for obstacles before and after it starts running, and interrupts if an object is detected under a certain threshold of distance. It also sends data about the distance of the closest object in the tweet. 



## Reflection
## Challenges
This was a very open-ended project, which allowed more freedom and creativity, but also required more responsibility and communication. In earlier stages, it was difficult to figure out equal tasks for each team member, especially because we were not fully set on all of our ideas yet. The process was an iterative one and there were no formulas or guidelines for us to follow closely, and this lead to lots of communication - for large or small steps - during the design process, to ensure that everybody is on the same page and being productive with their time. 
In the end, each member on our team rotated taking leadership depending on the component that they focused mainly on and where that fit into the design process. For example, teammates in charge of the motor and PID took charge in the earlier stages of the process, while the teammates in charge of the LCD display displayed more leadership towards the later stages in the process.  
We were able to develop all of our technical skills immensely, with the development of the mobile app, PID controls, and dc motors controls being new to all of us, as well as giving some team member’s the opportunity to better understand concepts our groups implemented in the past, like twitter, graphing, hardware, and sonar, where they may not have had the chance before. 
We also were somewhat limited in our timeline to fully implement the features we desired, and our team feels that we would have greatly benefited from learning how to add multithreaded streams to our implementation to allow for reading from the sonar, PID updates, and track plotting all at the same time. Another feature we would have learned a lot from was the implementation of a switch which could safely power on and power off the pi through a pure hardware “on” process, and the running of a shell script to turn the pi off and then disconnect the power. Albeit our team is at least satisfied that we can understand the theory behind such features even if we did not get to see them. 
In short, the most important things we take away from this project are the soft skills we needed to work efficiently, the technical skills and tasks we were able to accomplish, skills we were able to research and understand. These skills will not only carry through to Project 2, but also future projects and jobs we undertake, and in this we find this project's true value.


## Prototype
*Video of demo in progress*


## References
http://developer.android.com - main reference used for app development
https://github.com/ivmech/ivPID - main reference used for PID development
https://twitter.com/cpen291team11 - our team’s twitter account where tweets & photos are sent


## Credits
Built with [Arnold](https://arnoldying.github.io), Rain, Amir, Parsa, Sanjeev, and Manek. 

