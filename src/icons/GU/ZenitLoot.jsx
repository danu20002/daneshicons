import React from 'react';

export const iconData = {
  "id": "ZenitLoot",
  "name": "ZenitLoot",
  "category": "GU",
  "nodes": [
    [
      "path",
      {
        "d": "M 6.12 19.45 A 2.56 6.12 54 0 1 14.44 11.51"
      }
    ],
    [
      "path",
      {
        "d": "M 8.47 15.45 Q 12.26 3.88 15.57 20.83"
      }
    ],
    [
      "path",
      {
        "d": "M 7.74 17.64 C 3.17 10.28, 21.26 10.73, 13.45 4.49"
      }
    ]
  ]
};

export const ZenitLoot = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 6.12 19.45 A 2.56 6.12 54 0 1 14.44 11.51" />
      <path d="M 8.47 15.45 Q 12.26 3.88 15.57 20.83" />
      <path d="M 7.74 17.64 C 3.17 10.28, 21.26 10.73, 13.45 4.49" />
      {children}
    </svg>
  );
});

export default ZenitLoot;
