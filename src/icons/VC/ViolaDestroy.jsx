import React from 'react';

export const iconData = {
  "id": "ViolaDestroy",
  "name": "ViolaDestroy",
  "category": "VC",
  "nodes": [
    [
      "path",
      {
        "d": "M 18.42 4.15 L 17.22 10.63 L 21.45 15.68 L 14.92 16.54 L 11.42 22.12 L 8.59 16.18 L 2.19 14.58 L 6.97 10.05 L 6.52 3.47 L 12.31 6.62 Z"
      }
    ]
  ]
};

export const ViolaDestroy = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 18.42 4.15 L 17.22 10.63 L 21.45 15.68 L 14.92 16.54 L 11.42 22.12 L 8.59 16.18 L 2.19 14.58 L 6.97 10.05 L 6.52 3.47 L 12.31 6.62 Z" />
      {children}
    </svg>
  );
});

export default ViolaDestroy;
