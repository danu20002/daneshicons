import React from 'react';

export const iconData = {
  "id": "PhiloSmash",
  "name": "PhiloSmash",
  "category": "KU",
  "nodes": [
    [
      "path",
      {
        "d": "M 2.93 15.74 L 2.95 8.23 L 8.26 2.93 L 15.77 2.95 L 21.07 8.26 L 21.05 15.77 L 15.74 21.07 L 8.23 21.05 Z"
      }
    ]
  ]
};

export const PhiloSmash = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 2.93 15.74 L 2.95 8.23 L 8.26 2.93 L 15.77 2.95 L 21.07 8.26 L 21.05 15.77 L 15.74 21.07 L 8.23 21.05 Z" />
      {children}
    </svg>
  );
});

export default PhiloSmash;
