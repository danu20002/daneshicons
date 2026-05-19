import React from 'react';

export const iconData = {
  "id": "YearIcon",
  "name": "YearIcon",
  "category": "NT",
  "nodes": [
    [
      "path",
      {
        "d": "M 16.84 2.70 L 16.55 9.10 L 22.47 11.55 L 16.79 14.49 L 17.63 20.84 L 12.23 17.39 L 7.16 21.30 L 7.45 14.90 L 1.53 12.45 L 7.21 9.51 L 6.37 3.16 L 11.77 6.61 Z"
      }
    ]
  ]
};

export const YearIcon = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 16.84 2.70 L 16.55 9.10 L 22.47 11.55 L 16.79 14.49 L 17.63 20.84 L 12.23 17.39 L 7.16 21.30 L 7.45 14.90 L 1.53 12.45 L 7.21 9.51 L 6.37 3.16 L 11.77 6.61 Z" />
      {children}
    </svg>
  );
});

export default YearIcon;
