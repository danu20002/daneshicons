import React from 'react';

export const iconData = {
  "id": "VeronicaTerminal",
  "name": "VeronicaTerminal",
  "category": "NQ",
  "nodes": [
    [
      "path",
      {
        "d": "M 5.78 6.76 L 17.24 5.78 L 18.22 17.24 L 6.76 18.22 Z"
      }
    ]
  ]
};

export const VeronicaTerminal = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 5.78 6.76 L 17.24 5.78 L 18.22 17.24 L 6.76 18.22 Z" />
      {children}
    </svg>
  );
});

export default VeronicaTerminal;
