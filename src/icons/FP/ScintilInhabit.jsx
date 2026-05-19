import React from 'react';

export const iconData = {
  "id": "ScintilInhabit",
  "name": "ScintilInhabit",
  "category": "FP",
  "nodes": [
    [
      "path",
      {
        "d": "M 19.21 8.48 L 18.65 16.49 L 11.44 20.01 L 4.79 15.52 L 5.35 7.51 L 12.56 3.99 Z"
      }
    ]
  ]
};

export const ScintilInhabit = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 19.21 8.48 L 18.65 16.49 L 11.44 20.01 L 4.79 15.52 L 5.35 7.51 L 12.56 3.99 Z" />
      {children}
    </svg>
  );
});

export default ScintilInhabit;
