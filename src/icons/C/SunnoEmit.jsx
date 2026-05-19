import React from 'react';

export const iconData = {
  "id": "SunnoEmit",
  "name": "SunnoEmit",
  "category": "C",
  "nodes": [
    [
      "path",
      {
        "d": "M 15.61 21.23 L 8.83 21.39 L 3.53 17.15 L 2.20 10.51 L 5.45 4.56 L 11.77 2.09 L 18.19 4.26 L 21.72 10.05 L 20.70 16.76 Z"
      }
    ]
  ]
};

export const SunnoEmit = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 15.61 21.23 L 8.83 21.39 L 3.53 17.15 L 2.20 10.51 L 5.45 4.56 L 11.77 2.09 L 18.19 4.26 L 21.72 10.05 L 20.70 16.76 Z" />
      {children}
    </svg>
  );
});

export default SunnoEmit;
