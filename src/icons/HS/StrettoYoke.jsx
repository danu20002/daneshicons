import React from 'react';

export const iconData = {
  "id": "StrettoYoke",
  "name": "StrettoYoke",
  "category": "HS",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.57 6.09 L 19.43 6.09 L 19.43 17.91 L 4.57 17.91 Z"
      }
    ],
    [
      "path",
      {
        "d": "M 4.57 6.09 L 8.07 2.59 L 22.93 2.59 L 19.43 6.09"
      }
    ],
    [
      "path",
      {
        "d": "M 19.43 6.09 L 22.93 2.59 L 22.93 14.41 L 19.43 17.91"
      }
    ]
  ]
};

export const StrettoYoke = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.57 6.09 L 19.43 6.09 L 19.43 17.91 L 4.57 17.91 Z" />
      <path d="M 4.57 6.09 L 8.07 2.59 L 22.93 2.59 L 19.43 6.09" />
      <path d="M 19.43 6.09 L 22.93 2.59 L 22.93 14.41 L 19.43 17.91" />
      {children}
    </svg>
  );
});

export default StrettoYoke;
