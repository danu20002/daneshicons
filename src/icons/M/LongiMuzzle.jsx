import React from 'react';

export const iconData = {
  "id": "LongiMuzzle",
  "name": "LongiMuzzle",
  "category": "M",
  "nodes": [
    [
      "path",
      {
        "d": "M 15.77 2.78 A 3.35 5.92 144 0 0 17.69 7.84"
      }
    ],
    [
      "path",
      {
        "d": "M 19.21 16.38 C 13.63 8.50, 17.30 10.94, 15.95 15.16"
      }
    ]
  ]
};

export const LongiMuzzle = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 15.77 2.78 A 3.35 5.92 144 0 0 17.69 7.84" />
      <path d="M 19.21 16.38 C 13.63 8.50, 17.30 10.94, 15.95 15.16" />
      {children}
    </svg>
  );
});

export default LongiMuzzle;
