import React from 'react';

export const iconData = {
  "id": "SalviMissile",
  "name": "SalviMissile",
  "category": "XD",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.88 15.24 L 5.14 6.59 L 13.25 3.35 L 20.12 8.76 L 18.86 17.41 L 10.75 20.65 Z"
      }
    ]
  ]
};

export const SalviMissile = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.88 15.24 L 5.14 6.59 L 13.25 3.35 L 20.12 8.76 L 18.86 17.41 L 10.75 20.65 Z" />
      {children}
    </svg>
  );
});

export default SalviMissile;
