import React from 'react';

export const iconData = {
  "id": "FernoHero",
  "name": "FernoHero",
  "category": "YV",
  "nodes": [
    [
      "path",
      {
        "d": "M 9.50 12.00 a 2.50 2.50 0 1 0 4.99 0 a 2.50 2.50 0 1 0 -4.99 0"
      }
    ],
    [
      "path",
      {
        "d": "M 5.87 12.00 a 6.13 6.13 0 1 0 12.25 0 a 6.13 6.13 0 1 0 -12.25 0"
      }
    ]
  ]
};

export const FernoHero = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 9.50 12.00 a 2.50 2.50 0 1 0 4.99 0 a 2.50 2.50 0 1 0 -4.99 0" />
      <path d="M 5.87 12.00 a 6.13 6.13 0 1 0 12.25 0 a 6.13 6.13 0 1 0 -12.25 0" />
      {children}
    </svg>
  );
});

export default FernoHero;
