import React from 'react';

export const iconData = {
  "id": "PavoDial",
  "name": "PavoDial",
  "category": "UI",
  "nodes": [
    [
      "path",
      {
        "d": "M 17.28 4.31 L 15.99 10.09 L 21.30 12.73 L 15.65 14.50 L 16.02 20.42 L 11.65 16.41 L 6.72 19.69 L 8.01 13.91 L 2.70 11.27 L 8.35 9.50 L 7.98 3.58 L 12.35 7.59 Z"
      }
    ]
  ]
};

export const PavoDial = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 17.28 4.31 L 15.99 10.09 L 21.30 12.73 L 15.65 14.50 L 16.02 20.42 L 11.65 16.41 L 6.72 19.69 L 8.01 13.91 L 2.70 11.27 L 8.35 9.50 L 7.98 3.58 L 12.35 7.59 Z" />
      {children}
    </svg>
  );
});

export default PavoDial;
