import './App.css';
import { useEffect, useRef } from 'react';
import p5 from 'p5';

function sketch(p) {
    p.setup = function() {
      p.createCanvas(window.innerWidth, window.innerHeight, p.WEBGL);
      p.describe('A 3D white ellipsoid');
    }

    p.draw = function() {
      p.ellipsoid(100,50,100);
    }
}
function App() {
    const p5ContainerRef = useRef();
    useEffect(() => {
        const p5Instance = new p5(sketch, p5ContainerRef.current);
        return () => {
            p5Instance.remove();
        }
    }, []);
    return (
        <div className="App" ref={p5ContainerRef} />
    );
}

export default App;