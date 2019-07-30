let dragItem = document.querySelector("#weapons");
let dragItem2 = document.querySelector("#outfits");
let dragItem3 = document.querySelector("#money");
    let container = document.querySelector(".images");

    let active = false;
    let currentX;
    let currentY;
    let initialX;
    let initialY;
    let xOffset = 0;
    let yOffset = 0;

    let currentX2;
    let currentY2;
    let initialX2;
    let initialY2;
    let xOffset2 = 0;
    let yOffset2 = 0;

    let currentX3;
    let currentY3;
    let initialX3;
    let initialY3;
    let xOffset3 = 0;
    let yOffset3 = 0;

    container.addEventListener("touchstart", dragStart, false);
    container.addEventListener("touchend", dragEnd, false);
    container.addEventListener("touchmove", drag, false);

    container.addEventListener("mousedown", dragStart, false);
    container.addEventListener("mouseup", dragEnd, false);
    container.addEventListener("mousemove", drag, false);

    container.addEventListener("touchstart", dragStart2, false);
    container.addEventListener("touchend", dragEnd2, false);
    container.addEventListener("touchmove", drag2, false);

    container.addEventListener("mousedown", dragStart2, false);
    container.addEventListener("mouseup", dragEnd2, false);
    container.addEventListener("mousemove", drag2, false);

    container.addEventListener("touchstart", dragStart3, false);
    container.addEventListener("touchend", dragEnd3, false);
    container.addEventListener("touchmove", drag3, false);

    container.addEventListener("mousedown", dragStart3, false);
    container.addEventListener("mouseup", dragEnd3, false);
    container.addEventListener("mousemove", drag3, false);

    function dragStart(e) {
      if (e.type === "touchstart") {
        initialX = e.touches[0].clientX - xOffset;
        initialY = e.touches[0].clientY - yOffset;
      } else {
        initialX = e.clientX - xOffset;
        initialY = e.clientY - yOffset;
      }

      if (e.target === dragItem) {
        active = true;
      }
    }

    function dragStart2(e2) {
        if (e2.type === "touchstart") {
          initialX2 = e2.touches[0].clientX2 - xOffset2;
          initialY2 = e2.touches[0].clientY2 - yOffset2;
        } else {
          initialX2 = e2.clientX2 - xOffset2;
          initialY2 = e2.clientY2 - yOffset2;
        }
  
        if (e2.target === dragItem2) {
          active = true;
        }
      }

      function dragStart3(e3) {
        if (e3.type === "touchstart") {
          initialX3 = e3.touches[0].clientX3 - xOffset3;
          initialY3 = e3.touches[0].clientY3 - yOffset3;
        } else {
          initialX3 = e3.clientX3 - xOffset3;
          initialY3 = e3.clientY3 - yOffset3;
        }
  
        if (e3.target === dragItem3) {
          active = true;
        }
      }

    function dragEnd(e) {
      initialX = currentX;
      initialY = currentY;

      active = false;
    }

    function dragEnd2(e2) {
        initialX2 = currentX2;
        initialY2 = currentY2;
  
        active = false;
      }

      function dragEnd3(e3) {
        initialX3 = currentX3;
        initialY3 = currentY3;
  
        active = false;
      }

    function drag(e) {
      if (active) {
      
        e.preventDefault();
      
        if (e.type === "touchmove") {
          currentX = e.touches[0].clientX - initialX;
          currentY = e.touches[0].clientY - initialY;
        } else {
          currentX = e.clientX - initialX;
          currentY = e.clientY - initialY;
        }

        xOffset = currentX;
        yOffset = currentY;

        setTranslate(currentX, currentY, dragItem);
      }
    }

    function drag2(e2) {
        if (active) {
        
          e2.preventDefault();
        
          if (e2.type === "touchmove") {
            currentX2 = e2.touches[0].clientX2 - initialX2;
            currentY2 = e2.touches[0].clientY2 - initialY2;
          } else {
            currentX2 = e2.clientX2 - initialX2;
            currentY2 = e2.clientY2 - initialY2;
          }
  
          xOffset2 = currentX2;
          yOffset2 = currentY2;
  
          setTranslate2(currentX2, currentY2, dragItem2);
        }
      }

      function drag3(e3) {
        if (active) {
        
          e3.preventDefault();
        
          if (e3.type === "touchmove") {
            currentX3 = e3.touches[0].clientX3 - initialX3;
            currentY3 = e3.touches[0].clientY3 - initialY3;
          } else {
            currentX3 = e3.clientX3 - initialX3;
            currentY3 = e3.clientY3 - initialY3;
          }
  
          xOffset3 = currentX3;
          yOffset3 = currentY3;
  
          setTranslate3(currentX3, currentY3, dragItem3);
        }
      }

    function setTranslate(xPos, yPos, el) {
      el.style.transform = "translate3d(" + xPos + "px, " + yPos + "px, 0)";
    }

    
    function setTranslate2(xPos2, yPos2, el2) {
        el2.style.transform = "translate3d(" + xPos2 + "px, " + yPos2 + "px, 0)";
      }
      
    function setTranslate3(xPos3, yPos3, el3) {
        el3.style.transform = "translate3d(" + xPos3 + "px, " + yPos3 + "px, 0)";
      }




    