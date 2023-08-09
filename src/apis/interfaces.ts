export interface GlobalProviderProps {
	children: React.ReactNode;
}

export interface Ap {
	ssid: string;
	password: string;
}

export interface Pin {
	state: number;
	mode: number;
}

export interface AuxBoard {
	id: number;
	leds: number[];
	io: Pin[];
	parent: number;
}

export interface MainBoard {
	id: number;
	ap: Ap;
	leds: number[];
	rlys: number[];
	btns: number[];
	io: Pin[];
	analog: number;
	auxBoards: AuxBoard[];
}
