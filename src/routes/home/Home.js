/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Home.css';

class Home extends React.Component {
  static propTypes = {
    data: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        first_name: PropTypes.string.isRequired,
        last_name: PropTypes.string.isRequired,
        email: PropTypes.string.isRequired,
        gender: PropTypes.string.isRequired,
        ip_address: PropTypes.string.isRequired,
      }),
    ).isRequired,
  };

  constructor(props) {
    super(props);

    this.search = this.search.bind(this);
    this.state = {
      searchValue: '',
    };
  }

  search(event) {
    this.setState({ searchValue: event.target.value.toLowerCase() });
  }

  render() {
    return (
      <div className={s.root}>
        <div className={s.container}>
          <h1>React.js Test to join Upstack</h1>
          <input
            type="text"
            placeholder="Search by First Name..."
            onChange={this.search}
          />
          <table>
            <thead>
              <tr>
                <th>First Name</th>
                <th>Email</th>
              </tr>
            </thead>
            <tbody>
              {this.props.data
                .filter(
                  item =>
                    item.first_name
                      .toLowerCase()
                      .indexOf(this.state.searchValue) > -1,
                )
                .map(item => (
                  <tr key={item.id}>
                    <td>{item.first_name}</td>
                    <td>{item.email}</td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default withStyles(s)(Home);
