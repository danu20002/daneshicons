import React from 'react';

export const iconData = {
  "id": "ElectroInsist",
  "name": "ElectroInsist",
  "category": "FP",
  "nodes": [
    [
      "path",
      {
        "d": "M 5.23 17.37 L 3.41 11.01 L 6.63 5.23 L 12.99 3.41 L 18.77 6.63 L 20.59 12.99 L 17.37 18.77 L 11.01 20.59 Z"
      }
    ]
  ]
};

export const ElectroInsist = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 5.23 17.37 L 3.41 11.01 L 6.63 5.23 L 12.99 3.41 L 18.77 6.63 L 20.59 12.99 L 17.37 18.77 L 11.01 20.59 Z" />
      {children}
    </svg>
  );
});

export default ElectroInsist;
