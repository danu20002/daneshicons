import React from 'react';

export const iconData = {
  "id": "VeneroPlum",
  "name": "VeneroPlum",
  "category": "SV",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.36 10.33 L 9.13 3.68 L 17.77 5.36 L 20.64 13.67 L 14.87 20.32 L 6.23 18.64 Z"
      }
    ]
  ]
};

export const VeneroPlum = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.36 10.33 L 9.13 3.68 L 17.77 5.36 L 20.64 13.67 L 14.87 20.32 L 6.23 18.64 Z" />
      {children}
    </svg>
  );
});

export default VeneroPlum;
