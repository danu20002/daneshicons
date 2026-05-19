import React from 'react';

export const iconData = {
  "id": "MirageKettle",
  "name": "MirageKettle",
  "category": "AJ",
  "nodes": [
    [
      "path",
      {
        "d": "M 2.57 12.00 a 9.43 9.43 0 1 0 18.85 0 a 9.43 9.43 0 1 0 -18.85 0"
      }
    ],
    [
      "path",
      {
        "d": "M 2.57 12.00 a 9.43 2.8278106528334317 0 1 0 18.85 0 a 9.43 2.8278106528334317 0 1 0 -18.85 0"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 2.57 A 2 2 0 0 0 12.00 21.43"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 2.57 A 2 2 0 0 1 12.00 21.43"
      }
    ]
  ]
};

export const MirageKettle = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 2.57 12.00 a 9.43 9.43 0 1 0 18.85 0 a 9.43 9.43 0 1 0 -18.85 0" />
      <path d="M 2.57 12.00 a 9.43 2.8278106528334317 0 1 0 18.85 0 a 9.43 2.8278106528334317 0 1 0 -18.85 0" />
      <path d="M 12.00 2.57 A 2 2 0 0 0 12.00 21.43" />
      <path d="M 12.00 2.57 A 2 2 0 0 1 12.00 21.43" />
      {children}
    </svg>
  );
});

export default MirageKettle;
