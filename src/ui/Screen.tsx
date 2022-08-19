import { useEffect, useRef } from 'react';
import { Terminal } from 'xterm';
import pty from 'node-pty';
import { platform } from 'os';

const Screen = () => {
  const terminalContainer = useRef<HTMLDivElement>(null);
  const terminal = new Terminal();

  // Initialize the terminal with useEffect

  useEffect(() => {
    terminal.open(terminalContainer.current);

    pty.spawn(platform() === 'win32' ? 'powershell.exe' : 'bash', [], {});
  }, []);

  return <div className="Screen" ref={terminalContainer} />;
};

export default Screen;
