import React from 'react';

function Letter({ letter, status }) {
	return <button className={`letter ${status ? status : ''}`}>{letter}</button>;
}

export default Letter;
