import { askGemini } from './ai';

export async function handleCommand(
	cmd: string,
	setHistory: (cb: (prev: string[]) => string[]) => void
) {
	setHistory(prev => [...prev, `> ${cmd}`]);

	if (cmd === '/new') {
		setHistory(prev => [...prev, 'New session started']);
	} else {
		const response = await askGemini(cmd);
		setHistory(prev => [...prev, `${response}`]);
	}
}
