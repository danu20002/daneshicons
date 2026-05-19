import React from 'react';

export const iconData = {
  "id": "PlutoHood",
  "name": "PlutoHood",
  "category": "OK",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.15 8.20 L 12.88 2.41 L 21.39 9.87 L 16.93 20.28 L 5.65 19.24 Z"
      }
    ]
  ]
};

export const PlutoHood = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.15 8.20 L 12.88 2.41 L 21.39 9.87 L 16.93 20.28 L 5.65 19.24 Z" />
      {children}
    </svg>
  );
});

export default PlutoHood;
