import { SerialPort } from "serialport";

class UartDevice {
  private port: SerialPort;
  constructor(path: string, baudRate: number) {
    this.port = new SerialPort({
      path,
      baudRate,
      autoOpen: false,
    });
  }

  open = () => {
    return new Promise((resolve) => {
      this.port.open((err) => {
        if (err) {
          console.error(err);
          resolve(false);
        } else {
          resolve(true);
        }
      });
    });
  };

  write = (data: number[], timeout?: number): Promise<number[] | null> => {
    return new Promise((resolve) => {
      let timeoutHandler: NodeJS.Timeout | null = null;

      const resHandler = (data: number[]) => {
        this.port.removeListener("data", resHandler);
        clearTimeout(timeoutHandler!);
        // console.log(data);
        resolve(data);
      };

      this.port.on("data", resHandler);

      if (timeout) {
        timeoutHandler = setTimeout(() => {
          this.port.removeListener("data", resHandler);
          // console.log("timed out");
          resolve(null);
        }, timeout);
      }

      // console.log("sending: ", data);
      this.port.write(data, (err) => {
        if (err) {
          console.log(err);
          this.port.removeListener("data", resHandler);
          clearTimeout(timeoutHandler!);
          resolve(null);
        }
      });
    });
  };
}

export default UartDevice;
