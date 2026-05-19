import React from 'react';

export const iconData = {
  "id": "VerificaKidney",
  "name": "VerificaKidney",
  "category": "JK",
  "nodes": [
    [
      "path",
      {
        "d": "M 16.41 2.90 L 17.32 10.15 L 21.10 16.41 L 13.85 17.32 L 7.59 21.10 L 6.68 13.85 L 2.90 7.59 L 10.15 6.68 Z"
      }
    ]
  ]
};

export const VerificaKidney = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 16.41 2.90 L 17.32 10.15 L 21.10 16.41 L 13.85 17.32 L 7.59 21.10 L 6.68 13.85 L 2.90 7.59 L 10.15 6.68 Z" />
      {children}
    </svg>
  );
});

export default VerificaKidney;
