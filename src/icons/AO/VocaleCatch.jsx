import React from 'react';

export const iconData = {
  "id": "VocaleCatch",
  "name": "VocaleCatch",
  "category": "AO",
  "nodes": [
    [
      "path",
      {
        "d": "M 14.16 19.85 L 7.21 18.59 L 3.86 12.36 L 6.64 5.86 L 13.46 3.99 L 19.17 8.14 L 19.49 15.20 Z"
      }
    ]
  ]
};

export const VocaleCatch = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 14.16 19.85 L 7.21 18.59 L 3.86 12.36 L 6.64 5.86 L 13.46 3.99 L 19.17 8.14 L 19.49 15.20 Z" />
      {children}
    </svg>
  );
});

export default VocaleCatch;
