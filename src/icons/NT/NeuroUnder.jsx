import React from 'react';

export const iconData = {
  "id": "NeuroUnder",
  "name": "NeuroUnder",
  "category": "NT",
  "nodes": [
    [
      "path",
      {
        "d": "M 2.03 10.77 L 9.98 9.40 L 13.23 2.03 L 14.60 9.98 L 21.97 13.23 L 14.02 14.60 L 10.77 21.97 L 9.40 14.02 Z"
      }
    ]
  ]
};

export const NeuroUnder = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 2.03 10.77 L 9.98 9.40 L 13.23 2.03 L 14.60 9.98 L 21.97 13.23 L 14.02 14.60 L 10.77 21.97 L 9.40 14.02 Z" />
      {children}
    </svg>
  );
});

export default NeuroUnder;
