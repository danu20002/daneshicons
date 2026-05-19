import React from 'react';

export const iconData = {
  "id": "EmberLadle",
  "name": "EmberLadle",
  "category": "AS",
  "nodes": [
    [
      "path",
      {
        "d": "M 9.56 12.00 a 2.44 2.44 0 1 0 4.87 0 a 2.44 2.44 0 1 0 -4.87 0"
      }
    ],
    [
      "path",
      {
        "d": "M 5.62 12.00 a 6.38 6.38 0 1 0 12.75 0 a 6.38 6.38 0 1 0 -12.75 0"
      }
    ]
  ]
};

export const EmberLadle = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 9.56 12.00 a 2.44 2.44 0 1 0 4.87 0 a 2.44 2.44 0 1 0 -4.87 0" />
      <path d="M 5.62 12.00 a 6.38 6.38 0 1 0 12.75 0 a 6.38 6.38 0 1 0 -12.75 0" />
      {children}
    </svg>
  );
});

export default EmberLadle;
