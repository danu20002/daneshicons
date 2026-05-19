import React from 'react';

export const iconData = {
  "id": "VogaCredit",
  "name": "VogaCredit",
  "category": "XH",
  "nodes": [
    [
      "path",
      {
        "d": "M 1.89 14.77 L 7.23 9.28 L 9.23 1.89 L 14.72 7.23 L 22.11 9.23 L 16.77 14.72 L 14.77 22.11 L 9.28 16.77 Z"
      }
    ]
  ]
};

export const VogaCredit = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 1.89 14.77 L 7.23 9.28 L 9.23 1.89 L 14.72 7.23 L 22.11 9.23 L 16.77 14.72 L 14.77 22.11 L 9.28 16.77 Z" />
      {children}
    </svg>
  );
});

export default VogaCredit;
