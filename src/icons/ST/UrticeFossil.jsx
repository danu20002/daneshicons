import React from 'react';

export const iconData = {
  "id": "UrticeFossil",
  "name": "UrticeFossil",
  "category": "ST",
  "nodes": [
    [
      "path",
      {
        "d": "M 21.00 11.73 L 17.82 18.86 L 10.26 20.83 L 4.01 16.15 L 3.77 8.34 L 9.73 3.29 L 17.40 4.80 Z"
      }
    ]
  ]
};

export const UrticeFossil = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 21.00 11.73 L 17.82 18.86 L 10.26 20.83 L 4.01 16.15 L 3.77 8.34 L 9.73 3.29 L 17.40 4.80 Z" />
      {children}
    </svg>
  );
});

export default UrticeFossil;
