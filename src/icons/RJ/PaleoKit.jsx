import React from 'react';

export const iconData = {
  "id": "PaleoKit",
  "name": "PaleoKit",
  "category": "RJ",
  "nodes": [
    [
      "path",
      {
        "d": "M 8.31 3.01 L 14.95 2.74 L 20.22 6.80 L 21.63 13.30 L 18.54 19.19 L 12.39 21.71 L 6.06 19.69 L 2.50 14.07 L 3.39 7.48 Z"
      }
    ]
  ]
};

export const PaleoKit = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 8.31 3.01 L 14.95 2.74 L 20.22 6.80 L 21.63 13.30 L 18.54 19.19 L 12.39 21.71 L 6.06 19.69 L 2.50 14.07 L 3.39 7.48 Z" />
      {children}
    </svg>
  );
});

export default PaleoKit;
