import { useEffect, useRef } from 'react';

const Contact: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const contextRef = useRef<CanvasRenderingContext2D | null>(null);
  const cursorSize = 150;

  useEffect(() => {
    const canvas = canvasRef.current;
    if (canvas) {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight / 2;

      const context = canvas.getContext('2d');
      if (context) {
        context.lineWidth = cursorSize;
        contextRef.current = context;
      }
    }
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLCanvasElement>) => {
    const context = contextRef.current;
    if (context) {
      const x = e.nativeEvent.offsetX;
      const y = e.nativeEvent.offsetY;

      context.strokeStyle = '#163af5';
      context.lineTo(x, y);
      context.stroke();
    }
  };

  return (
    <canvas
      ref={canvasRef}
      onMouseMove={handleMouseMove}
      style={{ cursor: 'none' }}
    ></canvas>
  );
};

export default Contact;
