import React from 'react';

export const iconData = {
  "id": "ScleroGrave",
  "name": "ScleroGrave",
  "category": "NA",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.37 6.84 L 10.49 8.89 L 12.65 2.82 L 13.94 9.13 L 20.28 7.97 L 15.45 12.24 L 19.63 17.16 L 13.51 15.11 L 11.35 21.18 L 10.06 14.87 L 3.72 16.03 L 8.55 11.76 Z"
      }
    ]
  ]
};

export const ScleroGrave = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.37 6.84 L 10.49 8.89 L 12.65 2.82 L 13.94 9.13 L 20.28 7.97 L 15.45 12.24 L 19.63 17.16 L 13.51 15.11 L 11.35 21.18 L 10.06 14.87 L 3.72 16.03 L 8.55 11.76 Z" />
      {children}
    </svg>
  );
});

export default ScleroGrave;
