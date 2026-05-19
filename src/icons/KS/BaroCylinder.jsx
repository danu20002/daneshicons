import React from 'react';

export const iconData = {
  "id": "BaroCylinder",
  "name": "BaroCylinder",
  "category": "KS",
  "nodes": [
    [
      "path",
      {
        "d": "M 8.29 21.10 L 5.98 4.24 L 21.73 10.67 Z"
      }
    ]
  ]
};

export const BaroCylinder = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 8.29 21.10 L 5.98 4.24 L 21.73 10.67 Z" />
      {children}
    </svg>
  );
});

export default BaroCylinder;
