import React from 'react';

export const iconData = {
  "id": "MitoOrgan",
  "name": "MitoOrgan",
  "category": "LO",
  "nodes": [
    [
      "path",
      {
        "d": "M 2.70 11.39 L 7.59 9.05 L 7.88 3.64 L 12.35 6.71 L 17.18 4.25 L 16.76 9.66 L 21.30 12.61 L 16.41 14.95 L 16.12 20.36 L 11.65 17.29 L 6.82 19.75 L 7.24 14.34 Z"
      }
    ]
  ]
};

export const MitoOrgan = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 2.70 11.39 L 7.59 9.05 L 7.88 3.64 L 12.35 6.71 L 17.18 4.25 L 16.76 9.66 L 21.30 12.61 L 16.41 14.95 L 16.12 20.36 L 11.65 17.29 L 6.82 19.75 L 7.24 14.34 Z" />
      {children}
    </svg>
  );
});

export default MitoOrgan;
