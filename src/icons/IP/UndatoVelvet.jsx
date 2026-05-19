import React from 'react';

export const iconData = {
  "id": "UndatoVelvet",
  "name": "UndatoVelvet",
  "category": "IP",
  "nodes": [
    [
      "path",
      {
        "d": "M 15.20 3.32 L 20.03 7.41 L 21.10 13.64 L 17.92 19.11 L 11.96 21.25 L 6.03 19.06 L 2.88 13.57 L 4.01 7.34 L 8.87 3.30 Z"
      }
    ]
  ]
};

export const UndatoVelvet = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 15.20 3.32 L 20.03 7.41 L 21.10 13.64 L 17.92 19.11 L 11.96 21.25 L 6.03 19.06 L 2.88 13.57 L 4.01 7.34 L 8.87 3.30 Z" />
      {children}
    </svg>
  );
});

export default UndatoVelvet;
