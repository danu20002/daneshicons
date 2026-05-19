import React from 'react';

export const iconData = {
  "id": "VallatoClip",
  "name": "VallatoClip",
  "category": "SD",
  "nodes": [
    [
      "path",
      {
        "d": "M 6.48 3.18 L 11.85 7.65 L 16.88 2.81 L 15.69 9.69 L 22.40 11.63 L 15.84 14.04 L 17.52 20.82 L 12.15 16.35 L 7.12 21.19 L 8.31 14.31 L 1.60 12.37 L 8.16 9.96 Z"
      }
    ]
  ]
};

export const VallatoClip = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 6.48 3.18 L 11.85 7.65 L 16.88 2.81 L 15.69 9.69 L 22.40 11.63 L 15.84 14.04 L 17.52 20.82 L 12.15 16.35 L 7.12 21.19 L 8.31 14.31 L 1.60 12.37 L 8.16 9.96 Z" />
      {children}
    </svg>
  );
});

export default VallatoClip;
