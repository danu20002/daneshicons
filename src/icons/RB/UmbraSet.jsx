import React from 'react';

export const iconData = {
  "id": "UmbraSet",
  "name": "UmbraSet",
  "category": "RB",
  "nodes": [
    [
      "path",
      {
        "d": "M 8.99 12.03 6.97 11.52 Q 13.37 15.54 19.76 19.55 Q 17.42 17.54 15.07 15.53 Q 16.05 16.97 17.04 18.42 Q 16.20 18.42 15.36 18.43 Q 14.54 18.24 13.71 18.06 Q 10.80 18.66 7.89 19.25 Q 9.44 15.90 11.00 12.55 Z"
      }
    ]
  ]
};

export const UmbraSet = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 8.99 12.03 6.97 11.52 Q 13.37 15.54 19.76 19.55 Q 17.42 17.54 15.07 15.53 Q 16.05 16.97 17.04 18.42 Q 16.20 18.42 15.36 18.43 Q 14.54 18.24 13.71 18.06 Q 10.80 18.66 7.89 19.25 Q 9.44 15.90 11.00 12.55 Z" />
      {children}
    </svg>
  );
});

export default UmbraSet;
