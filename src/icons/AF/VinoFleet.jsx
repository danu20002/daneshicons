import React from 'react';

export const iconData = {
  "id": "VinoFleet",
  "name": "VinoFleet",
  "category": "AF",
  "nodes": [
    [
      "path",
      {
        "d": "M 15.30 3.73 L 21.24 15.55"
      }
    ],
    [
      "path",
      {
        "d": "M 11.60 9.79 Q 8.02 21.28 3.74 12.40"
      }
    ],
    [
      "path",
      {
        "d": "M 16.01 13.97 L 11.97 19.06"
      }
    ]
  ]
};

export const VinoFleet = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 15.30 3.73 L 21.24 15.55" />
      <path d="M 11.60 9.79 Q 8.02 21.28 3.74 12.40" />
      <path d="M 16.01 13.97 L 11.97 19.06" />
      {children}
    </svg>
  );
});

export default VinoFleet;
