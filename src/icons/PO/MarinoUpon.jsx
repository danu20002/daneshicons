import React from 'react';

export const iconData = {
  "id": "MarinoUpon",
  "name": "MarinoUpon",
  "category": "PO",
  "nodes": [
    [
      "path",
      {
        "d": "M 16.30 6.11 Q 2.63 2.28 19.76 18.52"
      }
    ],
    [
      "path",
      {
        "d": "M 6.68 20.11 C 17.74 19.95, 8.04 7.84, 14.69 7.40"
      }
    ],
    [
      "path",
      {
        "d": "M 9.32 17.71 L 18.17 2.63"
      }
    ]
  ]
};

export const MarinoUpon = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 16.30 6.11 Q 2.63 2.28 19.76 18.52" />
      <path d="M 6.68 20.11 C 17.74 19.95, 8.04 7.84, 14.69 7.40" />
      <path d="M 9.32 17.71 L 18.17 2.63" />
      {children}
    </svg>
  );
});

export default MarinoUpon;
