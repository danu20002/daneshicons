import React from 'react';

export const iconData = {
  "id": "UncialeVanish",
  "name": "UncialeVanish",
  "category": "LY",
  "nodes": [
    [
      "path",
      {
        "d": "M 7.99 11.07 10.26 7.70 Q 14.84 10.10 19.43 12.50 Q 18.56 13.23 17.69 13.96 Q 12.78 16.49 7.86 19.01 Q 6.79 16.73 5.71 14.44 Z"
      }
    ]
  ]
};

export const UncialeVanish = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 7.99 11.07 10.26 7.70 Q 14.84 10.10 19.43 12.50 Q 18.56 13.23 17.69 13.96 Q 12.78 16.49 7.86 19.01 Q 6.79 16.73 5.71 14.44 Z" />
      {children}
    </svg>
  );
});

export default UncialeVanish;
