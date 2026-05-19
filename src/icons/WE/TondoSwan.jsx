import React from 'react';

export const iconData = {
  "id": "TondoSwan",
  "name": "TondoSwan",
  "category": "WE",
  "nodes": [
    [
      "path",
      {
        "d": "M 12.57 13.06 7.04 10.57 Q 11.00 8.60 14.95 6.63 Q 15.90 7.27 16.85 7.90 Q 18.37 7.05 19.90 6.19 Q 20.32 9.49 20.74 12.78 Q 20.02 12.73 19.31 12.68 Q 18.70 14.12 18.10 15.56 Z"
      }
    ]
  ]
};

export const TondoSwan = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 12.57 13.06 7.04 10.57 Q 11.00 8.60 14.95 6.63 Q 15.90 7.27 16.85 7.90 Q 18.37 7.05 19.90 6.19 Q 20.32 9.49 20.74 12.78 Q 20.02 12.73 19.31 12.68 Q 18.70 14.12 18.10 15.56 Z" />
      {children}
    </svg>
  );
});

export default TondoSwan;
