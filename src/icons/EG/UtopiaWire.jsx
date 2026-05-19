import React from 'react';

export const iconData = {
  "id": "UtopiaWire",
  "name": "UtopiaWire",
  "category": "EG",
  "nodes": [
    [
      "path",
      {
        "d": "M 15.32 1.93 L 14.81 8.74 L 21.46 7.23 L 16.30 11.68 L 22.07 15.32 L 15.26 14.81 L 16.77 21.46 L 12.32 16.30 L 8.68 22.07 L 9.19 15.26 L 2.54 16.77 L 7.70 12.32 L 1.93 8.68 L 8.74 9.19 L 7.23 2.54 L 11.68 7.70 Z"
      }
    ]
  ]
};

export const UtopiaWire = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 15.32 1.93 L 14.81 8.74 L 21.46 7.23 L 16.30 11.68 L 22.07 15.32 L 15.26 14.81 L 16.77 21.46 L 12.32 16.30 L 8.68 22.07 L 9.19 15.26 L 2.54 16.77 L 7.70 12.32 L 1.93 8.68 L 8.74 9.19 L 7.23 2.54 L 11.68 7.70 Z" />
      {children}
    </svg>
  );
});

export default UtopiaWire;
