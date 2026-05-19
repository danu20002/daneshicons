import React from 'react';

export const iconData = {
  "id": "AeroFan",
  "name": "AeroFan",
  "category": "KD",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.94 19.77 L 6.55 13.75 L 1.74 9.77 L 7.76 8.15 L 8.80 2.00 L 13.21 6.40 L 19.06 4.23 L 17.45 10.25 L 22.26 14.23 L 16.24 15.85 L 15.20 22.00 L 10.79 17.60 Z"
      }
    ]
  ]
};

export const AeroFan = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.94 19.77 L 6.55 13.75 L 1.74 9.77 L 7.76 8.15 L 8.80 2.00 L 13.21 6.40 L 19.06 4.23 L 17.45 10.25 L 22.26 14.23 L 16.24 15.85 L 15.20 22.00 L 10.79 17.60 Z" />
      {children}
    </svg>
  );
});

export default AeroFan;
