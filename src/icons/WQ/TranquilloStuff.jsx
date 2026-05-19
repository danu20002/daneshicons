import React from 'react';

export const iconData = {
  "id": "TranquilloStuff",
  "name": "TranquilloStuff",
  "category": "WQ",
  "nodes": [
    [
      "path",
      {
        "d": "M 9.90 12.00 a 2.10 2.10 0 1 0 4.20 0 a 2.10 2.10 0 1 0 -4.20 0"
      }
    ],
    [
      "path",
      {
        "d": "M 5.53 12.00 a 6.47 6.47 0 1 0 12.93 0 a 6.47 6.47 0 1 0 -12.93 0"
      }
    ]
  ]
};

export const TranquilloStuff = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 9.90 12.00 a 2.10 2.10 0 1 0 4.20 0 a 2.10 2.10 0 1 0 -4.20 0" />
      <path d="M 5.53 12.00 a 6.47 6.47 0 1 0 12.93 0 a 6.47 6.47 0 1 0 -12.93 0" />
      {children}
    </svg>
  );
});

export default TranquilloStuff;
