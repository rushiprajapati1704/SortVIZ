const array=[];
function init(){
    var n=0;
     n = document.getElementById('n').value;
     console.log(n);
    var width = window.innerWidth;
    if(n>60){
        alert("Array Size is 60 < "+n);
        return;
    }
    if(width>=800 && width<=1024){
        alert("tab");
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

    const moves=mergesort(copy,0,copy.length-1,[]);
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

//Merge Sort Algoritham
    function mergesort(array,low,high,moves){

    

    function merge(array,low,mid,high){
        let left =[],right=[];
        let i=0,j=0,k=low;
        for(i=low;i<mid+1;i++)
            left.push(array[i]);
        for(i=mid+1;i<=high;i++)
            right.push(array[i]);
        i=j=0;     
        while(i<left.length && j<right.length){
           moves.push({indices:[k+i,k+j], type:"comp"});
           if(left[i] < right[j]){
                array[k]=array[i+l];
                moves.push({indices:[k,i+l],type:"swap"});
                i++;
           }else{
                array[k] = array[high-right.length+j];
                // [array[k],array[high-right.length+j]]=[array[high-right.length+j],array[k]];
                moves.push({indices:[k,high-right.length+j],type:"swap"});
                j++;
           }
           moves.push([...array]);
           k++;
        }
        while (i<left.length) {
            array[k]=array[i+l];
            moves.push({indices:[k,i+l],type:"swap"});
            i++;
            k++;
        }
        while (j<right.length) {
            array[k] = array[high-right.length+j];  
                moves.push({indices:[k,high-right.length+j],type:"swap"});
            j++;
            k++;
        }
        return;
    }
     if (low<high){
        var mid=Math.floor(low+(high-low)/2);
        mergesort(array,low,mid,moves);
        mergesort(array,mid+1,high,moves);
        merge(array,low,mid,high);
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