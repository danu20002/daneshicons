import React from 'react';

export const iconData = {
  "id": "ThecoWash",
  "name": "ThecoWash",
  "category": "QS",
  "nodes": [
    [
      "path",
      {
        "d": "M 15.87 3.78 L 15.56 9.53 L 21.05 11.25 L 15.92 13.85 L 17.18 19.46 L 12.36 16.32 L 8.13 20.22 L 8.44 14.47 L 2.95 12.75 L 8.08 10.15 L 6.82 4.54 L 11.64 7.68 Z"
      }
    ]
  ]
};

export const ThecoWash = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 15.87 3.78 L 15.56 9.53 L 21.05 11.25 L 15.92 13.85 L 17.18 19.46 L 12.36 16.32 L 8.13 20.22 L 8.44 14.47 L 2.95 12.75 L 8.08 10.15 L 6.82 4.54 L 11.64 7.68 Z" />
      {children}
    </svg>
  );
});

export default ThecoWash;
