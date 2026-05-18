import React from 'react';

export const iconData = {
  id: "Pi",
  name: "Pi",
  category: "P",
  nodes: [["line",{"x1":"9","x2":"9","y1":"4","y2":"20"}],["path",{"d":"M4 7c0-1.7 1.3-3 3-3h13"}],["path",{"d":"M18 20c-1.7 0-3-1.3-3-3V4"}]]
};

export const Pi = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <line x1="9" x2="9" y1="4" y2="20" />
      <path d="M4 7c0-1.7 1.3-3 3-3h13" />
      <path d="M18 20c-1.7 0-3-1.3-3-3V4" />
      {children}
    </svg>
  );
});

export default Pi;
