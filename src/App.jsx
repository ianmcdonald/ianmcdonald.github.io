import React, { Component } from 'react';
import image from './ian.jpg';
import Links from './Link';

// Header
function Header(props) {
  return (
    <header>
      <h1>{props.name}</h1>
      <p>1986&mdash;<br />Developer/designer</p>
    </header>
  );
}
Header.defaultProps = {
  name: 'Ian Mcdonald'
};

// Image
function Image(props) {
  return <img src={image} alt="✔︎" />;
}

// App
export default class App extends Component {
  render() {
    return (
      <div>
        <Header name={this.props.name} />
        <main className="home">
          <Image src={this.props.src} name={this.props.name} />
          <Links />
        </main>
      </div>
    );
  }
}
