import React from 'react';

export const iconData = {
  "id": "MarmoVarnish",
  "name": "MarmoVarnish",
  "category": "VA",
  "nodes": [
    [
      "path",
      {
        "d": "M 6.34 6.09 L 11.47 3.83 L 16.84 5.40 L 19.95 10.06 L 19.34 15.62 L 15.30 19.49 L 9.71 19.86 L 5.19 16.55 L 3.86 11.11 Z"
      }
    ]
  ]
};

export const MarmoVarnish = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 6.34 6.09 L 11.47 3.83 L 16.84 5.40 L 19.95 10.06 L 19.34 15.62 L 15.30 19.49 L 9.71 19.86 L 5.19 16.55 L 3.86 11.11 Z" />
      {children}
    </svg>
  );
});

export default MarmoVarnish;
