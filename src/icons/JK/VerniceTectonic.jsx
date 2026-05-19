import React from 'react';

export const iconData = {
  "id": "VerniceTectonic",
  "name": "VerniceTectonic",
  "category": "JK",
  "nodes": [
    [
      "path",
      {
        "d": "M 18.25 5.32 L 16.17 12.97 L 14.66 20.76 L 9.07 15.13 L 3.09 9.92 L 10.76 7.90 Z"
      }
    ]
  ]
};

export const VerniceTectonic = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 18.25 5.32 L 16.17 12.97 L 14.66 20.76 L 9.07 15.13 L 3.09 9.92 L 10.76 7.90 Z" />
      {children}
    </svg>
  );
});

export default VerniceTectonic;
