import React from 'react';


function NewTicketForm(){
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
        id='names'
        placeholder='Pair Names'/>__
        <input 
        type="text"
        id='location'
        placeholder='Location'/>__
        <input
        id="issue" 
        placeholder='Describe your issue'
        cols="30" rows="10"></input>__
        <button type='submit'>Help!</button>
    </form>
</div>
  );
}

export default NewTicketForm;