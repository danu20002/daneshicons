import React from 'react';

export const iconData = {
  "id": "ZelanteRebate",
  "name": "ZelanteRebate",
  "category": "IZ",
  "nodes": [
    [
      "path",
      {
        "d": "M 15.22 5.02 Q 14.86 18.94 2.87 20.01"
      }
    ],
    [
      "path",
      {
        "d": "M 14.57 8.10 L 2.12 5.81"
      }
    ],
    [
      "path",
      {
        "d": "M 20.57 6.47 Q 9.64 17.37 13.04 20.56"
      }
    ],
    [
      "path",
      {
        "d": "M 16.15 19.35 L 12.78 2.01 L 21.10 4.93 L 19.76 18.08 L 18.64 8.18 L 5.48 8.62"
      }
    ]
  ]
};

export const ZelanteRebate = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 15.22 5.02 Q 14.86 18.94 2.87 20.01" />
      <path d="M 14.57 8.10 L 2.12 5.81" />
      <path d="M 20.57 6.47 Q 9.64 17.37 13.04 20.56" />
      <path d="M 16.15 19.35 L 12.78 2.01 L 21.10 4.93 L 19.76 18.08 L 18.64 8.18 L 5.48 8.62" />
      {children}
    </svg>
  );
});

export default ZelanteRebate;
