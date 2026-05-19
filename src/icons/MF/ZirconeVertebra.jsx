import React from 'react';

export const iconData = {
  "id": "ZirconeVertebra",
  "name": "ZirconeVertebra",
  "category": "MF",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.25 15.47 L 12.87 3.55 L 18.88 16.97 Z"
      }
    ]
  ]
};

export const ZirconeVertebra = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.25 15.47 L 12.87 3.55 L 18.88 16.97 Z" />
      {children}
    </svg>
  );
});

export default ZirconeVertebra;
