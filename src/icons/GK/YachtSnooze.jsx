import React from 'react';

export const iconData = {
  "id": "YachtSnooze",
  "name": "YachtSnooze",
  "category": "GK",
  "nodes": [
    [
      "path",
      {
        "d": "M 11.09 20.95 L 4.43 16.87 L 3.48 9.12 L 8.94 3.54 L 16.71 4.33 L 20.93 10.90 L 18.43 18.30 Z"
      }
    ]
  ]
};

export const YachtSnooze = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 11.09 20.95 L 4.43 16.87 L 3.48 9.12 L 8.94 3.54 L 16.71 4.33 L 20.93 10.90 L 18.43 18.30 Z" />
      {children}
    </svg>
  );
});

export default YachtSnooze;
