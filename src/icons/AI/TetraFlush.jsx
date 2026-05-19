import React from 'react';

export const iconData = {
  "id": "TetraFlush",
  "name": "TetraFlush",
  "category": "AI",
  "nodes": [
    [
      "path",
      {
        "d": "M 12.38 5.60 L 11.42 8.35 L 11.64 8.60 L 10.81 11.58 L 12.34 10.44 L 10.58 7.86 L 11.23 5.74 L 11.24 8.19 L 11.92 9.11 L 10.96 9.04 L 11.50 11.52 L 12.33 13.89 L 9.64 12.71 L 7.93 11.62 L 8.86 11.06 L 9.10 10.77 L 8.86 13.15 L 8.94 14.69 L 8.54 15.25 L 9.30 17.74 L 8.45 17.19 L 5.59 14.39"
      }
    ]
  ]
};

export const TetraFlush = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 12.38 5.60 L 11.42 8.35 L 11.64 8.60 L 10.81 11.58 L 12.34 10.44 L 10.58 7.86 L 11.23 5.74 L 11.24 8.19 L 11.92 9.11 L 10.96 9.04 L 11.50 11.52 L 12.33 13.89 L 9.64 12.71 L 7.93 11.62 L 8.86 11.06 L 9.10 10.77 L 8.86 13.15 L 8.94 14.69 L 8.54 15.25 L 9.30 17.74 L 8.45 17.19 L 5.59 14.39" />
      {children}
    </svg>
  );
});

export default TetraFlush;
