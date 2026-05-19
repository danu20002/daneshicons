import React from 'react';

export const iconData = {
  "id": "VateRiddle",
  "name": "VateRiddle",
  "category": "CC",
  "nodes": [
    [
      "path",
      {
        "d": "M 21.86 12.93 L 15.48 16.20 L 11.07 21.86 L 7.80 15.48 L 2.14 11.07 L 8.52 7.80 L 12.93 2.14 L 16.20 8.52 Z"
      }
    ]
  ]
};

export const VateRiddle = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 21.86 12.93 L 15.48 16.20 L 11.07 21.86 L 7.80 15.48 L 2.14 11.07 L 8.52 7.80 L 12.93 2.14 L 16.20 8.52 Z" />
      {children}
    </svg>
  );
});

export default VateRiddle;
