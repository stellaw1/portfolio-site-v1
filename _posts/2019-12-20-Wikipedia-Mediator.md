---
layout: post
title: Wikipedia Mediator
tags: completedproject
image: wikipedia.jpg
---

Designed a mediator service for Wikipedia that uses jWiki API, Gson library, caches, servers, and threads. 

## Purpose
A basic algorithms and data structures course project.

## Sources
[jWiki API](https://github.com/fastily/jwiki) - A library for effortlessly interacting with Wikipedia

[Gson library](https://github.com/google/gson) - A Java library to convert Java Objects into JSON and back

## Features
<h4> Requests </h4>
We created a WikiMediator ADT that implements 6 simple methods that communicate with Wikipedia through the jWiki API. 
<h4> Cache </h4>
We implemented a general cache that could be used to store the most recently accessed 256 Wikipedia pages and recycle stale objects. 
<h4> Server network </h4>
Implemented a server-based application that receives requests over a network socket and returns results appropriately. Server communicates (receives/ answers) using JSON formatted strings. 
<h4> Parallel programming</h4>
Implemented threading in our servers to allow processing of more than one request at a time.  

## Lessons
This was a flexible and open-ended project with no starter code and few directions, which allowed for a deeper learning and broad exploration. I gained experience in collaborative coding through IntelliJ and GitHub as this was a partnered project and learnt fundamental concepts revolving threading and server networks. 
