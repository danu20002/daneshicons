import React from 'react';

export const iconData = {
  "id": "OxoPit",
  "name": "OxoPit",
  "category": "QP",
  "nodes": [
    [
      "path",
      {
        "d": "M 7.25 4.86 L 14.62 3.84 L 20.02 8.96 L 19.38 16.37 L 13.18 20.49 L 6.10 18.22 L 3.46 11.26 Z"
      }
    ]
  ]
};

export const OxoPit = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 7.25 4.86 L 14.62 3.84 L 20.02 8.96 L 19.38 16.37 L 13.18 20.49 L 6.10 18.22 L 3.46 11.26 Z" />
      {children}
    </svg>
  );
});

export default OxoPit;
