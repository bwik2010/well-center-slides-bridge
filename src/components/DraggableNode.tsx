
import React, { useState, useRef } from 'react';

interface DraggableNodeProps {
  name: string;
  title: string;
  position: { x: number; y: number };
  onPositionChange: (newPosition: { x: number; y: number }) => void;
  isCenter?: boolean;
  containerBounds: { width: number; height: number };
}

const DraggableNode: React.FC<DraggableNodeProps> = ({
  name,
  title,
  position,
  onPositionChange,
  isCenter = false,
  containerBounds
}) => {
  const [isDragging, setIsDragging] = useState(false);
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });
  const nodeRef = useRef<HTMLDivElement>(null);

  const handleMouseDown = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsDragging(true);
    
    const rect = nodeRef.current?.getBoundingClientRect();
    if (rect) {
      setDragOffset({
        x: e.clientX - rect.left - rect.width / 2,
        y: e.clientY - rect.top - rect.height / 2
      });
    }
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (!isDragging || !nodeRef.current) return;

    const container = nodeRef.current.parentElement;
    if (!container) return;

    const containerRect = container.getBoundingClientRect();
    const nodeRect = nodeRef.current.getBoundingClientRect();
    
    // Calculate new position relative to container
    let newX = e.clientX - containerRect.left - dragOffset.x - nodeRect.width / 2;
    let newY = e.clientY - containerRect.top - dragOffset.y - nodeRect.height / 2;
    
    // Ensure node stays within bounds
    const nodeWidth = nodeRect.width;
    const nodeHeight = nodeRect.height;
    
    newX = Math.max(nodeWidth / 2, Math.min(containerBounds.width - nodeWidth / 2, newX));
    newY = Math.max(nodeHeight / 2, Math.min(containerBounds.height - nodeHeight / 2, newY));
    
    onPositionChange({ x: newX, y: newY });
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  React.useEffect(() => {
    if (isDragging) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
      document.body.style.cursor = 'grabbing';
      
      return () => {
        document.removeEventListener('mousemove', handleMouseMove);
        document.removeEventListener('mouseup', handleMouseUp);
        document.body.style.cursor = 'default';
      };
    }
  }, [isDragging, dragOffset]);

  const nodeStyle = {
    left: `${position.x}px`,
    top: `${position.y}px`,
    cursor: isDragging ? 'grabbing' : 'grab'
  };

  return (
    <div
      ref={nodeRef}
      className={`absolute transform -translate-x-1/2 -translate-y-1/2 select-none ${
        isDragging ? 'z-50 scale-105' : 'z-10'
      } transition-all duration-200`}
      style={nodeStyle}
      onMouseDown={handleMouseDown}
    >
      <div 
        className={`px-4 py-2 rounded-full flex flex-col items-center justify-center text-white font-medium text-xs shadow-lg border-2 border-white hover:scale-105 transition-transform duration-200 whitespace-nowrap text-center ${
          isCenter ? 'px-6 py-3 text-base' : ''
        }`}
        style={{
          backgroundColor: isCenter ? '#173e4e' : '#b8832b'
        }}
      >
        <div className="font-semibold">{name}</div>
        {title && <div className="text-[10px] opacity-90">{title}</div>}
      </div>
    </div>
  );
};

export default DraggableNode;
