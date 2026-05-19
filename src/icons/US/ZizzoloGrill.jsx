import React from 'react';

export const iconData = {
  "id": "ZizzoloGrill",
  "name": "ZizzoloGrill",
  "category": "US",
  "nodes": [
    [
      "path",
      {
        "d": "M 6.51 8.77 4.62 3.87 Q 9.34 7.09 14.07 10.32 Q 14.58 11.49 15.09 12.66 Q 17.27 14.33 19.45 16.00 Q 16.77 18.01 14.08 20.01 Q 13.35 18.77 12.62 17.54 Q 10.51 15.60 8.40 13.67 Z"
      }
    ]
  ]
};

export const ZizzoloGrill = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 6.51 8.77 4.62 3.87 Q 9.34 7.09 14.07 10.32 Q 14.58 11.49 15.09 12.66 Q 17.27 14.33 19.45 16.00 Q 16.77 18.01 14.08 20.01 Q 13.35 18.77 12.62 17.54 Q 10.51 15.60 8.40 13.67 Z" />
      {children}
    </svg>
  );
});

export default ZizzoloGrill;
