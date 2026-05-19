import React from 'react';

export const iconData = {
  "id": "PodioBroad",
  "name": "PodioBroad",
  "category": "KV",
  "nodes": [
    [
      "path",
      {
        "d": "M 16.84 2.35 L 15.66 9.18 L 22.56 9.77 L 16.49 13.10 L 20.33 18.86 L 13.94 16.19 L 11.83 22.79 L 9.93 16.13 L 3.45 18.59 L 7.48 12.96 L 1.52 9.43 L 8.44 9.06 L 7.47 2.20 L 12.07 7.38 Z"
      }
    ]
  ]
};

export const PodioBroad = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 16.84 2.35 L 15.66 9.18 L 22.56 9.77 L 16.49 13.10 L 20.33 18.86 L 13.94 16.19 L 11.83 22.79 L 9.93 16.13 L 3.45 18.59 L 7.48 12.96 L 1.52 9.43 L 8.44 9.06 L 7.47 2.20 L 12.07 7.38 Z" />
      {children}
    </svg>
  );
});

export default PodioBroad;
