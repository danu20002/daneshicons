import React from 'react';

export const iconData = {
  "id": "MassoReform",
  "name": "MassoReform",
  "category": "FT",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.45 15.48 L 7.04 11.32 L 4.71 6.33 L 10.11 7.36 L 13.26 2.85 L 15.08 8.04 L 20.55 8.52 L 16.96 12.68 L 19.29 17.67 L 13.89 16.64 L 10.74 21.15 L 8.92 15.96 Z"
      }
    ]
  ]
};

export const MassoReform = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.45 15.48 L 7.04 11.32 L 4.71 6.33 L 10.11 7.36 L 13.26 2.85 L 15.08 8.04 L 20.55 8.52 L 16.96 12.68 L 19.29 17.67 L 13.89 16.64 L 10.74 21.15 L 8.92 15.96 Z" />
      {children}
    </svg>
  );
});

export default MassoReform;
