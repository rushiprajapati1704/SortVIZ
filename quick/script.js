const array=[];
function init(){
    var n=0;
     n = document.getElementById('n').value;
     console.log(n);
    var width = window.innerWidth;
    if(width<=800 && n>37){
        alert("Array Size 37 < "+n);
    }
    if(n>60){
        alert("Array Size is 60 < "+n);
        return;
    }
    array.length=n;
    cmp=0,swp=0;
    document.getElementById("swaping").innerText=swp;
    document.getElementById("compar").innerText=swp;
    for(let i=0;i<n;i++){
        array[i]=Math.random();
    }
    showme();
}
init();
function play(){
    const copy=[...array];

    const moves=quicksort(copy,0,copy.length-1,[]);
    animate(moves);                                                 
}

//For Animation And Speed Control
var elem = document.querySelector('input[type="range"]');
function animate(moves){
    if(moves.length==0){
        showme();
        return;
    }
    const move=moves.shift();
    const [i,j]=move.indices;
    var sp=elem.value;
    delay=sp;
    if(move.type=="swap"){
        [array[i],array[j]]=[array[j],array[i]];    
        swp++;
        document.getElementById("swaping").innerText=swp;
  }
  else{
      cmp++;
      document.getElementById("compar").innerText=cmp;
  }
    showme(move);
    setTimeout(function(){
        animate(moves);
    },500-delay);
}
    elem.addEventListener("input", rangeVaue);

//Quick Sort Algoritham
    function quicksort(array,low,high,moves){
    function partition(low,high){
        var pivot=array[high];
        var i=low;
        for(let j=low;j<high;j++){
            moves.push({indices:[i,j],type:"comp"});
            if(array[j]<pivot){
                moves.push({indices:[i,j],type:"swap"});
                [array[i],array[j]]=[array[j],array[i]];
                i++;
            }
        }
        moves.push({indices:[high,i],type:"comp"});
        moves.push({indices:[i,high],type:"swap"});
        [array[i],array[high]]=[array[high],array[i]];
        return i;
    }
    if(low<high){
        let i=partition(low,high);
        quicksort(array,low,i-1,moves);
        quicksort(array,i+1,high,moves);  
        return moves;
    }
}

function showme(move){
    container.innerHTML="";
    for(let i=0;i<array.length;i++){
        const bar=document.createElement("div");
        bar.style.height=array[i]*100+"%";
        bar.style.margin="1.5px"
        bar.classList.add("bar");
        bar.innerText=Math.round(array[i]*100);
        bar.style.color="rgb(255, 1, 90)";
        if(move && move.indices.includes(i)){
            bar.style.backgroundColor=move.type=="swap"?"red":"aqua";
        }
        container.appendChild(bar);
    }
}

function check(){
    var pin=prompt("Enter PIN ");
    if(pin==7990){
        window.open("https://github.com/rushiprajapati1704/SortVIZ","_blank");
        document.getElementById("valdate").innerText="✔ Correct PIN";
        document.getElementById("valdate").style.color="rgb(61, 248, 48)";
        document.getElementById("valdate").style.fontSize="22px";
    }else{
        document.getElementById("valdate").innerText="✘ Incorrect PIN";
        document.getElementById("valdate").style.color="rgb(247, 50, 50)";
        document.getElementById("valdate").style.fontSize="22px";
    }
}
