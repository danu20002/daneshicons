import React from 'react';

export const iconData = {
  "id": "PiezoDash",
  "name": "PiezoDash",
  "category": "MZ",
  "nodes": [
    [
      "path",
      {
        "d": "M 21.81 10.07 L 19.62 18.47 L 11.69 21.99 L 4.00 17.99 L 2.33 9.48 L 7.94 2.86 L 16.61 3.13 Z"
      }
    ]
  ]
};

export const PiezoDash = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 21.81 10.07 L 19.62 18.47 L 11.69 21.99 L 4.00 17.99 L 2.33 9.48 L 7.94 2.86 L 16.61 3.13 Z" />
      {children}
    </svg>
  );
});

export default PiezoDash;
