import React from 'react';

export const iconData = {
  "id": "MidnightTerm",
  "name": "MidnightTerm",
  "category": "DM",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.80 11.95 L 6.92 5.56 L 13.87 4.01 L 19.41 8.48 L 19.37 15.60 L 13.78 20.01 L 6.85 18.38 Z"
      }
    ]
  ]
};

export const MidnightTerm = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.80 11.95 L 6.92 5.56 L 13.87 4.01 L 19.41 8.48 L 19.37 15.60 L 13.78 20.01 L 6.85 18.38 Z" />
      {children}
    </svg>
  );
});

export default MidnightTerm;
