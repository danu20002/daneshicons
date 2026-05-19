import React from 'react';

export const iconData = {
  "id": "TantoVibration",
  "name": "TantoVibration",
  "category": "SN",
  "nodes": [
    [
      "path",
      {
        "d": "M 6.16 10.69 7.15 7.04 Q 8.70 5.22 10.25 3.39 Q 10.75 3.36 11.24 3.32 Q 11.85 4.93 12.45 6.55 Q 13.00 7.16 13.55 7.78 Q 16.36 11.78 19.17 15.78 Q 13.95 15.55 8.72 15.32 Q 6.95 14.82 5.18 14.33 Z"
      }
    ]
  ]
};

export const TantoVibration = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 6.16 10.69 7.15 7.04 Q 8.70 5.22 10.25 3.39 Q 10.75 3.36 11.24 3.32 Q 11.85 4.93 12.45 6.55 Q 13.00 7.16 13.55 7.78 Q 16.36 11.78 19.17 15.78 Q 13.95 15.55 8.72 15.32 Q 6.95 14.82 5.18 14.33 Z" />
      {children}
    </svg>
  );
});

export default TantoVibration;
