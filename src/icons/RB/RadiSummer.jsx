import React from 'react';

export const iconData = {
  "id": "RadiSummer",
  "name": "RadiSummer",
  "category": "RB",
  "nodes": [
    [
      "path",
      {
        "d": "M 7.56 11.81 7.47 8.30 Q 8.21 7.02 8.95 5.74 Q 10.11 7.12 11.26 8.49 Q 11.43 5.86 11.60 3.23 Q 13.73 4.03 15.85 4.82 Q 11.75 10.07 7.65 15.32 Z"
      }
    ]
  ]
};

export const RadiSummer = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 7.56 11.81 7.47 8.30 Q 8.21 7.02 8.95 5.74 Q 10.11 7.12 11.26 8.49 Q 11.43 5.86 11.60 3.23 Q 13.73 4.03 15.85 4.82 Q 11.75 10.07 7.65 15.32 Z" />
      {children}
    </svg>
  );
});

export default RadiSummer;
