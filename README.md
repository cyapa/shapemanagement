# README.md Shapes managemnet web application

Final version of the README.md -
 files:

  * LICENSE.md                                      License & Copyright information
  * README.md                                       Final version of the README
  * INSTRUCTIONS.md                                 Instructions of the web application
## Developers information

Members:

* Chathura Yapa kymcwyapa@gmail.com

## Product requirements

* Users should be able to select shapes
* Users should be able to add shapes
* Users should be able to delete boxes (selected box or last box)
* Users should be able to change box color from color library(selected box or upcoming boxes)
* Users should be able to see number of boxes shown with current box color

## Technological considerations

* React was used for the development.
* Did not use React components as the developer wanted to try the development based on hooks.
* As the developer wanted to try out a type validation, PropTypes were used.

## UX considerations

* Use of intuitive user interface elements
* Use of eye friendly colors
* Minimalistic user interface

## External libraries used

* Material-UI: To create, tabs and other elements

## Development progression

|Order|Feature/Design|Completion date|
|:----|-------|-------------------------|
|1|Basic structure and development|13.03.2020
|2|Tesing and bug fixes|14.03.2020
|3|Visual improvements|14.03.2020
|4|Documentation|15.03.2020

## To-do list

This list contain the existing defects and the new suggested features to be developed

|Priority|To-do|Feature/BugFix|Status
|:----|-------|-------|------|
|1|~~Fix a scenario where some boxes are not getting deleted when user try a box selected deletion & normal delete~~| BugFix| FIXED
|2|In screen 2, the colors are getting selected randomly. There is a small chance that the same color get selected. If this happens user will not notice the color change| Feature
|3|In screen 3, the summary text is using base styling. This can be visually improved| Feature
|4|The web application utilizes a small portion of the browser screen. Either enlarge the user interface areas or get user feedback on how to proceed| Feature


## Pages and navigation

This is a single page web application. Hence user interactions are divided into Tabs

* Tab 1: Display boxes, Add/delete boxes, Select/deselect boxes
* Tab 2: Display/Change current box color
* Tab 3: Display number of boxes shown in Tab 1 and the current color

## Testing

Manual functionality testing was conducted by the developer in Chrome browser (Version 80.0.3987.132 (Official Build) (64-bit)).

## How to run

This is a single page React web application. 
Navigate to the project folder and use ___npm start___
