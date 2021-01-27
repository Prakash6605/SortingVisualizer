window.onload=function(){
  const container=document.querySelector(".data-container");
  
  function generateBlocks(num = 20) {
      if (num && typeof num !== "number") {
        alert("First argument must be a typeof Number");
        return;
      }
      for (let i = 0; i < num; i += 1) {
        const value = Math.floor(Math.random() * 100);
        const block = document.createElement("div");
        block.classList.add("block");
        block.style.height = `${value * 3}px`;
        block.style.transform = `translateX(${i * 30}px)`;
    
        const blockLabel = document.createElement("label");
        blockLabel.classList.add("block__id");
        blockLabel.innerHTML = value;
    
        block.appendChild(blockLabel);
        container.appendChild(block);
      }
  }
  
  function swap(el1, el2) {
      
      return new Promise(resolve => {
        const style1 = window.getComputedStyle(el1);
        const style2 = window.getComputedStyle(el2);
    
        const transform1 = style1.getPropertyValue("transform");
        const transform2 = style2.getPropertyValue("transform");
    
        el1.style.transform = transform2;
        el2.style.transform = transform1;
    
        // Wait for the transition to end!
        window.requestAnimationFrame(function() {
          setTimeout(() => {
            container.insertBefore(el2, el1);
            resolve();
          }, 250);
        });
      });
    }
  async function use_swap(blocks,start,end){
      for(let i = end;i>=start;i--){
          blocks[i-1].style.backgroundColor = "#FF4949";
          blocks[i].style.backgroundColor = "#FF4949";
    
          await swap(blocks[i-1],blocks[i]);
          blocks = document.querySelectorAll(".block");
          blocks[i-1].style.backgroundColor = "#58B7FF";
          blocks[i].style.backgroundColor = "#58B7FF";
      }
      blocks=document.querySelectorAll(".block");
  
  }  
  
  async function fun1(s,e){
      blocks = document.querySelectorAll(".block");
      await use_swap(blocks,s,e);
  }
  
  // selection sort
  async function selectionSort(){  
      let blocks = document.querySelectorAll(".block");
      let len = blocks.length;
      for(let i = 0;i<len-1;i++){
          
          let min_value = Number(blocks[i].childNodes[0].innerHTML);
          let minpos = i; 
          for(let j = i+1;j<len;j++){
             let cur_value = Number(blocks[j].childNodes[0].innerHTML);
             if(cur_value < min_value){
                 minpos = j;
                 min_value = cur_value;
             }
          }
          
          await fun1(i+1,minpos);
          blocks = document.querySelectorAll(".block");
          blocks[i].style.backgroundColor = "#13CE66";
      }
      blocks[len-1].style.backgroundColor="#13CE66";
  }
  // Bubble sort
  async function bubbleSort(delay = 100) {
    if (delay && typeof delay !== "number") {
      alert("sort: First argument must be a typeof Number");
      return;
    }
    let blocks = document.querySelectorAll(".block");
    for (let i = 0; i < blocks.length - 1; i += 1) {
      for (let j = 0; j < blocks.length - i - 1; j += 1) {
        blocks[j].style.backgroundColor = "#FF4949";
        blocks[j + 1].style.backgroundColor = "#FF4949";
  
        await new Promise(resolve =>
          setTimeout(() => {
            resolve();
          }, delay)
        );
  
        const value1 = Number(blocks[j].childNodes[0].innerHTML);
        const value2 = Number(blocks[j + 1].childNodes[0].innerHTML);
  
        if (value1 > value2) {
          await swap(blocks[j], blocks[j + 1]);
          blocks = document.querySelectorAll(".block");
        }
  
        blocks[j].style.backgroundColor = "#58B7FF";
        blocks[j + 1].style.backgroundColor = "#58B7FF";
      }
  
      blocks[blocks.length - i - 1].style.backgroundColor = "#13CE66";
    }
  }
  
  // insertion sort
  
  async function insertion_sort(){
     let blocks = document.querySelectorAll(".block");
     let len = blocks.length;
  
     for(let i=1;i<len;i++){
       const cur_value = Number(blocks[i].childNodes[0].innerHTML);
       let j=i-1;
       while( j>=0 && Number(blocks[j].childNodes[0].innerHTML) >= cur_value){
         await swap(blocks[j],blocks[j+1]);
         blocks=document.querySelectorAll(".block");
         j--;
       }
     }
  }
  
  
  document.getElementById("bubble_sort").addEventListener("click",function(){
    while(container.firstChild){
      container.removeChild(container.firstChild);
    }
    generateBlocks();
    bubbleSort();
    // i have to disable the other 3 buttons here 
  })
  
  document.getElementById("selection_sort").addEventListener("click",function(){
    while(container.firstChild){
      container.removeChild(container.firstChild);
    }
    generateBlocks();
    selectionSort();
    // i have to disable the other 3 buttons here
  })
  
  document.getElementById("insertion_sort").addEventListener("click",function(){
    while(container.firstChild){
      container.removeChild(container.firstChild);
    }
    generateBlocks();
    insertion_sort();
  })
  
  generateBlocks();
  
}

