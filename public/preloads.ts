import SerialPort from "serialport";
const { contextBridge } = require("electron");

contextBridge.exposeInMainWorld("serial", {
	serialport: SerialPort,
});

console.log("hello world");
