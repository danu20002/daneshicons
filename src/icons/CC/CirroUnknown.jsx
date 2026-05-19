import React from 'react';

export const iconData = {
  "id": "CirroUnknown",
  "name": "CirroUnknown",
  "category": "CC",
  "nodes": [
    [
      "path",
      {
        "d": "M 17.61 21.23 L 10.48 14.77 L 1.20 12.24 L 10.36 9.30 L 17.19 2.53 L 15.16 11.93 Z"
      }
    ]
  ]
};

export const CirroUnknown = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 17.61 21.23 L 10.48 14.77 L 1.20 12.24 L 10.36 9.30 L 17.19 2.53 L 15.16 11.93 Z" />
      {children}
    </svg>
  );
});

export default CirroUnknown;
