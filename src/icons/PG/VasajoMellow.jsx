import React from 'react';

export const iconData = {
  "id": "VasajoMellow",
  "name": "VasajoMellow",
  "category": "PG",
  "nodes": [
    [
      "path",
      {
        "d": "M 17.91 19.04 L 10.18 17.00 L 2.95 13.60 L 8.58 7.92 L 15.14 3.36 L 17.24 11.07 Z"
      }
    ]
  ]
};

export const VasajoMellow = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 17.91 19.04 L 10.18 17.00 L 2.95 13.60 L 8.58 7.92 L 15.14 3.36 L 17.24 11.07 Z" />
      {children}
    </svg>
  );
});

export default VasajoMellow;
