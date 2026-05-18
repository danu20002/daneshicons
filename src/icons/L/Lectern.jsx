import React from 'react';

export const iconData = {
  id: "Lectern",
  name: "Lectern",
  category: "L",
  nodes: [["path",{"d":"M16 12h3a2 2 0 0 0 1.902-1.38l1.056-3.333A1 1 0 0 0 21 6H3a1 1 0 0 0-.958 1.287l1.056 3.334A2 2 0 0 0 5 12h3"}],["path",{"d":"M18 6V3a1 1 0 0 0-1-1h-3"}],["rect",{"width":"8","height":"12","x":"8","y":"10","rx":"1"}]]
};

export const Lectern = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M16 12h3a2 2 0 0 0 1.902-1.38l1.056-3.333A1 1 0 0 0 21 6H3a1 1 0 0 0-.958 1.287l1.056 3.334A2 2 0 0 0 5 12h3" />
      <path d="M18 6V3a1 1 0 0 0-1-1h-3" />
      <rect width="8" height="12" x="8" y="10" rx="1" />
      {children}
    </svg>
  );
});

export default Lectern;
