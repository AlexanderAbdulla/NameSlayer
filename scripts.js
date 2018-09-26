

var randomElement = function(){ 
    console.log("in random element")
    //var nameDiv = document.getElementById("nameDiv");
    var rect = document.getElementById("nameDiv").getBoundingClientRect();
    var topOffset = document.getElementById('nameDiv').offsetTop
    var rightOffset = document.getElementById('nameDiv').offsetRight 
    //topOffset = topOffset + btnHeight

    var divTop = rect.top
    var divBot = rect.bottom
    var divRight = rect.right
    var divLeft = rect.left 
    
    
    var btn = document.createElement("BUTTON");        // Create a <button> element
    var t = document.createTextNode("CLICK ME");       // Create a text node
    btn.appendChild(t);                                // Append the text to <button>

    var newTop = Math.floor(Math.random() * (divBot - topOffset - 50)) + divTop
    var newLeft = Math.floor(Math.random() * (divRight - btn.style.width)) + divLeft 
    
    btn.style.position = "absolute";
    btn.style.top = newTop;
    btn.style.left = newLeft;
    document.body.appendChild(btn); 


    
}; 
     
   
   