import Navbar from './components/Navbar.tsx';
import { WindowWidth } from './components/WindowWidth.tsx';
import NekoExplanation from './components/NekoExplanation.tsx';

export default function App() {
  return (
    <>
      <WindowWidth />
      <Navbar />
      <NekoExplanation />
    </>
  );
}
