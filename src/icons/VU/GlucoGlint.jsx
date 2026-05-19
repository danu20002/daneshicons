import React from 'react';

export const iconData = {
  "id": "GlucoGlint",
  "name": "GlucoGlint",
  "category": "VU",
  "nodes": [
    [
      "path",
      {
        "d": "M 21.61 8.00 L 15.54 12.84 L 18.78 19.91 L 12.29 15.63 L 6.58 20.89 L 8.64 13.40 L 1.87 9.59 L 9.63 9.24 L 11.16 1.62 L 13.90 8.89 Z"
      }
    ]
  ]
};

export const GlucoGlint = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 21.61 8.00 L 15.54 12.84 L 18.78 19.91 L 12.29 15.63 L 6.58 20.89 L 8.64 13.40 L 1.87 9.59 L 9.63 9.24 L 11.16 1.62 L 13.90 8.89 Z" />
      {children}
    </svg>
  );
});

export default GlucoGlint;
