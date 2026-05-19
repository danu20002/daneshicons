import React from 'react';

export const iconData = {
  "id": "CinePretend",
  "name": "CinePretend",
  "category": "UJ",
  "nodes": [
    [
      "path",
      {
        "d": "M 19.77 18.92 L 13.20 17.52 L 7.82 21.53 L 7.12 14.85 L 1.65 10.97 L 7.78 8.24 L 9.78 1.84 L 14.27 6.83 L 20.98 6.75 L 17.62 12.56 Z"
      }
    ]
  ]
};

export const CinePretend = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 19.77 18.92 L 13.20 17.52 L 7.82 21.53 L 7.12 14.85 L 1.65 10.97 L 7.78 8.24 L 9.78 1.84 L 14.27 6.83 L 20.98 6.75 L 17.62 12.56 Z" />
      {children}
    </svg>
  );
});

export default CinePretend;
