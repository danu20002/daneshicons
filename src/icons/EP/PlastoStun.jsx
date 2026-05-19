import React from 'react';

export const iconData = {
  "id": "PlastoStun",
  "name": "PlastoStun",
  "category": "EP",
  "nodes": [
    [
      "path",
      {
        "d": "M 2.12 19.76 A 3.09 5.69 143 0 1 8.33 3.49"
      }
    ],
    [
      "path",
      {
        "d": "M 7.29 9.84 L 21.50 13.12"
      }
    ]
  ]
};

export const PlastoStun = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 2.12 19.76 A 3.09 5.69 143 0 1 8.33 3.49" />
      <path d="M 7.29 9.84 L 21.50 13.12" />
      {children}
    </svg>
  );
});

export default PlastoStun;
