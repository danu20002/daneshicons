import React from 'react';

export const iconData = {
  "id": "JouleTap",
  "name": "JouleTap",
  "category": "QL",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.82 12.00 a 8.18 8.18 0 1 0 16.37 0 a 8.18 8.18 0 1 0 -16.37 0"
      }
    ],
    [
      "path",
      {
        "d": "M 3.82 12.00 a 8.18 2.4553127733059226 0 1 0 16.37 0 a 8.18 2.4553127733059226 0 1 0 -16.37 0"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 3.82 A 2 2 0 0 0 12.00 20.18"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 3.82 A 2 2 0 0 1 12.00 20.18"
      }
    ]
  ]
};

export const JouleTap = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.82 12.00 a 8.18 8.18 0 1 0 16.37 0 a 8.18 8.18 0 1 0 -16.37 0" />
      <path d="M 3.82 12.00 a 8.18 2.4553127733059226 0 1 0 16.37 0 a 8.18 2.4553127733059226 0 1 0 -16.37 0" />
      <path d="M 12.00 3.82 A 2 2 0 0 0 12.00 20.18" />
      <path d="M 12.00 3.82 A 2 2 0 0 1 12.00 20.18" />
      {children}
    </svg>
  );
});

export default JouleTap;
