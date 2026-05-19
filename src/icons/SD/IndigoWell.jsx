import React from 'react';

export const iconData = {
  "id": "IndigoWell",
  "name": "IndigoWell",
  "category": "SD",
  "nodes": [
    [
      "path",
      {
        "d": "M 1.95 16.08 L 6.98 11.30 L 3.44 5.34 L 10.09 7.30 L 13.49 1.26 L 15.11 8.00 L 22.05 7.92 L 17.02 12.70 L 20.56 18.66 L 13.91 16.70 L 10.51 22.74 L 8.89 16.00 Z"
      }
    ]
  ]
};

export const IndigoWell = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 1.95 16.08 L 6.98 11.30 L 3.44 5.34 L 10.09 7.30 L 13.49 1.26 L 15.11 8.00 L 22.05 7.92 L 17.02 12.70 L 20.56 18.66 L 13.91 16.70 L 10.51 22.74 L 8.89 16.00 Z" />
      {children}
    </svg>
  );
});

export default IndigoWell;
