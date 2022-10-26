import React from 'react';

export default class Accordion extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clickId: null
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    if (event.target.parentNode.id === this.state.clickId) {
      this.setState({ clickId: null });
    } else {
      this.setState({ clickId: event.target.parentNode.id });
    }
  }

  render() {
    const languages = this.props.data;
    const languagesList = <div className='accordion'>{
      languages.map(items => {
        return (
          <div className='container' id={items.langId} key={items.langId}>
            <div onClick={this.handleClick} className='label'>{items.name}</div>
            <div className={ this.state.clickId === items.langId ? 'content' : 'hidden' }>
              {items.description}
            </div>
          </div>
        );
      }
      )}</div>;

    return languagesList;
  }
}
