import React from 'react';

export const iconData = {
  "id": "SpondylTone",
  "name": "SpondylTone",
  "category": "BJ",
  "nodes": [
    [
      "path",
      {
        "d": "M 6.82 20.39 L 9.01 13.61 L 2.14 11.70 L 9.11 10.21 L 7.33 3.32 L 12.10 8.61 L 17.18 3.61 L 14.99 10.39 L 21.86 12.30 L 14.89 13.79 L 16.67 20.68 L 11.90 15.39 Z"
      }
    ]
  ]
};

export const SpondylTone = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 6.82 20.39 L 9.01 13.61 L 2.14 11.70 L 9.11 10.21 L 7.33 3.32 L 12.10 8.61 L 17.18 3.61 L 14.99 10.39 L 21.86 12.30 L 14.89 13.79 L 16.67 20.68 L 11.90 15.39 Z" />
      {children}
    </svg>
  );
});

export default SpondylTone;
