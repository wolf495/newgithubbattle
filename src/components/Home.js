var React = require('react');
var Link = require('react-router-dom').Link;

class Home extends React.Component {
  render() {
    return (
      <div className='home-container'>
        <h1>Github Battle: Battle your friends... if you have any.</h1>
        <Link className='button' to='/battle'>Battle</Link>
        <img src="https://tse2.mm.bing.net/th?id=OIP.CvfHMDsWidZNWbJJzKM3WAEsEQ&pid=Api" alt="doge"></img>
      </div>
    )
  }
}

module.exports = Home; 