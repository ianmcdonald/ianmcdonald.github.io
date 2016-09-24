import React, { Component } from 'react';
import Urls from './links';

// Link
function Link(props) {
  return <li><a href={props.url}>{props.text}</a></li>;
}
Link.propTypes = {
  url: React.PropTypes.string.isRequired,
  text: React.PropTypes.string.isRequired
};

// Links
export default class Links extends Component {
  render() {
    const Items = Urls.map(item => {
      return (
        <Link
        url={item.url}
        text={item.text}
        key={item.id}
        />
      );
    });
    return (
      <ul className="links">{Items}</ul>
    );
  }
}

