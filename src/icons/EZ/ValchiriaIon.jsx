import React from 'react';

export const iconData = {
  "id": "ValchiriaIon",
  "name": "ValchiriaIon",
  "category": "EZ",
  "nodes": [
    [
      "path",
      {
        "d": "M 16.72 20.63 L 11.10 15.07 L 3.37 16.72 L 8.93 11.10 L 7.28 3.37 L 12.90 8.93 L 20.63 7.28 L 15.07 12.90 Z"
      }
    ]
  ]
};

export const ValchiriaIon = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 16.72 20.63 L 11.10 15.07 L 3.37 16.72 L 8.93 11.10 L 7.28 3.37 L 12.90 8.93 L 20.63 7.28 L 15.07 12.90 Z" />
      {children}
    </svg>
  );
});

export default ValchiriaIon;
