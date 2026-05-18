import React from 'react';

export const iconData = {
  id: "MonitorOff",
  name: "MonitorOff",
  category: "M",
  nodes: [["path",{"d":"M12 17v4"}],["path",{"d":"M17 17H4a2 2 0 0 1-2-2V5a2 2 0 0 1 1.184-1.826"}],["path",{"d":"m2 2 20 20"}],["path",{"d":"M8 21h8"}],["path",{"d":"M8.656 3H20a2 2 0 0 1 2 2v10a2 2 0 0 1-.293 1.042"}]]
};

export const MonitorOff = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
  return (
    <svg
      ref={ref}
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      {...rest}
    >
      <path d="M12 17v4" />
      <path d="M17 17H4a2 2 0 0 1-2-2V5a2 2 0 0 1 1.184-1.826" />
      <path d="m2 2 20 20" />
      <path d="M8 21h8" />
      <path d="M8.656 3H20a2 2 0 0 1 2 2v10a2 2 0 0 1-.293 1.042" />
      {children}
    </svg>
  );
});

export default MonitorOff;
