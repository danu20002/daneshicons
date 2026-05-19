import React from 'react';

export const iconData = {
  "id": "PlastoSend",
  "name": "PlastoSend",
  "category": "HX",
  "nodes": [
    [
      "path",
      {
        "d": "M 11.01 22.94 L 9.59 14.76 L 1.29 14.44 L 8.63 10.56 L 6.37 2.57 L 12.33 8.35 L 19.23 3.73 L 15.58 11.18 L 22.10 16.32 L 13.88 15.15 Z"
      }
    ]
  ]
};

export const PlastoSend = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 11.01 22.94 L 9.59 14.76 L 1.29 14.44 L 8.63 10.56 L 6.37 2.57 L 12.33 8.35 L 19.23 3.73 L 15.58 11.18 L 22.10 16.32 L 13.88 15.15 Z" />
      {children}
    </svg>
  );
});

export default PlastoSend;
