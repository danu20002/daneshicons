import React from 'react';

export const iconData = {
  "id": "MacroPile",
  "name": "MacroPile",
  "category": "MA",
  "nodes": [
    [
      "path",
      {
        "d": "M 17.92 8.73 L 16.65 6.99 L 16.12 8.34 L 18.15 9.59 L 17.22 9.46 L 19.72 12.27 L 18.97 12.31 L 16.52 12.23 L 19.05 14.48 L 19.00 15.38 L 19.42 17.48 L 21.74 14.95 L 19.12 14.53 L 16.16 12.69 L 18.04 13.02 L 18.36 12.83 L 18.67 10.19 L 19.66 8.69 L 21.29 6.26 L 18.85 3.29"
      }
    ]
  ]
};

export const MacroPile = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 17.92 8.73 L 16.65 6.99 L 16.12 8.34 L 18.15 9.59 L 17.22 9.46 L 19.72 12.27 L 18.97 12.31 L 16.52 12.23 L 19.05 14.48 L 19.00 15.38 L 19.42 17.48 L 21.74 14.95 L 19.12 14.53 L 16.16 12.69 L 18.04 13.02 L 18.36 12.83 L 18.67 10.19 L 19.66 8.69 L 21.29 6.26 L 18.85 3.29" />
      {children}
    </svg>
  );
});

export default MacroPile;
