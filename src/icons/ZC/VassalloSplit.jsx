import React from 'react';

export const iconData = {
  "id": "VassalloSplit",
  "name": "VassalloSplit",
  "category": "ZC",
  "nodes": [
    [
      "path",
      {
        "d": "M 13.80 11.69 19.65 10.01 Q 17.74 12.25 15.83 14.50 Q 16.14 15.42 16.44 16.34 Q 12.20 14.85 7.96 13.36 Z"
      }
    ]
  ]
};

export const VassalloSplit = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 13.80 11.69 19.65 10.01 Q 17.74 12.25 15.83 14.50 Q 16.14 15.42 16.44 16.34 Q 12.20 14.85 7.96 13.36 Z" />
      {children}
    </svg>
  );
});

export default VassalloSplit;
