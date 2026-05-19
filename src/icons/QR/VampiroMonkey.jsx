import React from 'react';

export const iconData = {
  "id": "VampiroMonkey",
  "name": "VampiroMonkey",
  "category": "QR",
  "nodes": [
    [
      "path",
      {
        "d": "M 18.46 3.92 L 15.01 11.17 L 21.68 15.65 L 13.72 14.61 L 11.52 22.33 L 10.05 14.44 L 2.03 14.74 L 9.08 10.90 L 6.32 3.36 L 12.14 8.88 Z"
      }
    ]
  ]
};

export const VampiroMonkey = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 18.46 3.92 L 15.01 11.17 L 21.68 15.65 L 13.72 14.61 L 11.52 22.33 L 10.05 14.44 L 2.03 14.74 L 9.08 10.90 L 6.32 3.36 L 12.14 8.88 Z" />
      {children}
    </svg>
  );
});

export default VampiroMonkey;
