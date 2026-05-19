import React from 'react';

export const iconData = {
  "id": "TantoDevise",
  "name": "TantoDevise",
  "category": "EO",
  "nodes": [
    [
      "path",
      {
        "d": "M 21.14 12.00 Q 14.05 14.05 12.00 21.14"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 21.14 Q 9.95 14.05 2.86 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 2.86 12.00 Q 9.95 9.95 12.00 2.86"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 2.86 Q 14.05 9.95 21.14 12.00"
      }
    ]
  ]
};

export const TantoDevise = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 21.14 12.00 Q 14.05 14.05 12.00 21.14" />
      <path d="M 12.00 21.14 Q 9.95 14.05 2.86 12.00" />
      <path d="M 2.86 12.00 Q 9.95 9.95 12.00 2.86" />
      <path d="M 12.00 2.86 Q 14.05 9.95 21.14 12.00" />
      {children}
    </svg>
  );
});

export default TantoDevise;
