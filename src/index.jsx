import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { AppContainer } from 'react-hot-loader';

const render = (Component) => {
  ReactDOM.render(
    <AppContainer>
      <Component/>
    </AppContainer>,
    document.getElementById('react-app-root')
  );
};

render(App);
/*eslint-disable */
if(module.hot) {
  module.hot.accept('./components/App', () => {
    render(App);
  });
}
/*eslint-enable */


// function liveTime() {
//     var heading = React.createElement('h1',  {}, 'Help Queue!');
//     var ticketLocation = React.createElement('h3', {}, '3b');
//     var ticketNames = React.createElement('h3', {}, 'Sweetie and Booger');
//     var ticketIssue = React.createElement('h3', {}, "This shit is cray")
//     var app = React.createElement('div', {}, heading, ticketLocation, ticketNames, ticketIssue);

// ReactDOM.render(
//     app,
//     document.getElementById('react-app-root')
//     );
// }

// setInterval(liveTime, 1000);