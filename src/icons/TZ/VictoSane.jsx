import React from 'react';

export const iconData = {
  "id": "VictoSane",
  "name": "VictoSane",
  "category": "TZ",
  "nodes": [
    [
      "path",
      {
        "d": "M 11.93 12.21 16.27 3.47 Q 17.62 4.80 18.96 6.12 Q 17.26 9.03 15.56 11.94 Q 15.57 16.30 15.58 20.66 Q 11.58 20.80 7.58 20.94 Z"
      }
    ]
  ]
};

export const VictoSane = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 11.93 12.21 16.27 3.47 Q 17.62 4.80 18.96 6.12 Q 17.26 9.03 15.56 11.94 Q 15.57 16.30 15.58 20.66 Q 11.58 20.80 7.58 20.94 Z" />
      {children}
    </svg>
  );
});

export default VictoSane;
