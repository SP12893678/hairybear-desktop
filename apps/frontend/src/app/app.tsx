// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.css';
import { Canvas } from '@react-three/fiber'
import { HairyBear } from './hairybear'
import { useEffect, useState } from 'react';
import { CameraControls } from '@react-three/drei';
import AnimateMenu from './animate-menu';
import Draggable from 'react-draggable';
import { Image } from 'antd';
import WindowMenu from './window-menu';
import { LOGO } from '../assets/images';

declare global {
  interface Window {
    electron: {
      setIsHover: (isHover: boolean) => void
    };
  }
}

export function App() {

  const [currentAnimation, setCurrentAnimation] = useState();
  const [isMinimize, setIsMinimize] = useState(false);
  const [isHover, setIsHover] = useState(false);

  useEffect(() => {
    window.electron.setIsHover(isHover)
  }, [isHover])

  return (
    <>
      <Draggable
        onMouseDown={(event) => { event.stopPropagation() }}
      >
        <div
          className={`app-wrapper ${isMinimize ? 'hidden' : ''}`}
          onMouseOver={() => setIsHover(true)}
          onMouseOut={() => setIsHover(false)}
        >
          <Canvas className='canvas-wrapper'>
            <CameraControls distance={10} polarAngle={1.4} />
            <ambientLight intensity={Math.PI / 2} />
            <HairyBear currentAnimation={currentAnimation} position={[0, -5, 0]} />
          </Canvas>
          <div className='menu-wrapper'>
            <WindowMenu setIsMinimize={setIsMinimize} />
            <AnimateMenu setCurrentAnimation={setCurrentAnimation} />
          </div>
        </div>
      </Draggable>
      {
        isMinimize &&
        <div
          className='logo-wrapper'
          onClick={() => setIsMinimize(false)}
          onMouseOver={() => setIsHover(true)}
          onMouseOut={() => setIsHover(false)}
        >
          <Image width={36} src={LOGO} preview={false} />
        </div>
      }
    </>
  );
}

export default App;
