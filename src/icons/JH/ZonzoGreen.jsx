import React from 'react';

export const iconData = {
  "id": "ZonzoGreen",
  "name": "ZonzoGreen",
  "category": "JH",
  "nodes": [
    [
      "path",
      {
        "d": "M 16.63 19.73 L 8.84 20.43 L 3.44 14.79 L 4.48 7.05 L 11.18 3.03 L 18.50 5.77 L 20.93 13.20 Z"
      }
    ]
  ]
};

export const ZonzoGreen = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 16.63 19.73 L 8.84 20.43 L 3.44 14.79 L 4.48 7.05 L 11.18 3.03 L 18.50 5.77 L 20.93 13.20 Z" />
      {children}
    </svg>
  );
});

export default ZonzoGreen;
