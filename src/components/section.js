import React, { Component } from 'react';

import Item from './item';

class Section extends Component {
  constructor(props) {
    super(props);

    this.renderItems = this.renderItems.bind(this);
    this.addItem = this.addItem.bind(this);

    this.state = {
      items: [],
    };
  }

  componentWillMount() {
    const items = this.state.items;
    items.push({ text: '', id: Math.random() });

    this.setState({ items });
  }

  removeItem(index) {
    const items = this.state.items;
    items.splice(index, 1);

    this.setState({ items });
  }

  addItem() {
    const { items } = this.state;
    items.push({ text: '', id: Math.random() });
    this.setState({ items });
  }

  renderItems() {
    return this.state.items.map(
      (item, index) => {
        const key = `key_${item.id}`;
        return (
          <Item
            item={item}
            index={index}
            key={key}
            removeItem={() => this.removeItem(index)}
            addItem={this.addItem}
            isLast={index + 1 === this.state.items.length}
          />
        );
      },
    );
  }

  render() {
    return (
      <div id="pros" className="section">
        <div className="section-header">{this.props.header}</div>
        <div className="section-content">
          {this.renderItems()}
        </div>
      </div>
    );
  }
}

export default Section;
