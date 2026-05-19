import React from 'react';

export const iconData = {
  "id": "RadiciFare",
  "name": "RadiciFare",
  "category": "MX",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.42 12.62 L 8.76 4.04 L 18.57 6.46 L 19.30 16.54 L 9.94 20.35 Z"
      }
    ]
  ]
};

export const RadiciFare = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.42 12.62 L 8.76 4.04 L 18.57 6.46 L 19.30 16.54 L 9.94 20.35 Z" />
      {children}
    </svg>
  );
});

export default RadiciFare;
