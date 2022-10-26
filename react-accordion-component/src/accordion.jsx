import React from 'react';

export default class Accordion extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clickId: '000',
      shown: false
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    this.setState({ shown: !this.state.shown });
    this.setState({ clickId: event.target.parentNode.id });
  }

  render() {
    const languages = [
      { langId: '001', name: 'HML', description: 'Words about HML' },
      { langId: '002', name: 'CSS', description: 'Words about CSS' },
      { langId: '003', name: 'JS', description: 'Words about JS' }
    ];
    const languagesList = <div className='accordion'>{
      languages.map(items => {
        return (
          <div className='container' id={items.langId} key={items.langId}>
            <div onClick={this.handleClick} className='label'>{items.name}</div>
            <div className={ this.state.clickId === items.langId && this.state.shown ? 'content' : 'hidden' }>
              {items.description}
            </div>
          </div>
        );
      }
      )}</div>;

    return languagesList;
  }
}
