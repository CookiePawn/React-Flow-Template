import React from 'react';
import { useDnD } from './DnDContext';
 
const Sidebar = () => {
  const [, setType] = useDnD() as [string | null, (type: string) => void];
 
  const onDragStart = (event: React.DragEvent<HTMLDivElement>, nodeType: string) => {
    setType(nodeType);
    event.dataTransfer.effectAllowed = 'move';
  };
 
  return (
    <aside>
      <div className="description">You can drag these nodes to the pane on the right.</div>
      <div className="dndnode input" onDragStart={(event) => onDragStart(event, 'input')} draggable>
        Input Node
      </div>
      <div className="dndnode" onDragStart={(event) => onDragStart(event, 'default')} draggable>
        Default Node
      </div>
      <div className="dndnode output" onDragStart={(event) => onDragStart(event, 'output')} draggable>
        Output Node
      </div>
    </aside>
  );
};

export default Sidebar;