import React, { Component } from 'react';

class Item extends Component {
  constructor(props) {
    super(props);

    this.handleInputChange = this.handleInputChange.bind(this);

    this.state = {
      item: {},
    };
  }

  componentWillMount() {
    this.setState({
      item: this.props.item,
    });
  }

  handleInputChange(event) {
    const text = event.target.value;

    if (text === '') {
      this.props.removeItem(this.state.index);
    }

    if (this.props.isLast && text !== '') {
      this.props.addItem();
    }

    this.setState({
      item: { text },
    });
  }

  render() {
    const { item } = this.state;
    const { index } = this.props;
    return (
      <div className="section-item">
        <span>{index + 1}. </span>
        <input
          value={item.text}
          onChange={this.handleInputChange}
        />
      </div>
    );
  }
}

export default Item;
