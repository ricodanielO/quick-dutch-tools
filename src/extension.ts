import * as vscode from 'vscode';

interface DutchSnippet {
	label: string;
	description: string;
	body: string;
}

const snippets: DutchSnippet[] = [
	{
		label: 'BSN validatie (elfproef)',
		description: 'Valideert een burgerservicenummer met de elfproef',
		body: `function isValidBsn(bsn: string): boolean {
	const digits = bsn.replace(/\\D/g, '');
	if (digits.length !== 9) {
		return false;
	}
	const sum = digits
		.split('')
		.map(Number)
		.reduce((acc, digit, i) => acc + digit * (i === 8 ? -1 : 9 - i), 0);
	return sum !== 0 && sum % 11 === 0;
}`
	},
	{
		label: 'Postcode validatie',
		description: 'Valideert een Nederlandse postcode (1234 AB)',
		body: `function isValidPostcode(postcode: string): boolean {
	return /^[1-9][0-9]{3}\\s?(?!SA|SD|SS)[A-Z]{2}$/i.test(postcode.trim());
}`
	},
	{
		label: 'IBAN validatie',
		description: 'Valideert een IBAN met de mod-97 controle',
		body: `function isValidIban(iban: string): boolean {
	const normalized = iban.replace(/\\s/g, '').toUpperCase();
	if (!/^[A-Z]{2}[0-9]{2}[A-Z0-9]{11,30}$/.test(normalized)) {
		return false;
	}
	const rearranged = normalized.slice(4) + normalized.slice(0, 4);
	const numeric = rearranged.replace(/[A-Z]/g, (ch) => String(ch.charCodeAt(0) - 55));
	let remainder = 0;
	for (const digit of numeric) {
		remainder = (remainder * 10 + Number(digit)) % 97;
	}
	return remainder === 1;
}`
	},
	{
		label: 'Datum formatteren (nl-NL)',
		description: 'Formatteert een datum als "7 juli 2026"',
		body: `function formatDutchDate(date: Date): string {
	return new Intl.DateTimeFormat('nl-NL', {
		day: 'numeric',
		month: 'long',
		year: 'numeric'
	}).format(date);
}`
	},
	{
		label: 'Valuta formatteren (EUR)',
		description: 'Formatteert een bedrag als "€ 1.234,56"',
		body: `function formatEuro(amount: number): string {
	return new Intl.NumberFormat('nl-NL', {
		style: 'currency',
		currency: 'EUR'
	}).format(amount);
}`
	},
	{
		label: 'Telefoonnummer validatie',
		description: 'Valideert een Nederlands telefoonnummer (06 / +31)',
		body: `function isValidDutchPhone(phone: string): boolean {
	const digits = phone.replace(/[\\s\\-()]/g, '');
	return /^(\\+31|0031|0)[1-9][0-9]{8}$/.test(digits);
}`
	},
	{
		label: 'BTW berekenen',
		description: 'Berekent BTW (21%) over een bedrag exclusief BTW',
		body: `function berekenBtw(bedragExclBtw: number, tarief = 0.21): { btw: number; inclusief: number } {
	const btw = Math.round(bedragExclBtw * tarief * 100) / 100;
	return { btw, inclusief: bedragExclBtw + btw };
}`
	}
];

export function activate(context: vscode.ExtensionContext) {
	const disposable = vscode.commands.registerCommand('quick-dutch-tools.insertSnippet', async () => {
		const editor = vscode.window.activeTextEditor;
		if (!editor) {
			vscode.window.showWarningMessage('Open eerst een bestand om een snippet in te voegen.');
			return;
		}

		const picked = await vscode.window.showQuickPick(
			snippets.map((s) => ({ label: s.label, description: s.description })),
			{ placeHolder: 'Kies een Quick Dutch snippet' }
		);
		if (!picked) {
			return;
		}

		const snippet = snippets.find((s) => s.label === picked.label);
		if (!snippet) {
			return;
		}

		await editor.insertSnippet(new vscode.SnippetString(snippet.body));
	});

	context.subscriptions.push(disposable);
}

export function deactivate() {}
