import React from 'react';

export const iconData = {
  "id": "PlastoGrudge",
  "name": "PlastoGrudge",
  "category": "LP",
  "nodes": [
    [
      "path",
      {
        "d": "M 21.10 15.38 L 14.59 15.13 L 13.62 21.57 L 10.58 15.81 L 4.52 18.19 L 7.99 12.68 L 2.90 8.62 L 9.41 8.87 L 10.38 2.43 L 13.42 8.19 L 19.48 5.81 L 16.01 11.32 Z"
      }
    ]
  ]
};

export const PlastoGrudge = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 21.10 15.38 L 14.59 15.13 L 13.62 21.57 L 10.58 15.81 L 4.52 18.19 L 7.99 12.68 L 2.90 8.62 L 9.41 8.87 L 10.38 2.43 L 13.42 8.19 L 19.48 5.81 L 16.01 11.32 Z" />
      {children}
    </svg>
  );
});

export default PlastoGrudge;
