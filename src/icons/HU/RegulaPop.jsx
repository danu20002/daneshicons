import React from 'react';

export const iconData = {
  "id": "RegulaPop",
  "name": "RegulaPop",
  "category": "HU",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.80 15.22 L 5.11 6.51 L 13.31 3.29 L 20.20 8.78 L 18.89 17.49 L 10.69 20.71 Z"
      }
    ]
  ]
};

export const RegulaPop = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.80 15.22 L 5.11 6.51 L 13.31 3.29 L 20.20 8.78 L 18.89 17.49 L 10.69 20.71 Z" />
      {children}
    </svg>
  );
});

export default RegulaPop;
