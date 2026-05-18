import React from 'react';

export const iconData = {
  id: "MonitorSpeaker",
  name: "MonitorSpeaker",
  category: "M",
  nodes: [["path",{"d":"M5.5 20H8"}],["path",{"d":"M17 9h.01"}],["rect",{"width":"10","height":"16","x":"12","y":"4","rx":"2"}],["path",{"d":"M8 6H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h4"}],["circle",{"cx":"17","cy":"15","r":"1"}]]
};

export const MonitorSpeaker = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M5.5 20H8" />
      <path d="M17 9h.01" />
      <rect width="10" height="16" x="12" y="4" rx="2" />
      <path d="M8 6H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h4" />
      <circle cx="17" cy="15" r="1" />
      {children}
    </svg>
  );
});

export default MonitorSpeaker;
