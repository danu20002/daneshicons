import React from 'react';

export const iconData = {
  "id": "CineDuke",
  "name": "CineDuke",
  "category": "JJ",
  "nodes": [
    [
      "path",
      {
        "d": "M 9.80 21.23 L 10.11 14.60 L 3.92 16.97 L 8.83 12.51 L 2.77 9.80 L 9.40 10.11 L 7.03 3.92 L 11.49 8.83 L 14.20 2.77 L 13.89 9.40 L 20.08 7.03 L 15.17 11.49 L 21.23 14.20 L 14.60 13.89 L 16.97 20.08 L 12.51 15.17 Z"
      }
    ]
  ]
};

export const CineDuke = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 9.80 21.23 L 10.11 14.60 L 3.92 16.97 L 8.83 12.51 L 2.77 9.80 L 9.40 10.11 L 7.03 3.92 L 11.49 8.83 L 14.20 2.77 L 13.89 9.40 L 20.08 7.03 L 15.17 11.49 L 21.23 14.20 L 14.60 13.89 L 16.97 20.08 L 12.51 15.17 Z" />
      {children}
    </svg>
  );
});

export default CineDuke;
