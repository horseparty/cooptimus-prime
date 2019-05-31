import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
	return (
		<div className="headerContainer">
			<Link to='/reviews' >Reviews</Link>
		</div>
	)
}