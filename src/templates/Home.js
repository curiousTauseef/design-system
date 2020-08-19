import React from 'react';

import Layout from '../components/Layout';

const Home = ({ header, nav, main, aside }) => (
	<Layout hasScreenHeight header={header} nav={nav} main={main} aside={aside} />
);

export default Home;
