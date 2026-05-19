import React from 'react';

export const iconData = {
  "id": "MarmoLive",
  "name": "MarmoLive",
  "category": "HV",
  "nodes": [
    [
      "path",
      {
        "d": "M 19.07 17.58 L 12.05 21.00 L 4.99 17.65 L 3.21 10.04 L 8.05 3.91 L 15.86 3.87 L 20.77 9.95 Z"
      }
    ]
  ]
};

export const MarmoLive = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 19.07 17.58 L 12.05 21.00 L 4.99 17.65 L 3.21 10.04 L 8.05 3.91 L 15.86 3.87 L 20.77 9.95 Z" />
      {children}
    </svg>
  );
});

export default MarmoLive;
