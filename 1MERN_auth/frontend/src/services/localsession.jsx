
const settoken=(token)=>{
    localStorage.setItem("token",token );
}


// Get token
const gettoken=(token)=>{
    let tokenn=localStorage.getItem(token);
    return tokenn

}

// delete token

const removetoken=()=>{
    
    localStorage.removeItem("token");
 

}



export {settoken,gettoken,removetoken}
// Set a value
// sessionStorage.setItem("lastname", "Smith");

// Retrieve the value
// let lastname = sessionStorage.getItem("lastname");

// // Remove an item
// sessionStorage.removeItem("lastname");

// // Clear all data
// sessionStorage.clear();
