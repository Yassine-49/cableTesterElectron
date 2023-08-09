import React from "react";
import { GlobalProviderProps, MainBoard } from "./interfaces";

const GlobalContext = React.createContext<{
	boards: MainBoard[];
}>({
	boards: [],
});

const GlobalProvider: React.FC<GlobalProviderProps> = () => {
	return <div>GlobalProvider</div>;
};

export default GlobalProvider;
