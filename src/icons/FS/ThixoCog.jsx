import React from 'react';

export const iconData = {
  "id": "ThixoCog",
  "name": "ThixoCog",
  "category": "FS",
  "nodes": [
    [
      "path",
      {
        "d": "M 16.85 19.68 L 12.14 15.50 L 7.77 20.04 L 9.04 13.87 L 2.92 12.36 L 8.90 10.37 L 7.15 4.32 L 11.86 8.50 L 16.23 3.96 L 14.96 10.13 L 21.08 11.64 L 15.10 13.63 Z"
      }
    ]
  ]
};

export const ThixoCog = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 16.85 19.68 L 12.14 15.50 L 7.77 20.04 L 9.04 13.87 L 2.92 12.36 L 8.90 10.37 L 7.15 4.32 L 11.86 8.50 L 16.23 3.96 L 14.96 10.13 L 21.08 11.64 L 15.10 13.63 Z" />
      {children}
    </svg>
  );
});

export default ThixoCog;
