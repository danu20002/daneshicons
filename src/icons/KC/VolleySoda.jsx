import React from 'react';

export const iconData = {
  "id": "VolleySoda",
  "name": "VolleySoda",
  "category": "KC",
  "nodes": [
    [
      "path",
      {
        "d": "M 14.37 2.35 L 14.92 9.54 L 21.91 11.28 L 15.25 14.01 L 15.75 21.20 L 11.09 15.71 L 4.41 18.41 L 8.19 12.28 L 3.56 6.76 L 10.56 8.46 Z"
      }
    ]
  ]
};

export const VolleySoda = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 14.37 2.35 L 14.92 9.54 L 21.91 11.28 L 15.25 14.01 L 15.75 21.20 L 11.09 15.71 L 4.41 18.41 L 8.19 12.28 L 3.56 6.76 L 10.56 8.46 Z" />
      {children}
    </svg>
  );
});

export default VolleySoda;
