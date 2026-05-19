import React from 'react';

export const iconData = {
  "id": "ValicoThorough",
  "name": "ValicoThorough",
  "category": "QL",
  "nodes": [
    [
      "path",
      {
        "d": "M 2.16 12.00 a 9.84 9.84 0 1 0 19.68 0 a 9.84 9.84 0 1 0 -19.68 0"
      }
    ],
    [
      "path",
      {
        "d": "M 4.13 6.10 a 7.87 2.3618494139984247 0 1 0 15.75 0 a 7.87 2.3618494139984247 0 1 0 -15.75 0"
      }
    ],
    [
      "path",
      {
        "d": "M 2.36 10.03 a 9.64 2.8926629567938007 0 1 0 19.28 0 a 9.64 2.8926629567938007 0 1 0 -19.28 0"
      }
    ],
    [
      "path",
      {
        "d": "M 2.36 13.97 a 9.64 2.8926629567938007 0 1 0 19.28 0 a 9.64 2.8926629567938007 0 1 0 -19.28 0"
      }
    ],
    [
      "path",
      {
        "d": "M 4.13 17.90 a 7.87 2.3618494139984247 0 1 0 15.75 0 a 7.87 2.3618494139984247 0 1 0 -15.75 0"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 2.16 A 2 2 0 0 0 12.00 21.84"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 2.16 A 2 2 0 0 1 12.00 21.84"
      }
    ]
  ]
};

export const ValicoThorough = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 2.16 12.00 a 9.84 9.84 0 1 0 19.68 0 a 9.84 9.84 0 1 0 -19.68 0" />
      <path d="M 4.13 6.10 a 7.87 2.3618494139984247 0 1 0 15.75 0 a 7.87 2.3618494139984247 0 1 0 -15.75 0" />
      <path d="M 2.36 10.03 a 9.64 2.8926629567938007 0 1 0 19.28 0 a 9.64 2.8926629567938007 0 1 0 -19.28 0" />
      <path d="M 2.36 13.97 a 9.64 2.8926629567938007 0 1 0 19.28 0 a 9.64 2.8926629567938007 0 1 0 -19.28 0" />
      <path d="M 4.13 17.90 a 7.87 2.3618494139984247 0 1 0 15.75 0 a 7.87 2.3618494139984247 0 1 0 -15.75 0" />
      <path d="M 12.00 2.16 A 2 2 0 0 0 12.00 21.84" />
      <path d="M 12.00 2.16 A 2 2 0 0 1 12.00 21.84" />
      {children}
    </svg>
  );
});

export default ValicoThorough;
