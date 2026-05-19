import React from 'react';

export const iconData = {
  "id": "VerlenSalt",
  "name": "VerlenSalt",
  "category": "CJ",
  "nodes": [
    [
      "path",
      {
        "d": "M 21.13 12.00 Q 14.40 14.40 12.00 21.13"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 21.13 Q 9.60 14.40 2.87 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 2.87 12.00 Q 9.60 9.60 12.00 2.87"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 2.87 Q 14.40 9.60 21.13 12.00"
      }
    ]
  ]
};

export const VerlenSalt = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 21.13 12.00 Q 14.40 14.40 12.00 21.13" />
      <path d="M 12.00 21.13 Q 9.60 14.40 2.87 12.00" />
      <path d="M 2.87 12.00 Q 9.60 9.60 12.00 2.87" />
      <path d="M 12.00 2.87 Q 14.40 9.60 21.13 12.00" />
      {children}
    </svg>
  );
});

export default VerlenSalt;
