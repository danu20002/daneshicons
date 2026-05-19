import React from 'react';

export const iconData = {
  "id": "SuperOpera",
  "name": "SuperOpera",
  "category": "RJ",
  "nodes": [
    [
      "path",
      {
        "d": "M 8.07 19.08 L 4.02 13.34 L 5.97 6.60 L 12.47 3.92 L 18.61 7.33 L 19.77 14.25 L 15.08 19.48 Z"
      }
    ]
  ]
};

export const SuperOpera = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 8.07 19.08 L 4.02 13.34 L 5.97 6.60 L 12.47 3.92 L 18.61 7.33 L 19.77 14.25 L 15.08 19.48 Z" />
      {children}
    </svg>
  );
});

export default SuperOpera;
