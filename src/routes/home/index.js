/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import Home from './Home';
import Layout from '../../components/Layout';

async function action({ fetch }) {
  await fetch('/graphql', {
    body: JSON.stringify({
      query: '{news{title,link,content}}',
    }),
  });
  // const { data } = await resp.json();
  const data = [
    {
      id: 1,
      first_name: 'Maryjo',
      last_name: 'Kenway',
      email: 'mkenway0@freewebs.com',
      gender: 'Female',
      ip_address: '39.143.171.24',
    },
    {
      id: 2,
      first_name: 'Nikolas',
      last_name: 'Jillis',
      email: 'njillis1@hhs.gov',
      gender: 'Male',
      ip_address: '242.46.76.161',
    },
    {
      id: 3,
      first_name: 'Frazier',
      last_name: 'Ancliffe',
      email: 'fancliffe2@alexa.com',
      gender: 'Male',
      ip_address: '78.30.152.51',
    },
    {
      id: 4,
      first_name: 'Steffi',
      last_name: 'McFeat',
      email: 'smcfeat3@flickr.com',
      gender: 'Female',
      ip_address: '123.69.144.135',
    },
    {
      id: 5,
      first_name: 'Erena',
      last_name: 'Darnborough',
      email: 'edarnborough4@samsung.com',
      gender: 'Female',
      ip_address: '7.23.233.123',
    },
    {
      id: 6,
      first_name: 'Law',
      last_name: 'Lidington',
      email: 'llidington5@patch.com',
      gender: 'Male',
      ip_address: '31.30.168.57',
    },
    {
      id: 7,
      first_name: 'Valaria',
      last_name: 'McVrone',
      email: 'vmcvrone6@e-recht24.de',
      gender: 'Female',
      ip_address: '75.111.145.152',
    },
    {
      id: 8,
      first_name: 'Lexi',
      last_name: 'Rolstone',
      email: 'lrolstone7@howstuffworks.com',
      gender: 'Female',
      ip_address: '22.35.127.151',
    },
    {
      id: 9,
      first_name: 'Isaiah',
      last_name: 'Thay',
      email: 'ithay8@mapquest.com',
      gender: 'Male',
      ip_address: '196.68.146.178',
    },
    {
      id: 10,
      first_name: 'Hazlett',
      last_name: 'Aupol',
      email: 'haupol9@bbb.org',
      gender: 'Male',
      ip_address: '188.237.12.25',
    },
  ];
  // if (!data || !data.news) throw new Error('Failed to load the news feed.');
  return {
    chunks: ['home'],
    title: 'React Starter Kit',
    component: (
      <Layout>
        <Home data={data} />
      </Layout>
    ),
  };
}

export default action;
