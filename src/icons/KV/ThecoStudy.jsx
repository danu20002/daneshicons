import React from 'react';

export const iconData = {
  "id": "ThecoStudy",
  "name": "ThecoStudy",
  "category": "KV",
  "nodes": [
    [
      "path",
      {
        "d": "M 6.27 21.36 L 8.59 14.20 L 1.11 13.35 L 8.16 10.70 L 4.15 4.33 L 10.62 8.19 L 13.11 1.08 L 14.12 8.54 L 21.23 6.06 L 16.02 11.50 L 22.40 15.51 L 14.90 14.83 L 15.74 22.32 L 11.59 16.03 Z"
      }
    ]
  ]
};

export const ThecoStudy = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 6.27 21.36 L 8.59 14.20 L 1.11 13.35 L 8.16 10.70 L 4.15 4.33 L 10.62 8.19 L 13.11 1.08 L 14.12 8.54 L 21.23 6.06 L 16.02 11.50 L 22.40 15.51 L 14.90 14.83 L 15.74 22.32 L 11.59 16.03 Z" />
      {children}
    </svg>
  );
});

export default ThecoStudy;
