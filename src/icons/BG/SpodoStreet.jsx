import React from 'react';

export const iconData = {
  "id": "SpodoStreet",
  "name": "SpodoStreet",
  "category": "BG",
  "nodes": [
    [
      "path",
      {
        "d": "M 20.14 6.73 L 19.52 18.11 L 8.51 21.04 L 2.32 11.48 L 9.50 2.63 Z"
      }
    ]
  ]
};

export const SpodoStreet = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 20.14 6.73 L 19.52 18.11 L 8.51 21.04 L 2.32 11.48 L 9.50 2.63 Z" />
      {children}
    </svg>
  );
});

export default SpodoStreet;
