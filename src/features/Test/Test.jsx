import React, { useRef, useState, useEffect } from 'react';

function TransitionDemo() {
  const boxRef = useRef(null);
  const [moved, setMoved] = useState(false);
  const [direction, setDirection] = useState(1)

  useEffect(() => {
    const node = boxRef.current;

    const handleTransitionEnd = () => {
      console.log('Transition finished!');
      setDirection(prev=> prev*-1);
    };

    if (node) {
      node.addEventListener('transitionend', handleTransitionEnd);
    }

    // Cleanup the listener on unmount
    return () => {
      if (node) {
        node.removeEventListener('transitionend', handleTransitionEnd);
      }
    };
  }, []);

  return (
    <div style={{ padding: 50 }}>
      <div
        ref={boxRef}
        className={`w-[100px] h-[100px] bg-sky-700 transition-transform duration-1000 cursor-pointer ${moved ? `translate-x-[${200*direction}px]` : ''}`}
        onClick={() => {
          setMoved(!moved);
        }}
      >
        Click me!
      </div>
    </div>
  );
}

export default TransitionDemo;
