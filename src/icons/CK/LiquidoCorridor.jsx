import React from 'react';

export const iconData = {
  "id": "LiquidoCorridor",
  "name": "LiquidoCorridor",
  "category": "CK",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.58 3.45 Q 17.41 2.41 19.04 9.68"
      }
    ],
    [
      "path",
      {
        "d": "M 16.88 16.91 A 5.01 5.82 49 0 1 16.51 2.11"
      }
    ]
  ]
};

export const LiquidoCorridor = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.58 3.45 Q 17.41 2.41 19.04 9.68" />
      <path d="M 16.88 16.91 A 5.01 5.82 49 0 1 16.51 2.11" />
      {children}
    </svg>
  );
});

export default LiquidoCorridor;
