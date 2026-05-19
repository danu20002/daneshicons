import React from 'react';

export const iconData = {
  "id": "TangoTally",
  "name": "TangoTally",
  "category": "PA",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.50 6.07 L 19.50 6.07 L 19.50 17.93 L 4.50 17.93 Z"
      }
    ],
    [
      "path",
      {
        "d": "M 4.50 6.07 L 8.53 2.05 L 23.53 2.05 L 19.50 6.07"
      }
    ],
    [
      "path",
      {
        "d": "M 19.50 6.07 L 23.53 2.05 L 23.53 13.90 L 19.50 17.93"
      }
    ]
  ]
};

export const TangoTally = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.50 6.07 L 19.50 6.07 L 19.50 17.93 L 4.50 17.93 Z" />
      <path d="M 4.50 6.07 L 8.53 2.05 L 23.53 2.05 L 19.50 6.07" />
      <path d="M 19.50 6.07 L 23.53 2.05 L 23.53 13.90 L 19.50 17.93" />
      {children}
    </svg>
  );
});

export default TangoTally;
