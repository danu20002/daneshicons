import React from 'react';

export const iconData = {
  "id": "CineReside",
  "name": "CineReside",
  "category": "YT",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.21 6.48 L 9.79 6.50 L 14.53 1.93 L 16.55 8.20 L 22.36 11.30 L 17.02 15.15 L 15.87 21.63 L 10.56 17.75 L 4.03 18.66 L 6.09 12.40 Z"
      }
    ]
  ]
};

export const CineReside = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.21 6.48 L 9.79 6.50 L 14.53 1.93 L 16.55 8.20 L 22.36 11.30 L 17.02 15.15 L 15.87 21.63 L 10.56 17.75 L 4.03 18.66 L 6.09 12.40 Z" />
      {children}
    </svg>
  );
});

export default CineReside;
