const characters =["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];
let One=document.getElementById("one")
let Two=document.getElementById("two")
let length= 12

    



  
  
function run(){
      password=" "
      password2=" "
  for(let i=0;i<12;i++){

 password+=characters[Math.floor(Math.random()*characters.length)]
         }
for(let i=0;i<12;i++){
    
       
   password2+=characters[randomchar=Math.floor(Math.random()*characters.length)]
}
Two.textContent=password2
One.textContent=password
 

}

