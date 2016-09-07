import React, { Component } from 'react';
import image from './ian.jpg';

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

// Link
function Link(props) {
  return <li><a href={props.url}>{props.text}</a></li>;
}
Link.propTypes = {
  url: React.PropTypes.string.isRequired,
  text: React.PropTypes.string.isRequired
};

// Links
class Links extends Component {
  render() {
    const Items = this.props.items.map(item => {
      return (
        <Link
        url={item.url}
        text={item.text}
        key={item.id}
        />
      );
    });
    return (
      <ul>{Items}</ul>
    );
  }
}

// App
export default class App extends Component {
  render() {
    return (
      <main>
        <Header name={this.props.name} />
        <Image src={this.props.src} name={this.props.name} />
        <Links items={this.props.links} />
      </main>
    );
  }
}
