---
layout: post
title: Line Tracking Robot
tags: completedproject
image: dancing-robot.jpg
---

CPEN 291 course project built with [Arnold](https://arnoldying.github.io), Rain, Amir, Parsa, Sanjeev, and Manek. 


For the reflective optical sensors, we used a 100 Ohm resistor connected to the Digital in pin and a 4100 Ohm resistor connected to the 5V pin. This ratio was chosen to maintain the recommended circuit but to increase the power to the circuit at a safe level that will operate well under our otherwise low power drawing conditions. In total, we used 4 reflective optical sensors for our robot.  They are used as sensors to support our PID controller that detects whether the robot is aligned with the track. 
The four sensors are configured in two pairs that are situated tape-width apart - approximately 1 cm (See Appendix G-1 for diagram). This way, if the inner sensors detect black while the outer detect white, the robot is following the line. If both sensors in the right pair detect black while both sensors in the left pair detect white, then the robot is straying left, and vice versa for straying right. 
Used in conjunction with a PID controller, we are able to generate a stream of error values based on the robot’s alignment with the track to output adjustment values to the motor, so the robot will turn smoothly and without significant oscillation, having used all three terms of the PID. 

●	The algorithm for the line tracking functionality
	The algorithm for the line tracking functionality is a Proportional Derivative Integral (PID) controller that takes into account the current error value, its derivative and its integral over time according to binary input from the four sensors. Each sensor outputs a bit, with 0 signifying white and 1 signifying black. Therefore, we get a 4-bit input from four sensors with the most significant bit from the leftmost sensor and least significant bit from the rightmost sensor. 
Using the input, we calculate an error value that is either positive, negative, or zero which signifies an adjustment to the right, left, or none, respectively. For example, if the input is 4b’0110, then our PID outputs a value of 0, namely no adjustment is required and the robot continues to move forward. 
Sensors are sampled at a rate of 3000 Hz, namely approximately every 1/3000 seconds. The sample rate was decided upon after trial and error and fine tuning to allow for sufficient time to see a sharp turn and react to it. 

●	The headless Pi use, implementation, and challenges
The headless Pi is used as the main controller for the PID algorithm and the motor speeds. It is attached to a portable battery pack and the Motor Hat and is situated on the 2WD Mobile Platform robot to allow autonomous function and can be controlled via ssh if needed after powering on. 
It is at times difficult to control the RPi headless, as it can only be communicated via terminal. In the beginning, it was difficult to get used to coding through the terminal, but this issue was solved by the team’s desire to always learn more and now each member can use the terminal to start the Pi. We also purchased a touchscreen LCD for our demo so this will allow easier use of the Pi going forward. 

●	Battery-operated robot implementation and challenges
The main body of our robot is the 2WD Mobile Platform, which consists of 5 AAA batteries and 2 DC motors. The two DC motors connect to pins on the Motor Hat to allow control of voltage supply via the MotorKit (software). The battery source is attached to a power switch on the 2WD Mobile Platform before connecting to the Motor Hat. The motors can independently go forwards and backwards due to the individual H-Bridges existing in the motor hat, removing the need for our team to use relays or another large hardware component that would hinder the robot’s overall speed or else draw more power to move due to the added weight.  
The greatest challenge that we ran into with the robot implementation was during fine tuning of the motor and PID control. Many times, we will fine tune our code to working condition and come back the next day to have the robot not following the line properly again. This is due to a number of factors: battery pack drains slowly, ambient lighting and shadows in testing area, different track shape, etc. The general method we used to determine accurate Kd, Kp, and Ki values (in that order) was similar to the Ziegler-Nichols method described here:
1.	Set all gains to 0.
2.	Increase Kd until the system oscillates.
3.	Reduce Kd by a factor of 2-4.
4.	Set Kp to about 1% of Kd.
5.	Increase Kp until oscillations start.
6.	Decrease Kp by a factor of 2-4.
7.	Set Ki to about 1% of Kp.
8.	Increase Ki until oscillations start.
9.	Decrease Ki by a factor of 2-4 and the PID values are approximately set.
10.	Do some small fine tuning.
C. Technical documentation for the additional functionality 
●	What the additional functionalities are
o	Mobile app control of the robot
o	LCD Display
o	picture taking at the finish line
o	twitter bot
o	object detection
o	full path travelled graphing on LCD

●	Include the list of the additional components you used
-	ultrasonic sonar sensor
-	3.5” Touchscreen TFT LCD
-	Pi camera module
-	android phone for robot control

●	How camera is used as a part of an additional feature
-	The camera is used to take snapshots of the robot’s environment to be posted to Twitter as an update tweet. We decided against complicating its implementation in terms of adding filters and adjusting its exposure levels and modes, so as to speed up the photo taking process, as the camera already needs a minimum time of 5 seconds between shots to adjust for the lighting of the shot.

●	The hardware implementation
o	Infrared Sensor protoboard
▪	Specific angle chosen to minimize the effect of shadows cast into the infrared sensors, averaging around 45 degrees for best performance, also allows for extra time before the turn to handle the data read from the sensors since the distance between the wheels and the part of the tape detected is maximized.
o	Vehicle weight balancing
▪	To maximize the robot’s control in turns, the hardware we installed was centered around the robot’s center of mass to make sure that both wheels experience the same friction and torque in their respective sides’ turns so that we do not have to adjust for weight imbalance experimentally in the software. This was something of an issue before we switched to the protoboard and fixed all our hardware in place.

●	The software implementation
o	LCD Path Graphing 
▪	Since the robot always determines its own direction and speed, we can plot the path it travels, and essentially draw a picture of the tape line that it sees.
▪	We assume an initial orientation of moving up in the y direction, and use the last known point to calculate the coordinates of the next point through some trigonometric identities and formulae
▪	This image is shown on the LCD dynamically after the robot traverses its path, so as to not interfere with the PID readings at our set rate of 3000 readings/second.
o	Mobile App to control Robot
▪	The App was developed in Android Studio. It connects to the robot via bluetooth. It controls the robot through a joystick. The App sends the data in a string format to the pi. The main.py code has a decoder for the input and calls a function depending on what the user calls.
▪	The App code has two parts. One part is the bluetooth code that connects to a bluetooth device. The other part checks for the coordinates the user moves the joystick and then casts the value to a string so it can be sent to the robot. There were several challenges we faced while implementing the code on android studio. We realised we missed a few parameters but the code still compiled and showed no errors, this gave us a hard time to find the bug. The bluetooth connection with the pi was dicey and disconnected very often.
▪	The Python code takes the input as x,y coordinates of the joystick. The x,y coordinates are then converted into vectors and angle is computed. The angle is then used to find the direction the robot has to move in. There is also a factor, calculated depending on the distance of the joystick from the center, which determines the speed of the robot. The main challenge we faced in creating this code was conversion from the vectors to angle because we had a duplicate variable constant which was causing a bug. 
▪	Another important aspect to discuss about the app was the choice to use a joystick rather than buttons, because we felt the moving robot should not be constrained by 4 or even 8 directions. We first implemented an app with buttons to move forward, backward, right, left, stop and demo but decided to create a joystick to make the app more interesting and controlling the robot fun.    
o	Object detection
▪	The robot looks for obstacles before and after it starts running and will print the distance of the closest object as a tweet
o	Twitter bot
▪	Will tweet the photo the raspberry pi captures along with relevant information about the distance of obstacles in front of it and the speed at which it travels to the twitter API, which posts it when the robot detects a distance between 10 and 100 cm in front of it (See Appendix G-3). 





D. Test and evaluations
Since each of us started off by writing separate code in separate files for each different component, we did initial testing for each component separately. For example, one person wrote ‘motor.py’ for software controlling the DC motors, while another person wrote ‘camera.py’ for testing and controlling the camera. After ensuring hardware and software for each component was working, we started integrating two components at a time and ensured the integration was functioning before integrating additional components. For example, the first two components that we integrated together was the motor and PID controller. 
	To test the motors, we tried both stepper motor and motor.throttle from the MotorKit library. We started by connecting one motor to the MotorHat on the Raspberry Pi and ensured that the motor moved according to the code. We chose to use motor.throttle over stepper motor because the output movement on the motor was more consistent. Then, we attached both motors to the Motor Hat and ensured both motors moved simultaneously and according to code. 
	After ensuring motor control via software, we tested the integration of our PID controller. This part required lots of iteration and fine tuning from trial and error, as various factors affected the output on our robot. For example, 
	Finally, after ensuring the basic functionality of robot following a line, we moved on to implementing and integrating additional functionalities, starting with the camera and LCD display. Most of our issues here were in the integration of all processes together, and since the PID controls needed around a 3000 Hz frequency of input signal to be accurate, we didn’t want to sacrifice our robot’s performance for the additional features, thus most additional features except the mobile app control take place at the beginning and end of the robot’s movement, since the time to read the sonar or update the graph severely hinders the performance of the line tracking in our single thread implementation.
	The last thing we had to test was the mobile app, We had 2 basic functionalities to test for the app to work. One was the bluetooth connection to the robot. We decided to have a hard coded connection to the robot so we do not have errors while connecting. The second functionality was evaluating the angle of the joystick to decide the direction the robot will move in. We had to find the center coordinates of the joystick and then compute the vectors from origin to compute the angle using the arctan formula. We also added a factor to change the speed of the robot depending on the magnitude of the vector, because we thought it was a good feature while testing. To ensure the joystick moves within its constraints, we hard coded the center and its boundaries. This did affect the functionality of the joystick but ensured it worked within the constraints. The negative effects of this was when the joystick was moved out of the constraint region by force, it tried to reverse the direction. Another issue was the constraint region was an approximate of the desired constraint region, so this caused a bug when the user moved out of the constraint region, even though he was well within the desired one. We decided it was a trade-off we needed to take for better functionality of the joystick, because if we did not hardcode the constraints the joystick did not respond accurately.



E. Conclusions and Reflections
This was a very open-ended project, which allowed more freedom and creativity, but also required more responsibility and communication. In earlier stages, it was difficult to figure out equal tasks for each team member, especially because we were not fully set on all of our ideas yet. The process was an iterative one and there were no formulas or guidelines for us to follow closely, and this lead to lots of communication - for large or small steps - during the design process, to ensure that everybody is on the same page and being productive with their time. 
In the end, each member on our team rotated taking leadership depending on the component that they focused mainly on and where that fit into the design process. For example, teammates in charge of the motor and PID took charge in the earlier stages of the process, while the teammates in charge of the LCD display displayed more leadership towards the later stages in the process.  
We were able to develop all of our technical skills immensely, with the development of the mobile app, PID controls, and dc motors controls being new to all of us, as well as giving some team member’s the opportunity to better understand concepts our groups implemented in the past, like twitter, graphing, hardware, and sonar, where they may not have had the chance before. 
We also were somewhat limited in our timeline to fully implement the features we desired, and our team feels that we would have greatly benefited from learning how to add multithreaded streams to our implementation to allow for reading from the sonar, PID updates, and track plotting all at the same time. Another feature we would have learned a lot from was the implementation of a switch which could safely power on and power off the pi through a pure hardware “on” process, and the running of a shell script to turn the pi off and then disconnect the power. Albeit our team is at least satisfied that we can understand the theory behind such features even if we did not get to see them. 
In short, the most important things we take away from this project are the soft skills we needed to work efficiently, the technical skills and tasks we were able to accomplish, skills we were able to research and understand. These skills will not only carry through to Project 2, but also future projects and jobs we undertake, and in this we find this project's true value.

F. References and bibliography
References
http://developer.android.com - main reference used for app development
https://github.com/ivmech/ivPID - main reference used for PID development
https://twitter.com/cpen291team11 - our team’s twitter account where tweets & photos are sent

Component list
-	Raspberry Pi
-	2WD Mobile Platform robot kit
-	Motor Hat
-	2x DC Motors
-	3.5” TFT LCD Display for final demo, 1” TFT LCD for first demo.
-	http://www.kumantech.com/kuman-35-inch-touch-screen-tft-lcd-display-spi-with-touch-pen-for-raspberry-pi-3b-pi-2b-pi-zero-w-pi-a-b_p0442.html?fbclid=IwAR3yYOxRVp23q_tMWj9pfTLT0T5kVnOPfuhFs4RfwVZ2mXSb20nyRVzxNJ0
-	http://www.lcdwiki.com/MHS-3.5inch_RPi_Display
-	Approximately CAD $30.00
-	RPi Camera attachment
-	Ultrasonic Sensor
-	5x AAA Batteries
-	Android phone
