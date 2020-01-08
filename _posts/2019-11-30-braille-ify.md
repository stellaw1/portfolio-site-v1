---
layout: post
title: Braille-ify
tags: project, completed
image: brailleify.png
---

A digital text to Brialle translator submitted at the University of British Columbia Local Hack Day hackathon. 

## Inspiration
There are millions of people in the world that are blind, while the internet a widespread amount of information inaccessible to the visually impaired. We created an application that would fix this issue. This application not only translates online webpages into braille (currently displayed in a Python GUI). As well, it is very time-consuming to read in braille when compared to other languages, so we implemented an API that condenses long articles into key words according to their relevance for increased literacy. The program can be connected to a Rasperry Pi board and pistons for practical use.

## Purpose
Braille-ify currently takes a Wikipedia page URL as an entry and displays the contents of the page in a GUI. We have designs and code for connections to a Raspberry Pi board.

## Challenges 
We initially tried to implement all the features on Java but we ran into bugs with the GUI and translating library. Parsing webpages in Java was also tedious in that conversion to JSON format is complicated. We switched to Python on the spot to match a text to Braille library in that language. We also attempted a prototype on Arduino, but had trouble with connecting and uploading code, so switched to Raspberry Pi.

## Lessons
Python!
Html parsing, making GUIs in Python, working with APIs.

## Plans
Concrete Raspberry Pi hardware that displays webpages in Braille in real-time.

## Prototype
https://github.com/stellaw1/Braille-ify