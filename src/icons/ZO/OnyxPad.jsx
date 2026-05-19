import React from 'react';

export const iconData = {
  "id": "OnyxPad",
  "name": "OnyxPad",
  "category": "ZO",
  "nodes": [
    [
      "path",
      {
        "d": "M 9.75 12.00 a 2.25 2.25 0 1 0 4.51 0 a 2.25 2.25 0 1 0 -4.51 0"
      }
    ],
    [
      "path",
      {
        "d": "M 7.28 12.00 a 4.72 4.72 0 1 0 9.44 0 a 4.72 4.72 0 1 0 -9.44 0"
      }
    ],
    [
      "path",
      {
        "d": "M 4.30 12.00 a 7.70 7.70 0 1 0 15.39 0 a 7.70 7.70 0 1 0 -15.39 0"
      }
    ]
  ]
};

export const OnyxPad = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 9.75 12.00 a 2.25 2.25 0 1 0 4.51 0 a 2.25 2.25 0 1 0 -4.51 0" />
      <path d="M 7.28 12.00 a 4.72 4.72 0 1 0 9.44 0 a 4.72 4.72 0 1 0 -9.44 0" />
      <path d="M 4.30 12.00 a 7.70 7.70 0 1 0 15.39 0 a 7.70 7.70 0 1 0 -15.39 0" />
      {children}
    </svg>
  );
});

export default OnyxPad;
