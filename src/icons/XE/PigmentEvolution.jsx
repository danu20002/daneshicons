import React from 'react';

export const iconData = {
  "id": "PigmentEvolution",
  "name": "PigmentEvolution",
  "category": "XE",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.97 14.16 L 4.79 7.85 L 9.84 3.97 L 16.15 4.79 L 20.03 9.84 L 19.21 16.15 L 14.16 20.03 L 7.85 19.21 Z"
      }
    ]
  ]
};

export const PigmentEvolution = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.97 14.16 L 4.79 7.85 L 9.84 3.97 L 16.15 4.79 L 20.03 9.84 L 19.21 16.15 L 14.16 20.03 L 7.85 19.21 Z" />
      {children}
    </svg>
  );
});

export default PigmentEvolution;
