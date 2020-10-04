import React, { Component} from 'react';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

class TabSet extends Component {
  constructor(props) {
    super(props)

    this.state = {
      value: this.props.value,
    };

    this.handleChange = (event, value) => {
      this.props.onChange({ newVal: value, newTab: this.props.tabs[value] });
      this.setState({ value });
    }
  }

  componentDidUpdate(prevProps) {
    const pathStem = window.location.pathname
      .replace(/^\//, '')
      .split('/')[0];

    if(prevProps.value !== pathStem) {
      this.setState({ value: pathStem });
    }
  }

  render() {
    const { tabs } = this.props

    return (
      <div>
        <AppBar position="static">
          <Tabs value={this.state.value} onChange={this.handleChange}>
            {tabs.filter(item => {
              return item.list;
            }).map(({ label, slug }) => (
              <Tab key={slug} value={slug} label={label} />
            ))}
          </Tabs>
        </AppBar>

        {tabs.map(tab => <tab.content key={tab.slug} />)}
      </div>
    )
  }
}

export default TabSet
