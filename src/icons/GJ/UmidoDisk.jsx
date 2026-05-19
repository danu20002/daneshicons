import React from 'react';

export const iconData = {
  "id": "UmidoDisk",
  "name": "UmidoDisk",
  "category": "GJ",
  "nodes": [
    [
      "path",
      {
        "d": "M 11.44 21.72 L 4.05 17.62 L 2.65 9.29 L 8.29 3.00 L 16.72 3.49 L 21.60 10.39 L 19.25 18.50 Z"
      }
    ]
  ]
};

export const UmidoDisk = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 11.44 21.72 L 4.05 17.62 L 2.65 9.29 L 8.29 3.00 L 16.72 3.49 L 21.60 10.39 L 19.25 18.50 Z" />
      {children}
    </svg>
  );
});

export default UmidoDisk;
