import React, { useEffect, useState } from "react";
import { GlobalProviderProps, GlobalState } from "./interfaces";

const initialState: GlobalState = {
	connections: [],
};

const GlobalContext = React.createContext<{
	connections: GlobalState;
	start: () => void;
}>({
	connections: initialState,
	start: () => {},
});

const GlobalProvider: React.FC<GlobalProviderProps> = ({ children }) => {
	const [connections, setConnections] = useState<GlobalState>(initialState);

	const start = () => {};

	return (
		<GlobalContext.Provider value={{ connections, start }}>
			{children}
		</GlobalContext.Provider>
	);
};

export default GlobalProvider;
