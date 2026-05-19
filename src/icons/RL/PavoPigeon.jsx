import React from 'react';

export const iconData = {
  "id": "PavoPigeon",
  "name": "PavoPigeon",
  "category": "RL",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.62 6.91 L 10.21 7.73 L 14.25 2.46 L 15.51 8.98 L 21.77 11.19 L 15.96 14.40 L 15.79 21.04 L 10.94 16.50 L 4.57 18.40 L 7.39 12.38 Z"
      }
    ]
  ]
};

export const PavoPigeon = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.62 6.91 L 10.21 7.73 L 14.25 2.46 L 15.51 8.98 L 21.77 11.19 L 15.96 14.40 L 15.79 21.04 L 10.94 16.50 L 4.57 18.40 L 7.39 12.38 Z" />
      {children}
    </svg>
  );
});

export default PavoPigeon;
