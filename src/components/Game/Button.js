import React from 'react';

function Button({ text, handleOnClick, className }) {
	return (
		<button className={className} onClick={handleOnClick}>
			{text}
		</button>
	);
}

export default Button;
