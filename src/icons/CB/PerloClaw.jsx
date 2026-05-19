import React from 'react';

export const iconData = {
  "id": "PerloClaw",
  "name": "PerloClaw",
  "category": "CB",
  "nodes": [
    [
      "path",
      {
        "d": "M 15.78 20.72 L 11.21 15.53 L 4.88 18.29 L 8.40 12.34 L 3.82 7.17 L 10.56 8.68 L 14.07 2.73 L 14.71 9.61 L 21.46 11.10 L 15.11 13.84 Z"
      }
    ]
  ]
};

export const PerloClaw = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 15.78 20.72 L 11.21 15.53 L 4.88 18.29 L 8.40 12.34 L 3.82 7.17 L 10.56 8.68 L 14.07 2.73 L 14.71 9.61 L 21.46 11.10 L 15.11 13.84 Z" />
      {children}
    </svg>
  );
});

export default PerloClaw;
