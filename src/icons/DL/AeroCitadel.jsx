import React from 'react';

export const iconData = {
  "id": "AeroCitadel",
  "name": "AeroCitadel",
  "category": "DL",
  "nodes": [
    [
      "path",
      {
        "d": "M 14.01 20.73 L 4.32 16.61 L 5.25 6.11 L 15.51 3.76 L 20.92 12.79 Z"
      }
    ]
  ]
};

export const AeroCitadel = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 14.01 20.73 L 4.32 16.61 L 5.25 6.11 L 15.51 3.76 L 20.92 12.79 Z" />
      {children}
    </svg>
  );
});

export default AeroCitadel;
