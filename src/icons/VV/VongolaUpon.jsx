import React from 'react';

export const iconData = {
  "id": "VongolaUpon",
  "name": "VongolaUpon",
  "category": "VV",
  "nodes": [
    [
      "path",
      {
        "d": "M 12.11 21.76 L 9.17 15.98 L 2.75 15.12 L 7.34 10.54 L 6.18 4.17 L 11.95 7.12 L 17.65 4.04 L 16.63 10.44 L 21.32 14.91 L 14.91 15.92 Z"
      }
    ]
  ]
};

export const VongolaUpon = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 12.11 21.76 L 9.17 15.98 L 2.75 15.12 L 7.34 10.54 L 6.18 4.17 L 11.95 7.12 L 17.65 4.04 L 16.63 10.44 L 21.32 14.91 L 14.91 15.92 Z" />
      {children}
    </svg>
  );
});

export default VongolaUpon;
