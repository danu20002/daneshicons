import React from 'react';

export const iconData = {
  "id": "XerofiloLive",
  "name": "XerofiloLive",
  "category": "AM",
  "nodes": [
    [
      "path",
      {
        "d": "M 11.84 3.78 L 18.32 6.75 L 20.05 13.67 L 15.71 19.33 L 8.58 19.47 L 4.03 13.98 L 5.48 7.00 Z"
      }
    ]
  ]
};

export const XerofiloLive = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 11.84 3.78 L 18.32 6.75 L 20.05 13.67 L 15.71 19.33 L 8.58 19.47 L 4.03 13.98 L 5.48 7.00 Z" />
      {children}
    </svg>
  );
});

export default XerofiloLive;
