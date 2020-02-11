---
layout: post
title: Food Fairy
tags: completedproject
image: foodfairy.png
---

A foodwaste manager project built at the University of Washington Dubhacks hackathon. 

## Inspiration
In 2016, roughly 50% of all food produce in the United States is thrown away- $160 billion dollars worth of food- and while much of this waste is produced on a commercial level, we wanted to create a tool that minimizes food waste on a consumer level. We want to minimize the need to throw food in our kitchens away, simply because we've forgotten we still had that bag of tomatoes sitting in the corner of our fridges, or that the ground beef expired 2 days ago.

## Purpose
Never let your food go bad again! Food fairy is a web application that allows the user to log food items they have in their kitchen as a way to keep track of expiration dates. The tool also recommends customized recipes based on which foods on the log are about to expire, to help the user make the most out of their ingredients before they go bad.

## Design
We utilized cloud functions on Google Cloud Platform for getting the recommended recipe. By checking the expiring date of food from firebase, we can get recipe based on the expiring ingredient by a recipe API and display it on the client side. We also used firebase to store "My food" data. We then connected the backend to our frontend to function as a web app.

## Challenges
We ran into issues of CORS block, and it took us a long time to figure out with the mentors.

## Accomplishments 
Picked up JavaScript and HTML from very minimal experience.
Collaborated with a diverse group of individuals
Sharpened Google Cloud and firebase skills and problem solving for cloud computing

## Plans
Once the web application has been finalized, we'd like to create a mobile app version of the tool for easier user accessibility. Future steps are to integrate our application into a voice assistant such as Google Assistant or Cortana for hands-free accessibility from the convenience of the users' homes and devices.

## Prototypes
Click below to check out the prototype: 
[![scrnsht](https://github.com/stellaw1/stellaw1.github.io/blob/master/images/projects/foodfairy.png?raw=true)](http://foodfairy.tech/)
