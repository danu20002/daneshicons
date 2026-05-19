import React from 'react';

export const iconData = {
  "id": "RupoJingle",
  "name": "RupoJingle",
  "category": "JK",
  "nodes": [
    [
      "path",
      {
        "d": "M 21.14 12.58 L 16.44 15.67 L 14.27 20.87 L 9.88 17.35 L 4.27 16.90 L 6.25 11.64 L 4.95 6.16 L 10.57 6.42 L 15.37 3.49 L 16.86 8.92 Z"
      }
    ]
  ]
};

export const RupoJingle = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 21.14 12.58 L 16.44 15.67 L 14.27 20.87 L 9.88 17.35 L 4.27 16.90 L 6.25 11.64 L 4.95 6.16 L 10.57 6.42 L 15.37 3.49 L 16.86 8.92 Z" />
      {children}
    </svg>
  );
});

export default RupoJingle;
