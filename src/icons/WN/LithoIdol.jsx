import React from 'react';

export const iconData = {
  "id": "LithoIdol",
  "name": "LithoIdol",
  "category": "WN",
  "nodes": [
    [
      "path",
      {
        "d": "M 1.97 8.32 L 9.09 9.00 L 8.63 1.87 L 12.53 7.86 L 17.82 3.05 L 15.57 9.83 L 22.63 10.97 L 15.92 13.44 L 19.43 19.67 L 13.32 15.96 L 10.64 22.59 L 9.72 15.50 L 2.87 17.54 L 7.84 12.40 Z"
      }
    ]
  ]
};

export const LithoIdol = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 1.97 8.32 L 9.09 9.00 L 8.63 1.87 L 12.53 7.86 L 17.82 3.05 L 15.57 9.83 L 22.63 10.97 L 15.92 13.44 L 19.43 19.67 L 13.32 15.96 L 10.64 22.59 L 9.72 15.50 L 2.87 17.54 L 7.84 12.40 Z" />
      {children}
    </svg>
  );
});

export default LithoIdol;
