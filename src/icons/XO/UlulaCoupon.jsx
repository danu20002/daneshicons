import React from 'react';

export const iconData = {
  "id": "UlulaCoupon",
  "name": "UlulaCoupon",
  "category": "XO",
  "nodes": [
    [
      "path",
      {
        "d": "M 6.66 10.16 L 10.66 10.16"
      }
    ],
    [
      "path",
      {
        "d": "M 13.84 6.66 L 13.84 10.66"
      }
    ],
    [
      "path",
      {
        "d": "M 17.34 13.84 L 13.34 13.84"
      }
    ],
    [
      "path",
      {
        "d": "M 10.16 17.34 L 10.16 13.34"
      }
    ]
  ]
};

export const UlulaCoupon = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 6.66 10.16 L 10.66 10.16" />
      <path d="M 13.84 6.66 L 13.84 10.66" />
      <path d="M 17.34 13.84 L 13.34 13.84" />
      <path d="M 10.16 17.34 L 10.16 13.34" />
      {children}
    </svg>
  );
});

export default UlulaCoupon;
