import React, { Component } from 'react';
import { Link } from 'react-router';
import styles from './Home.module.css';

import Login from './partials/Login';


export default class Home extends Component {
  render() {
    return (
      <div>
        <div className={styles.container}>
            <Login />
        </div>
      </div>
    );
  }
}
