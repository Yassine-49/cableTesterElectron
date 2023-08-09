export interface GlobalProviderProps {
	children: React.ReactNode;
}

export interface Connection {
	sideA: number[];
	sideB: number[];
}

export interface GlobalState {
	connections: Connection[];
}
