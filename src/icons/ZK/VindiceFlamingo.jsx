import React from 'react';

export const iconData = {
  "id": "VindiceFlamingo",
  "name": "VindiceFlamingo",
  "category": "ZK",
  "nodes": [
    [
      "path",
      {
        "d": "M 20.69 14.42 L 17.10 19.44 L 11.12 20.98 L 5.56 18.32 L 3.00 12.70 L 4.66 6.75 L 9.75 3.26 L 15.89 3.86 L 20.22 8.27 Z"
      }
    ]
  ]
};

export const VindiceFlamingo = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 20.69 14.42 L 17.10 19.44 L 11.12 20.98 L 5.56 18.32 L 3.00 12.70 L 4.66 6.75 L 9.75 3.26 L 15.89 3.86 L 20.22 8.27 Z" />
      {children}
    </svg>
  );
});

export default VindiceFlamingo;
