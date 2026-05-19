import React from 'react';

export const iconData = {
  "id": "HexaSatin",
  "name": "HexaSatin",
  "category": "LP",
  "nodes": [
    [
      "path",
      {
        "d": "M 7.40 21.07 L 6.77 13.71 L 2.93 7.40 L 10.29 6.77 L 16.60 2.93 L 17.23 10.29 L 21.07 16.60 L 13.71 17.23 Z"
      }
    ]
  ]
};

export const HexaSatin = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 7.40 21.07 L 6.77 13.71 L 2.93 7.40 L 10.29 6.77 L 16.60 2.93 L 17.23 10.29 L 21.07 16.60 L 13.71 17.23 Z" />
      {children}
    </svg>
  );
});

export default HexaSatin;
