import React from 'react';

export const iconData = {
  id: "BetweenHorizontalEnd",
  name: "BetweenHorizontalEnd",
  category: "B",
  nodes: [["rect",{"width":"13","height":"7","x":"3","y":"3","rx":"1"}],["path",{"d":"m22 15-3-3 3-3"}],["rect",{"width":"13","height":"7","x":"3","y":"14","rx":"1"}]]
};

export const BetweenHorizontalEnd = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <rect width="13" height="7" x="3" y="3" rx="1" />
      <path d="m22 15-3-3 3-3" />
      <rect width="13" height="7" x="3" y="14" rx="1" />
      {children}
    </svg>
  );
});

export default BetweenHorizontalEnd;
