let storage =[];//public array
function getUrl(){
   
    let storeurl= document.getElementById("url").value;

    
    storage.push(storeurl); // store each value entered to the declared public array
  document.getElementById("url").value="";// clear the input field
}


 
function retrieveUrl(){
    const list =document.getElementById("data")//get the id of the table body to store the values from
    var div ="";// create a new html div
    var html =""; 

    for(let i =storage.length -1; i >=0 ;i--){// display from the most recent to the oldest (descending)

            div=`
            <tr>
                    <td>${storage[i]}</td>
                </tr>
            
            `//storing each url into a row of a table
            html += div;
            list.innerHTML =html;
        
       


        console.log(storage[i]);
        }
           
}
