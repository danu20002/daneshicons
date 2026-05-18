import React from 'react';

export const iconData = {
  id: "Dice2",
  name: "Dice2",
  category: "D",
  nodes: [["rect",{"width":"18","height":"18","x":"3","y":"3","rx":"2","ry":"2"}],["path",{"d":"M15 9h.01"}],["path",{"d":"M9 15h.01"}]]
};

export const Dice2 = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
      <path d="M15 9h.01" />
      <path d="M9 15h.01" />
      {children}
    </svg>
  );
});

export default Dice2;
