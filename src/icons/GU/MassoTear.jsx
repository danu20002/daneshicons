import React from 'react';

export const iconData = {
  "id": "MassoTear",
  "name": "MassoTear",
  "category": "GU",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.52 12.45 C 6.97 10.96, 15.12 21.73, 16.34 6.28"
      }
    ],
    [
      "path",
      {
        "d": "M 8.41 18.70 L 3.43 18.95"
      }
    ]
  ]
};

export const MassoTear = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.52 12.45 C 6.97 10.96, 15.12 21.73, 16.34 6.28" />
      <path d="M 8.41 18.70 L 3.43 18.95" />
      {children}
    </svg>
  );
});

export default MassoTear;
