import React from 'react';

export const iconData = {
  id: "RadioReceiver",
  name: "RadioReceiver",
  category: "R",
  nodes: [["path",{"d":"M5 16v2"}],["path",{"d":"M19 16v2"}],["rect",{"width":"20","height":"8","x":"2","y":"8","rx":"2"}],["path",{"d":"M18 12h.01"}]]
};

export const RadioReceiver = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M5 16v2" />
      <path d="M19 16v2" />
      <rect width="20" height="8" x="2" y="8" rx="2" />
      <path d="M18 12h.01" />
      {children}
    </svg>
  );
});

export default RadioReceiver;
