import React from 'react';

export const iconData = {
  "id": "VelaPlus",
  "name": "VelaPlus",
  "category": "SU",
  "nodes": [
    [
      "path",
      {
        "d": "M 8.51 3.80 L 16.23 4.16 L 20.77 10.42 L 18.70 17.87 L 11.59 20.90 L 4.78 17.23 L 3.41 9.62 Z"
      }
    ]
  ]
};

export const VelaPlus = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 8.51 3.80 L 16.23 4.16 L 20.77 10.42 L 18.70 17.87 L 11.59 20.90 L 4.78 17.23 L 3.41 9.62 Z" />
      {children}
    </svg>
  );
});

export default VelaPlus;
