import React from 'react';

export const iconData = {
  "id": "TyphoSuperb",
  "name": "TyphoSuperb",
  "category": "FI",
  "nodes": [
    [
      "path",
      {
        "d": "M 9.40 13.00 L 21.33 6.21"
      }
    ],
    [
      "path",
      {
        "d": "M 2.51 11.81 L 21.96 2.42"
      }
    ]
  ]
};

export const TyphoSuperb = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 9.40 13.00 L 21.33 6.21" />
      <path d="M 2.51 11.81 L 21.96 2.42" />
      {children}
    </svg>
  );
});

export default TyphoSuperb;
