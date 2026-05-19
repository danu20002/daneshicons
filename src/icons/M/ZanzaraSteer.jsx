import React from 'react';

export const iconData = {
  "id": "ZanzaraSteer",
  "name": "ZanzaraSteer",
  "category": "M",
  "nodes": [
    [
      "path",
      {
        "d": "M 13.56 9.04 A 3.85 5.65 8 0 1 15.12 18.40"
      }
    ],
    [
      "path",
      {
        "d": "M 5.65 14.77 Q 17.74 10.65 17.90 11.77"
      }
    ],
    [
      "path",
      {
        "d": "M 13.73 6.59 Q 6.99 19.12 9.58 21.08"
      }
    ]
  ]
};

export const ZanzaraSteer = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 13.56 9.04 A 3.85 5.65 8 0 1 15.12 18.40" />
      <path d="M 5.65 14.77 Q 17.74 10.65 17.90 11.77" />
      <path d="M 13.73 6.59 Q 6.99 19.12 9.58 21.08" />
      {children}
    </svg>
  );
});

export default ZanzaraSteer;
