import { useEffect, useRef } from 'react';
import { Terminal } from 'xterm';

const Screen = () => {
  const terminalContainer = useRef<HTMLDivElement>(null);
  const terminal = new Terminal();

  // Initialize the terminal with useEffect

  useEffect(() => {
    terminal.open(terminalContainer.current);
    terminal.write('Welcome to the terminal!\r\n');
  }, []);

  return <div ref={terminalContainer} />;
};

export default Screen;
