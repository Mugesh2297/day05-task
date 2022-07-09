
//Anonymous Function odd number in an array 

let odd = function(arr){
    let resultArry = [];
    for (let ele of arr)
    {
        if(ele % 2 !==0)
        {
         resultArry.push(ele);

        }
    }
    return resultArry;
    
}
console.log(odd([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]));

//IIFE Function odd number in an array 
(function(){
    let a =[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
    let odd2 =[];
    for(let i=0;i<a.length;i++){
        if(a[i]%2==1){
            odd2.push(a[i]);
        }
        else{
            continue;
        } 
}
console.log(odd2);
})();

//Arrow Functions Odd Number in an array 

let odd1 = (arr) => {
    let resultArry = [];
    for (let ele of arr)
    {
        if(ele % 2 !==0)
        {
         resultArry.push(ele);

        }
    }
    return resultArry;

}
console.log(odd1([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]));

//Anonymous Function string to title caps 

let string = [];
let input = function(str){
 for(let i=0;i<str.length;i++){
 str[i] =str[i].split(",").map(([firstChar,...rest])=>firstChar.toUpperCase()+rest.join("").toLowerCase()).join(",");
    
    string.push(str[i]);
 }
};
input(["mugesh","kumar"]);
console.log(string);
//IIFE Function Function string to title caps 
(function(){
    let str =["mugesh","kumar"];
    let input =[];
 for(let i=0;i<str.length;i++){
 str[i] =str[i].split(",").map(([firstChar,...rest])=>firstChar.toUpperCase()+rest.join("").toLowerCase()).join(",");
    
    input.push(str[i]);
 }
 console.log(input);
 })();
 // Anonymous Function Sum of all numbers in an array
 let b="";
let input1 = function(a){
     b =a.reduce((acc,cur)=>{
        return acc+cur;  
    });
    
    console.log(b);
};
input1([1,2,3,4,5]); 
//IIFE Function Function Sum of all numbers in an array
(function(){     
    let a =[1,2,3,4,5,6,7];    
    b =a.reduce((acc,cur)=>{
    return acc+cur;
    });
console.log(b);
})();

// Anonymous Function Return all the prime numbers in an array
let res=[];
let input2= function(a){
    
    for(let x of a){
        let repeat=0;
            for(let i=2;i<=x/2;i++){
                
            if(x%i==0){
                repeat=1;
                break;
            }
            }
            if(repeat==0){
                res.push(x)
            }
        }
        console.log(res);  
};
input2([2,3,13,15,17,19,20,25,22]);

//IIFE Function Function Return all the prime numbers in an array

(function(){
    let a=[2,3,13,15,17,19,20,25,22];
    let res =[];
    for(let x of a){
        let repeat=0;
            for(let i=2;i<=x/2;i++){
                
            if(x%i==0){
                repeat=1;
                break;
            }
            }
            if(repeat==0){
                res.push(x)
            }
        }
        console.log(res);  

})();

//Anonymous Function Return all the palindromes in an array

let listPalindrome = ["refer", "bike", "madam", "eye", "car"];
let checkPalindrome = (function(listPalindrome){
    let isPalindrome = [];
    listPalindrome.forEach(function (string){
        let inputWord = string;
        let reverseWord = string.split("").reverse().join("");
        if(inputWord === reverseWord){
            isPalindrome.push(inputWord);
        }
    })
    return isPalindrome;
    
})(listPalindrome);
console.log(checkPalindrome)

//IIFE Function  Return all the palindromes in an array
(function(){
    
    let listPalindrome = ["refer", "bike", "madam", "eye", "car"];
    let isPalindrome = [];
    listPalindrome.forEach(function (string){
       
        let inputWord = string;
        let reverseWord = string.split("").reverse().join("");
        if(inputWord === reverseWord){
            isPalindrome.push(inputWord)
        }
        return isPalindrome;
    })
    
   
    console.log(isPalindrome);
})();

//Anonymous Function Return median of two sorted arrays of the same size 
let check = function(ar1,ar2){
    var n1 = ar1.length;
    var n2 = ar2.length;
    var n=n1;
        var i = 0; 
        var j = 0; 
        var count;
        var m1 = -1, m2 = -1;
        for (count = 0; count <= n; count++)
        {       
            if (i == n)
            {
                m1 = m2;
                m2 = ar2[0];
                break;
            }
            else if (j == n)
            {
                m1 = m2;
                m2 = ar1[0];
                break;
            }
       
            if (ar1[i] <= ar2[j])
            {
                m1 = m2; 
                m2 = ar1[i];
                i++;
            }
            else
            {
                m1 = m2; 
                m2 = ar2[j];
                j++;
            }
        }
    
    
        console.log((m1 + m2)/2);
    };
    check([10, 20, 30, 40, 50],[60, 70, 80, 90, 100]);

    //IIFE Function Return median of two sorted arrays of the same size 
    (function(){
        var ar1 = [10, 20, 30, 40, 50];
        var ar2 = [60, 70, 80, 90, 100];
        var n1 = ar1.length;
        var n2 = ar2.length;
        var n=n1;
            var i = 0; 
            var j = 0; 
            var count;
            var m1 = -1, m2 = -1;
            for (count = 0; count <= n; count++)
            {       
                if (i == n)
                {
                    m1 = m2;
                    m2 = ar2[0];
                    break;
                }
                else if (j == n)
                {
                    m1 = m2;
                    m2 = ar1[0];
                    break;
                }
           
                if (ar1[i] <= ar2[j])
                {
                    m1 = m2; 
                    m2 = ar1[i];
                    i++;
                }
                else
                {
                    m1 = m2; 
                    m2 = ar2[j];
                    j++;
                }
            }
        
        
            console.log((m1 + m2)/2);
        })();

//Anonymous Function Remove duplicates from an array using
let number= function(a){   
    var res=[];
    for(let i=0;i<a.length;i++){
        var repeat=0;
        for(let j=0;j<a.length;j++){
            if(a[i]==res[j]){
                repeat=1;
            }
        }
        if(repeat==0){
            res.push(a[i])
        }
    }
    console.log(res);
    };
    number([10,20,30,10,40,20,50,20,10,80,90,50,80]);
    
//IIFE Function Remove duplicates from an array using
(function(){
    var a=[10,20,30,10,40,20,50,20,10,80,90,50,80];
    var res=[];
    for(let i=0;i<a.length;i++){
        var repeat=0;
        for(let j=0;j<a.length;j++){
            if(a[i]==res[j]){
                repeat=1;
            }
        }
        if(repeat==0){
            res.push(a[i])
        }
    }
    console.log(res)
    })();
//Anonymous Function Rotate an array by k times using
let check1=function(arr,k){
    let res=[];
    let n=arr.length;
        k=k%n;
    for(i=0;i<arr.length;i++){
       if(i<k){
         res[i]=arr[n-k+i];
          }
       else{
           res[i]=arr[i-k];
          }
      }
     console.log(res);
    };
    check1 ([22,23,34,45,62],4);
    //IIFE Function Rotate an array by k times using
    (function(){
        let arr=[22,23,34,45,62];
        let k=4;
        let res=[];
        let n=arr.length;
            k=k%n;
        for(i=0;i<arr.length;i++){
           if(i<k){
               res[i]=arr[n-k+i]
                  }
             else{
               res[i]=arr[i-k]
                 }
            }
        console.log(res)
        })();

//Arrow function Print odd numbers in an array 
let a = [1,2,3,4,5];
let num = (() => {
let oddarr =[];
    for(let i=0;i<a.length;i++){
        if(a[i]%2==1){
            oddarr.push(a[i]);
        }
        else{
            continue;
        } 
}
return oddarr;
});
console.log(num(a));
//Arrow function Convert all the strings to title caps in a string array
let str =["dinesh","kumar"];
let checked = (() => {
let oddarr =[];
      for(let i=0;i<str.length;i++){
str[i] =str[i].split(",").map(([firstChar,...rest])=>firstChar.toUpperCase()+rest.join("").toLowerCase()).join(",");
    
    oddarr.push(str[i]);
 }
 return oddarr;
});
console.log(checked());

//Arrow function Sum of all numbers in an array 
let m=[1,2,3,4,5];
let sum = (()=>{
let b="";
     b =m.reduce((acc,cur)=>{
        return acc+cur;  
    });
    
    return b;
});
console.log(sum());
//Arrow function Return all the prime numbers in an array
let d=[2,3,13,22,12,44,97];
let prime = (()=>{
let res=[];
    for(let x of d){
        let repeat=0;
            for(let i=2;i<=x/2;i++){
                
            if(x%i==0){
                repeat=1;
                break;
            }
            }
            if(repeat==0){
                res.push(x)
            }
        }
        return res;  
});
console.log(prime());
//Arrow function Return all the palindromes in an array
let liPalindrome = ["refer", "bike", "madam", "eye", "car"];
let chckPalindrome = (()=>{
    let isPalindrome = [];
    liPalindrome.forEach(function (params){
        let inputWord = params;
        let reverseWord = params.split("").reverse().join("");
        if(inputWord === reverseWord){
            isPalindrome.push(inputWord);
        }
    })
    return isPalindrome;
    
});
console.log(chckPalindrome());
