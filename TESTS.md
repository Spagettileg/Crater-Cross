# Crater-Cross | Test Analysis & Report 

Access main [READEME](https://github.com/Spagettileg/Crater-Cross/blob/master/README.md) file

View [Crater-Cross](https://spagettileg.github.io/Crater-Cross/) as a deployed project in GitHub Pages

## Table of Contents
1. [Introduction](#introduction) 
2. [Systems Based Testing](#systems-based-testing)
    * [Jasmine](#jasmine)
3. [Manual Testing](#manual-testing)
4. [Code Validation](#code-validation)
    * [Responsiveness and Rendering](#responsiveness-and-rendering)
    * [Browser Compatability](#browser-compatability)
    * [Known Bugs](#known-bugs)

## Introduction

A combination of automated and manual testing processes was applied to this project
to ensure the UXD was upheld by making sure the data was correctly loaded, graphical
charts would be successfully rendered and data filters would accurately enable the user
to navigate through student and gender data attributes.  

The software has been thoroughly tested in many ways. JavaScript and its associated functions have all undergone extensive manual testing.  JS hint was used to help validate the Javascript code. 

Chrome dev tools provided one issue where all charts were not being rendered. The dc.min.css file included a default coding position of ‘float: left. To fix this bug, ‘float: none!important’ was added to style.css file. 

Furthermore, the software has been tested against all user expectations that were set out in UX section above. All possible user actions were mimicked to put the tester in the shoes of the user.  Data was compared by minimizing certain sections, filter the specific data and reset all the filters. The whole data manipulation experience was intuitive and enables both the tester and user to efficiently analyse the data and draw meaningful conclusions. 

## Systems Based Testing
### Jasmine

## Manual Testing

Testing for this project was completed on Chrome, Edge, Firefox, Safari & Opera browsers.
Responsiveness and correct displaying of all elements has been tested on a number of device and resolutions.
All display without issue.

Device Category  |  Description
-----------------|--------------
Mobile           | iPhone6/7/8
Mobile           | iPhone X
Mobile           | Galaxy S5
Mobile           | Microsoft Lumia 550
Tablet           | iPad
Desktop          | >1200px
Desktop          | >1440px

### Manual Test Observations

## Code Validation

•	HTML Validator (https://validator.w3.org/) used and shows the html document to be valid. Slight issue on hr tag being used in footer, but no detrimental effect upon web page performance

•	CSS Validator (https://jigsaw.w3.org/css-validator/) used and shows the stylesheet to be valid CSS level 3 + SVG

### Responsiveness and Rendering
Chrome DevTools together with a selection of mobile, table and desktop devices were relied upon through the entire software development cycle. A key objective was to test both the rendering and responsiveness of the software application against multiple screen resolutions and web browser platforms. Any bugs identified were debugged in real time. 

The Crater-Cross application has been tested by students from the Slack community, together with friends and family members. Feedback on what worked well and what did not was recorded and suitable corrections to the code were keyed.

In the final analysis, this application can be passed as fully responsive across all devices that participated in testing.

### Browser Compatibility
The following browsers were used in testing the Re-Boot application. Internet Explorer was out of scope for testing due to obsolete capability

platform | version
---------|--------
Chrome   |83.0.4103.116
Edge     |83.0.478.58
Firefox  |75.0
Safari   |12.4.6
Opera    |68.0.3618.173

### Known Bugs
