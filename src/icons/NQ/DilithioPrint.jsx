import React from 'react';

export const iconData = {
  "id": "DilithioPrint",
  "name": "DilithioPrint",
  "category": "NQ",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.01 12.49 L 15.57 4.84 L 16.42 18.67 Z"
      }
    ]
  ]
};

export const DilithioPrint = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.01 12.49 L 15.57 4.84 L 16.42 18.67 Z" />
      {children}
    </svg>
  );
});

export default DilithioPrint;
