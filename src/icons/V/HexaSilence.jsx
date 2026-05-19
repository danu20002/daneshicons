import React from 'react';

export const iconData = {
  "id": "HexaSilence",
  "name": "HexaSilence",
  "category": "V",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.28 15.39 L 4.54 8.08 L 10.42 3.72 L 17.48 5.60 L 20.42 12.30 L 17.02 18.77 L 9.84 20.15 Z"
      }
    ]
  ]
};

export const HexaSilence = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.28 15.39 L 4.54 8.08 L 10.42 3.72 L 17.48 5.60 L 20.42 12.30 L 17.02 18.77 L 9.84 20.15 Z" />
      {children}
    </svg>
  );
});

export default HexaSilence;
