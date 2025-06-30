import React, { useState } from 'react';
import { render, Text, Box, useInput, useApp } from 'ink';
import { handleCommand } from './commands';

const App = () => {
	const [input, setInput] = useState('');
	const [history, setHistory] = useState<string[]>([]);
	const { exit } = useApp();

	useInput((char, key) => {
		if (key.return) {
			if (input === '/exit') exit();
			else handleCommand(input, setHistory);
			setInput('');
		} else if (key.backspace) {
			setInput(prev => prev.slice(0, -1));
		} else {
			setInput(prev => prev + char);
		}
	});

	return (
		<Box flexDirection="column">
			{history.map((line, i) => (
				<Text key={i}>{line}</Text>
			))}
			<Text> {input}</Text>
		</Box>
	);
};

render(<App />);
