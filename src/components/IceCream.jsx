import React from 'react';
import PropTypes from 'prop-types';

function IceCream(props){

  return (
    <div>
      <style jsx global>{`
            div.iceCreamonly {
                background-color: pink;
            }
        `}</style>
      <div className="iceCreamonly">
        <h3>{props.name}</h3>
        <h3>{props.type}</h3>
        <p><em>{props.price}</em></p>
        <br></br>
        <hr/>
      </div>
    </div>
  );
}

IceCream.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired
};

export default IceCream;