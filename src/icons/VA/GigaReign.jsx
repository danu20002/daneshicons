import React from 'react';

export const iconData = {
  "id": "GigaReign",
  "name": "GigaReign",
  "category": "VA",
  "nodes": [
    [
      "path",
      {
        "d": "M 5.31 18.68 L 2.58 12.82 L 4.26 6.57 L 9.56 2.86 L 16.00 3.43 L 20.57 8.01 L 21.13 14.45 L 17.42 19.75 L 11.17 21.42 Z"
      }
    ]
  ]
};

export const GigaReign = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 5.31 18.68 L 2.58 12.82 L 4.26 6.57 L 9.56 2.86 L 16.00 3.43 L 20.57 8.01 L 21.13 14.45 L 17.42 19.75 L 11.17 21.42 Z" />
      {children}
    </svg>
  );
});

export default GigaReign;
