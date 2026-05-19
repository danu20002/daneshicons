import React from 'react';

export const iconData = {
  "id": "VolturaInvoke",
  "name": "VolturaInvoke",
  "category": "XQ",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.50 13.15 4.25 11.12 Q 3.92 8.76 3.58 6.40 Q 8.10 7.73 12.61 9.07 Q 16.15 12.40 19.70 15.74 Q 17.94 17.49 16.19 19.25 Q 11.14 18.15 6.10 17.05 Q 5.42 16.12 4.74 15.19 Z"
      }
    ]
  ]
};

export const VolturaInvoke = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.50 13.15 4.25 11.12 Q 3.92 8.76 3.58 6.40 Q 8.10 7.73 12.61 9.07 Q 16.15 12.40 19.70 15.74 Q 17.94 17.49 16.19 19.25 Q 11.14 18.15 6.10 17.05 Q 5.42 16.12 4.74 15.19 Z" />
      {children}
    </svg>
  );
});

export default VolturaInvoke;
