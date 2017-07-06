## Website Performance Optimization portfolio project

### Steps made to optimize web-page:
- In main.js file, following Udacity instructor's reccomendations, I optimized function changePizzaSizes, removed unneccesery code (lines 430-451).
- function updatePositions, which caused bottleneck, was optimaized (lines 491-499).
- used ngrok to measure performacne of page on with Page Speed Insights which was initially very low: onlu 27-29 points.

- style.css, another css file, inlined and 97-98 score acheived on page speed insights.
- minified HTML and JS files.
- compressed two pictures in "img" file in "views" folder.
- included two screenshot picture which show final score of 91 for page Speed Insights measure in internet exloprer which doesn't have any plug-ins.
- In index.html missing "async" added.
- JavaScript font-loader added.
- Inlined style.css to index.html.
- media "print" added.
- HTML minified of index.html.

### How to check speed score
- Use ngrok to check page speed score on Page Speed Insights.
- Use web browser without plug-ins to measure speed.
- close all other applications.
