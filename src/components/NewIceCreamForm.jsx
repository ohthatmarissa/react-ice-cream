import React from 'react';


function NewIceCreamForm(){
  return (
    <div>
        <style jsx global>{`
            div {
                background-color: pink;
            }
        `}</style>
    <form> 
        <input 
        type="text"
        id='name'
        placeholder='Ice Cream Name'/>__
        <input 
        type="text"
        id='type'
        placeholder='Ice Cream Type'/>__
        <input
        id="price" 
        placeholder='Ice Cream Price'
        cols="30" rows="10"></input>__
        <button type='submit'>Add!</button>
    </form>
</div>
  );
}

export default NewIceCreamForm;