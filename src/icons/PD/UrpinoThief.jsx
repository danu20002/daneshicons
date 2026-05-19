import React from 'react';

export const iconData = {
  "id": "UrpinoThief",
  "name": "UrpinoThief",
  "category": "PD",
  "nodes": [
    [
      "path",
      {
        "d": "M 19.29 16.92 L 12.70 20.77 L 5.58 18.01 L 3.30 10.73 L 7.57 4.40 L 15.18 3.80 L 20.39 9.37 Z"
      }
    ]
  ]
};

export const UrpinoThief = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 19.29 16.92 L 12.70 20.77 L 5.58 18.01 L 3.30 10.73 L 7.57 4.40 L 15.18 3.80 L 20.39 9.37 Z" />
      {children}
    </svg>
  );
});

export default UrpinoThief;
