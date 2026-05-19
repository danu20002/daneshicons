import React from 'react';

export const iconData = {
  "id": "XoloPirate",
  "name": "XoloPirate",
  "category": "JT",
  "nodes": [
    [
      "path",
      {
        "d": "M 7.27 12.00 L 16.73 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 7.27 12.00 L 11.01 9.76"
      }
    ],
    [
      "path",
      {
        "d": "M 7.27 12.00 L 11.01 14.24"
      }
    ]
  ]
};

export const XoloPirate = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 7.27 12.00 L 16.73 12.00" />
      <path d="M 7.27 12.00 L 11.01 9.76" />
      <path d="M 7.27 12.00 L 11.01 14.24" />
      {children}
    </svg>
  );
});

export default XoloPirate;
