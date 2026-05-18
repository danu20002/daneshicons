import React from 'react';

export const iconData = {
  id: "BetweenVerticalStart",
  name: "BetweenVerticalStart",
  category: "B",
  nodes: [["rect",{"width":"7","height":"13","x":"3","y":"8","rx":"1"}],["path",{"d":"m15 2-3 3-3-3"}],["rect",{"width":"7","height":"13","x":"14","y":"8","rx":"1"}]]
};

export const BetweenVerticalStart = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <rect width="7" height="13" x="3" y="8" rx="1" />
      <path d="m15 2-3 3-3-3" />
      <rect width="7" height="13" x="14" y="8" rx="1" />
      {children}
    </svg>
  );
});

export default BetweenVerticalStart;
