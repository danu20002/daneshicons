import React from 'react';

export const iconData = {
  "id": "SelectoPrinciple",
  "name": "SelectoPrinciple",
  "category": "KD",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.14 14.54 L 8.98 11.25 L 5.37 5.60 L 11.14 9.01 L 14.23 3.06 L 14.16 9.76 L 20.86 9.46 L 15.02 12.75 L 18.63 18.40 L 12.86 14.99 L 9.77 20.94 L 9.84 14.24 Z"
      }
    ]
  ]
};

export const SelectoPrinciple = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.14 14.54 L 8.98 11.25 L 5.37 5.60 L 11.14 9.01 L 14.23 3.06 L 14.16 9.76 L 20.86 9.46 L 15.02 12.75 L 18.63 18.40 L 12.86 14.99 L 9.77 20.94 L 9.84 14.24 Z" />
      {children}
    </svg>
  );
});

export default SelectoPrinciple;
