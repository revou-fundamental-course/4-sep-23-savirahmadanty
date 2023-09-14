document.getElementById("selectSquare").addEventListener("click", function() {
  document.getElementById("square").scrollIntoView();
})
document.getElementById("selectRectangle").addEventListener("click", function() {
  document.getElementById("rectangle").scrollIntoView();
})

function calculateSquareArea() {
  const lengthSquareArea = document.getElementById("lengthSquareArea").value;
  const squareArea = lengthSquareArea * lengthSquareArea;
  if(lengthSquareArea >= 1){
    document.getElementById("squareAreaResult").innerHTML = "The square area is " + squareArea + " cm²";
    squareAreaResult.style.color = 'black';
  } else{
    document.getElementById("squareAreaResult").innerHTML = "Please input a value that is no less than 1";
    squareAreaResult.style.color = 'red';
}}

function calculateSquarePerimeter() {
  const lengthSquarePerimeter = document.getElementById("lengthSquarePerimeter").value;
  const squarePerimeter = 4 * lengthSquarePerimeter;
  if(lengthSquarePerimeter >= 1){
    document.getElementById("squarePerimeterResult").innerHTML = "The square perimeter is " + squarePerimeter + " cm";
    squarePerimeterResult.style.color = 'black';
  } else{
    document.getElementById("squarePerimeterResult").innerHTML = "Please input a value that is no less than 1";
    squarePerimeterResult.style.color = 'red';
}}

function calculateRectangleArea() {
  const lengthRectangleArea = document.getElementById("lengthRectangleArea").value;
  const widthRectangleArea = document.getElementById("widthRectangleArea").value;
  const rectangleArea = (lengthRectangleArea * widthRectangleArea);
  if(lengthRectangleArea < 1 | widthRectangleArea < 1) {
    document.getElementById("rectangleAreaResult").innerHTML = "Please input a value that is no less than 1";
    rectangleAreaResult.style.color = 'red';
  } else {
   document.getElementById("rectangleAreaResult").innerHTML = "The rectangle area is " + rectangleArea + " cm²";
   rectangleAreaResult.style.color = 'black';
  }}
  
function calculateRectanglePerimeter() {
  const lengthRectanglePerimeter = document.getElementById("lengthRectanglePerimeter").value;
  const widthRectanglePerimeter = document.getElementById("widthRectanglePerimeter").value;
  const rectanglePerimeter = ((2 * lengthRectanglePerimeter) + (2 * widthRectanglePerimeter));
  if(lengthRectanglePerimeter < 1 | widthRectanglePerimeter < 1) {
    document.getElementById("rectanglePerimeterResult").innerHTML = "Please input a value that is no less than 1";
    rectanglePerimeterResult.style.color = 'red';
  } else {
    document.getElementById("rectanglePerimeterResult").innerHTML = "The rectangle perimeter is " + rectanglePerimeter + " cm";
    rectanglePerimeterResult.style.color = 'black';
  }}

document.getElementById("reset").addEventListener("click", () => {
  document.getElementById("lengthSquareArea").value = "";
  document.getElementById("lengthSquarePerimeter").value = "";
  document.getElementById("lengthRectangleArea").value = "";
  document.getElementById("widthRectangleArea").value = "";
  document.getElementById("lengthRectanglePerimeter").value = "";
  document.getElementById("widthRectanglePerimeter").value = "";
});