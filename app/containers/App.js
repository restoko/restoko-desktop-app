import React, { Component, PropTypes } from 'react';
import SidebarMenu from '../components/partials/SidebarMenu';

export default class App extends Component {
  static propTypes = {
    children: PropTypes.element.isRequired
  };

  render() {
    return (
      <div>
        <SidebarMenu>{this.props.children}</SidebarMenu>

        {
          (() => {
              if (process.env.NODE_ENV !== 'production') {
                  const DevTools = require('./DevTools');
                  return <DevTools />;
              }
          })()
        }
      </div>
    );
  }
}
