import React from 'react';

export const iconData = {
  "id": "UmidoMiracle",
  "name": "UmidoMiracle",
  "category": "AI",
  "nodes": [
    [
      "path",
      {
        "d": "M 12.69 12.36 L 11.21 14.94 L 12.52 17.58 L 10.60 15.06 L 9.10 14.18 L 11.00 15.30 L 13.48 15.62 L 12.84 15.46 L 10.68 17.05 L 8.40 19.02 L 6.10 17.30 L 8.72 17.13 L 7.51 15.95 L 7.97 15.86 L 8.37 17.08 L 5.96 14.95"
      }
    ]
  ]
};

export const UmidoMiracle = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 12.69 12.36 L 11.21 14.94 L 12.52 17.58 L 10.60 15.06 L 9.10 14.18 L 11.00 15.30 L 13.48 15.62 L 12.84 15.46 L 10.68 17.05 L 8.40 19.02 L 6.10 17.30 L 8.72 17.13 L 7.51 15.95 L 7.97 15.86 L 8.37 17.08 L 5.96 14.95" />
      {children}
    </svg>
  );
});

export default UmidoMiracle;
