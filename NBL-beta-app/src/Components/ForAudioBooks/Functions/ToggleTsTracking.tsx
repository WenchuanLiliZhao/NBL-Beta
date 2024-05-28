import { useRef, useEffect } from 'react';

export default function ToggleTsTracking() {
  const controlBtnRef = useRef<HTMLDivElement>(null);

  function Track() {
    const target = document.querySelectorAll(".transcript-sentence");

    // target?.classList.toggle("tracking");
    for (let index = 0; index < target.length; index++) {
      const element = target[index];
      element.classList.toggle("tracking")
    }
  }

  useEffect(() => {
    const controlBtn = controlBtnRef.current;
    
    if (controlBtn) {
      controlBtn.addEventListener('click', Track);
    }

    // Cleanup the event listener on component unmount
    return () => {
      if (controlBtn) {
        controlBtn.removeEventListener('click', Track);
      }
    };
  }, []);

  return (
    <div ref={controlBtnRef} className="control-btn">
      <span className='material-symbols-outlined icon'>keep</span>
      <span className='hover-layer'></span>
    </div>
  );
}