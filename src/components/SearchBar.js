import React, { useState } from 'react';
import reactLogo from '../style/icons/reactLogo-white.svg';
import ToggleTheme from './ToggleTheme';

const SearchBar = ({ onFormSubmit }) => {
	const [term, setTerm] = useState('');

	const onSubmit = event => {
		event.preventDefault();

		onFormSubmit(term);
	};

	const updateTerm = e => {
		window?.localStorage.setItem('prevSearch', e?.target?.value);
		setTerm(e?.target?.value)
	};

	return (
		<div className="search-bar">
			<div className="logo-container">
				<img src={reactLogo} className="logo" alt="react logo"/>
				<h1>React uTubi</h1>
			</div>
			<form onSubmit={onSubmit} className="form">
				<div className="field">
					<label>Video Search</label>
					<input
						type="text"
						value={term}
						onChange={e => updateTerm(e)}
					/>
				</div>
			</form>
			<ToggleTheme />
		</div>
	);
}

export default SearchBar;
