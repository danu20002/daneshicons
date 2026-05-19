import React from 'react';

export const iconData = {
  "id": "LysoDepart",
  "name": "LysoDepart",
  "category": "OH",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.58 5.78 L 19.42 5.78 L 19.42 18.22 L 4.58 18.22 Z"
      }
    ],
    [
      "path",
      {
        "d": "M 4.58 5.78 L 8.17 2.19 L 23.00 2.19 L 19.42 5.78"
      }
    ],
    [
      "path",
      {
        "d": "M 19.42 5.78 L 23.00 2.19 L 23.00 14.64 L 19.42 18.22"
      }
    ]
  ]
};

export const LysoDepart = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.58 5.78 L 19.42 5.78 L 19.42 18.22 L 4.58 18.22 Z" />
      <path d="M 4.58 5.78 L 8.17 2.19 L 23.00 2.19 L 19.42 5.78" />
      <path d="M 19.42 5.78 L 23.00 2.19 L 23.00 14.64 L 19.42 18.22" />
      {children}
    </svg>
  );
});

export default LysoDepart;
