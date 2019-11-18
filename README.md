# UI-bar-graph exercise

## Instructions

- Using any UI framework (or none) create a bar graph using the data.json file provided using javascript and css
- Do not use any third party graph libraries, the graph should be your own
- After you complete the exercise, provide notes below on how your code can be ran whether it be by simply opening a index.html file or through an npm command

## Candidate Notes:
- Used Angular Framework for Design of Bar Chart
- Used only Vanilla Javascript in component
- GraphComponent responsible for bar chart creation
- GraphService responsible for fetching data for bar chart
- CommonService  responsible for performing common task related to bar chart rendering
- Also have one component Palindrome Search which will redirect to GitHUb link for the problem solution

## Added some additional featrures
- Legend using basic CSS
- We can enhance bar chart with more features example:
 - We can map key name with every data value
 - We can have some meaningfull X and Y axis insights
 - More data can be integrated anytime with this design

## Runing the application
- Install node on machine
- Go to the project bargraph
- Run: npm install
- Run: ng serve --port 3333
- launch application : http://localhost:3333