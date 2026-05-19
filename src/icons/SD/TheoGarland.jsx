import React from 'react';

export const iconData = {
  "id": "TheoGarland",
  "name": "TheoGarland",
  "category": "SD",
  "nodes": [
    [
      "path",
      {
        "d": "M 18.64 5.30 L 17.44 10.07 L 21.37 13.01 L 16.90 15.05 L 17.05 19.96 L 12.67 17.74 L 8.92 20.91 L 7.93 16.10 L 3.11 15.15 L 6.26 11.38 L 3.99 7.02 L 8.91 7.12 L 10.90 2.64 L 13.88 6.54 Z"
      }
    ]
  ]
};

export const TheoGarland = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 18.64 5.30 L 17.44 10.07 L 21.37 13.01 L 16.90 15.05 L 17.05 19.96 L 12.67 17.74 L 8.92 20.91 L 7.93 16.10 L 3.11 15.15 L 6.26 11.38 L 3.99 7.02 L 8.91 7.12 L 10.90 2.64 L 13.88 6.54 Z" />
      {children}
    </svg>
  );
});

export default TheoGarland;
