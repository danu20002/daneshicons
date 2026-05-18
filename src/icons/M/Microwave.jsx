import React from 'react';

export const iconData = {
  id: "Microwave",
  name: "Microwave",
  category: "M",
  nodes: [["rect",{"width":"20","height":"15","x":"2","y":"4","rx":"2"}],["rect",{"width":"8","height":"7","x":"6","y":"8","rx":"1"}],["path",{"d":"M18 8v7"}],["path",{"d":"M6 19v2"}],["path",{"d":"M18 19v2"}]]
};

export const Microwave = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <rect width="20" height="15" x="2" y="4" rx="2" />
      <rect width="8" height="7" x="6" y="8" rx="1" />
      <path d="M18 8v7" />
      <path d="M6 19v2" />
      <path d="M18 19v2" />
      {children}
    </svg>
  );
});

export default Microwave;
