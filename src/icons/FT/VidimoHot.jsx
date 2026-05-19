import React from 'react';

export const iconData = {
  "id": "VidimoHot",
  "name": "VidimoHot",
  "category": "FT",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.37 8.00 L 8.96 7.67 L 11.15 2.53 L 14.23 7.20 L 19.78 6.53 L 17.27 11.53 L 20.63 16.00 L 15.04 16.33 L 12.85 21.47 L 9.77 16.80 L 4.22 17.47 L 6.73 12.47 Z"
      }
    ]
  ]
};

export const VidimoHot = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.37 8.00 L 8.96 7.67 L 11.15 2.53 L 14.23 7.20 L 19.78 6.53 L 17.27 11.53 L 20.63 16.00 L 15.04 16.33 L 12.85 21.47 L 9.77 16.80 L 4.22 17.47 L 6.73 12.47 Z" />
      {children}
    </svg>
  );
});

export default VidimoHot;
