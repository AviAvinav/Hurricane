import { useEffect, useRef } from 'react';
import { Terminal } from 'xterm';

import pty from 'node-pty';
import * as os from 'os';

const shell = os.platform() === 'win32' ? 'powershell.exe' : 'bash';

const ptyProcess = pty.spawn(shell, [], {
  name: 'hurricane',
  cols: 100,
  rows: 20,
  cwd: process.env.HOME,
});

const Screen = () => {
  const terminalContainer = useRef<HTMLDivElement>(null);
  const terminal = new Terminal();

  // Initialize the terminal with useEffect

  useEffect(() => {
    terminal.open(terminalContainer.current!);
    terminal.write('Welcome to the terminal!\r\n');
  }, []);

  return <div ref={terminalContainer} />;
};

export default Screen;
