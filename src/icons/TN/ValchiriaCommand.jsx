import React from 'react';

export const iconData = {
  "id": "ValchiriaCommand",
  "name": "ValchiriaCommand",
  "category": "TN",
  "nodes": [
    [
      "path",
      {
        "d": "M 8.28 20.00 L 3.24 10.94 L 10.30 3.34 L 19.71 7.71 L 18.46 18.01 Z"
      }
    ]
  ]
};

export const ValchiriaCommand = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 8.28 20.00 L 3.24 10.94 L 10.30 3.34 L 19.71 7.71 L 18.46 18.01 Z" />
      {children}
    </svg>
  );
});

export default ValchiriaCommand;
