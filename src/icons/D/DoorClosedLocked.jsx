import React from 'react';

export const iconData = {
  id: "DoorClosedLocked",
  name: "DoorClosedLocked",
  category: "D",
  nodes: [["path",{"d":"M10 12h.01"}],["path",{"d":"M18 9V6a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v14"}],["path",{"d":"M2 20h8"}],["path",{"d":"M20 17v-2a2 2 0 1 0-4 0v2"}],["rect",{"x":"14","y":"17","width":"8","height":"5","rx":"1"}]]
};

export const DoorClosedLocked = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M10 12h.01" />
      <path d="M18 9V6a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v14" />
      <path d="M2 20h8" />
      <path d="M20 17v-2a2 2 0 1 0-4 0v2" />
      <rect x="14" y="17" width="8" height="5" rx="1" />
      {children}
    </svg>
  );
});

export default DoorClosedLocked;
