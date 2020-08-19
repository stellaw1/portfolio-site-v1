---
layout: post
title: Circuit Python contribution
tags: plannedproject
image: Blinka.png
---


Contributing to an open source project, Circuit Python, as a part of my MLH Fellowship internship. 


# Circuit Python

### Summary
The Circuit Python codebase is a huge open source project hosted on GitHub, and I was assigned to work on this in whatever way seemed most interesting and engaging. For example, I could work on the issues posted on GitHub, improve specific features, or work alternate Adafruit projects. I chose to work on a mobile app Adafruit is developing named Glider.  

Glider is a react native mobile app (iOS and Android) that acts as a code editor for microcontrollers. Kaela, Lincoln, and I have been working with an Adafruit project maintainer, Scott, to takeover the glider project from the initial code that he had developed. The goal is to improve the app from the simple structure it is now to have more features and less bugs. Personally, I am working on the Android version of the app, and began with tackling the task of adding a colour wheel detection and popup feature. 

### Process
###### Setting up work environment
 * A lot of time was spent waiting for hardware (adafruit boards, android device, etc)
 * Installing software on the other hand was relatively straight forward (I already had Java, Node JS, and Android Studio installed)
 * Trial and error and collaborating with my teammates helped us get over the initial learning curve relatively quickly 
 * For example, forgetting `npm install` caused me a lot of trouble but teammates quickly reminded me of this step
###### Parsing bug fix
 * initial development of the colour wheel feature lead me to find a bug with parsing over BLE to the hardware
 * I spent lots of time becoming familiar with the codebase, mostly written in JavaScript
 * got to work with many react native libraries: BleManager, text-encoder, pyright...
 * I fixed the parsing issue on Android and iOS - [PR submitted](https://github.com/adafruit/glider/pull/12) and merged
###### Dark theme colour fix on android
 * Dark theme feature was initially implemented by Kaela on iOS
 * being the only android developer on my team, I noticed the text and backgorund are both dark on Android making it difficult to read. 
 * This was an easy fix and PR was submitted for this
###### Colour wheel feature
 * I began tackling this issue by learning to create react native apps from scratch
 * I created a test project that allowed me to test different colour wheel libraries and decide which is most fitting for glider
 * ASIDE: `create-react-app <project-name>` to create react apps and `npx react-native init <project-name>` to create react native apps
 * Added a simple [color palette library](https://www.npmjs.com/package/@iomechs/rn-color-palette) to glider
 * Added a click to copy to clipboard feature using a [Clipboard library](https://www.npmjs.com/package/@iomechs/rn-color-palette)

### Reflection
In the beginning phase of onboarding this project, the majority of my time was devoted to learning react native syntax and familiarizing myself with the codebase. I remember I would feel so lost in the beginning, being new to app development. I remembered countless people giving me the tip to "not be afraid to ask questions," and so I did. I asked my mentor questions, I asked teammates questions, I asked the project maintainer questions... And now, I can confidently say I can work with the codebase and actually do not want to let go of this project. I definitely want to continue contributing to this project, as it is intersting, taught me new skills, and the maintainer is super kind and patient with us. 
