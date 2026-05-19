import React from 'react';

export const iconData = {
  "id": "SusurroSuspect",
  "name": "SusurroSuspect",
  "category": "CU",
  "nodes": [
    [
      "path",
      {
        "d": "M 13.72 20.90 L 10.17 15.90 L 4.07 16.38 L 7.72 11.47 L 5.38 5.81 L 11.18 7.77 L 15.84 3.79 L 15.77 9.92 L 20.99 13.12 L 15.15 14.94 Z"
      }
    ]
  ]
};

export const SusurroSuspect = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 13.72 20.90 L 10.17 15.90 L 4.07 16.38 L 7.72 11.47 L 5.38 5.81 L 11.18 7.77 L 15.84 3.79 L 15.77 9.92 L 20.99 13.12 L 15.15 14.94 Z" />
      {children}
    </svg>
  );
});

export default SusurroSuspect;
