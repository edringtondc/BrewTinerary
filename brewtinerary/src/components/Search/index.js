import React from "react";


function Search(props) {
    return (

        <div className="text-center">
            <form >
        <input type="text" placeholder="Search.." name="search" onChange={props.handleInputChange}
          value={props.value}/>
        <button type="submit" onClick={props.handleSubmit}>Submit </button>
       </form>
      </div>

        

      
    );
  }

  export default Search