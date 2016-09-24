import React, { Component } from 'react';
import Projects from './projects';
import Links from './Link';

// Header
function Header(props) {
  return (
    <header>
      <h1>Ian Mcdonald</h1>
      <p>1986&mdash;<br />Developer/designer</p>
    </header>
  );
}

function Project(props) {
  return (
    <li className="project">
      <span className="project-date">{props.date}</span>
      <span className="project-link"><a href={props.url}>{props.text}</a></span>
      <span className="project-note">{props.note !== undefined && props.note !== '' ? `${props.note}` : ''}</span>
    </li>
  );
}

class Work extends Component {
  render() {
    const Portfolio = Projects.map(item => {
      return (
        <Project
          date={item.date}
          url={item.url}
          text={item.text}
          note={item.note}
          key={item.id}          
        />
      );
    });
    return (
      <ul>{Portfolio}</ul>
    );
  }
}
  
// App
export default class Portfolio extends Component {
  render() {
    return (
      <div>
        <Header name={this.props.name} />
        <main className="portfolio">
          <h2>Selected work</h2>
          <Work />
          <Links /> 
        </main>
      </div>
    );
  }
}
