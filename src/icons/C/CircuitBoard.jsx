import React from 'react';

export const iconData = {
  id: "CircuitBoard",
  name: "CircuitBoard",
  category: "C",
  nodes: [["rect",{"width":"18","height":"18","x":"3","y":"3","rx":"2"}],["path",{"d":"M11 9h4a2 2 0 0 0 2-2V3"}],["circle",{"cx":"9","cy":"9","r":"2"}],["path",{"d":"M7 21v-4a2 2 0 0 1 2-2h4"}],["circle",{"cx":"15","cy":"15","r":"2"}]]
};

export const CircuitBoard = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <rect width="18" height="18" x="3" y="3" rx="2" />
      <path d="M11 9h4a2 2 0 0 0 2-2V3" />
      <circle cx="9" cy="9" r="2" />
      <path d="M7 21v-4a2 2 0 0 1 2-2h4" />
      <circle cx="15" cy="15" r="2" />
      {children}
    </svg>
  );
});

export default CircuitBoard;
