 
const svg = document.getElementById("drawingPad");

 
let isDrawing = false;
let points = [];
let currentLine = null;

 
svg.addEventListener("mousedown", function (event) {
    isDrawing = true;

    
    points = [];
    points.push(`${event.offsetX},${event.offsetY}`);

    
    currentLine = document.createElementNS(
        "http://www.w3.org/2000/svg",
        "polyline"
    );
 
    currentLine.setAttribute("stroke", "black");
    currentLine.setAttribute("stroke-width", "2");
    currentLine.setAttribute("fill", "none");
    currentLine.setAttribute("points", points.join(" "));

    
    svg.appendChild(currentLine);
});

 
svg.addEventListener("mousemove", function (event) {
    if (!isDrawing) return;

    points.push(`${event.offsetX},${event.offsetY}`);
    currentLine.setAttribute("points", points.join(" "));
});

 
svg.addEventListener("mouseup", function () {
    isDrawing = false;
});

 
svg.addEventListener("mouseleave", function () {
    isDrawing = false;
});
