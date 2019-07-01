import React from 'react';
import Ticket from './Ticket';

var masterTicketList = [
  {
    names: 'Sweetie and Booger',
    location: '3b',
    issue: 'This shit is cray'
  },
  {
    names: 'Bob and Slob',
    location: '6c',
    issue: 'Image won\'t show'
  },
  {
    names: 'Bonnie and Clyde',
    location: '1a',
    issue: 'These lessons are bologne'
  }
  
];


function TicketList() {
  return (
    <div>
      <hr/>
      {masterTicketList.map((ticket, index) => 
        <Ticket names={ticket.names}
          location={ticket.location}
          issue={ticket.issue}
          key={index}/>
      )}
    </div>
  );
}
export default TicketList;
