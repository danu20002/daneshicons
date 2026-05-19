import React from 'react';

export const iconData = {
  "id": "ChronoFork",
  "name": "ChronoFork",
  "category": "QS",
  "nodes": [
    [
      "path",
      {
        "d": "M 14.18 1.47 L 15.37 8.93 L 22.69 10.82 L 15.96 14.26 L 16.43 21.80 L 11.08 16.47 L 4.05 19.24 L 7.47 12.50 L 2.66 6.68 L 10.12 7.84 Z"
      }
    ]
  ]
};

export const ChronoFork = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 14.18 1.47 L 15.37 8.93 L 22.69 10.82 L 15.96 14.26 L 16.43 21.80 L 11.08 16.47 L 4.05 19.24 L 7.47 12.50 L 2.66 6.68 L 10.12 7.84 Z" />
      {children}
    </svg>
  );
});

export default ChronoFork;
