import React from 'react';

export const iconData = {
  "id": "TomboKnow",
  "name": "TomboKnow",
  "category": "QI",
  "nodes": [
    [
      "path",
      {
        "d": "M 12.28 11.64 7.68 10.79 Q 7.07 8.17 6.46 5.56 Q 11.28 6.20 16.09 6.84 Q 17.32 8.76 18.54 10.69 Q 17.70 11.59 16.87 12.50 Z"
      }
    ]
  ]
};

export const TomboKnow = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 12.28 11.64 7.68 10.79 Q 7.07 8.17 6.46 5.56 Q 11.28 6.20 16.09 6.84 Q 17.32 8.76 18.54 10.69 Q 17.70 11.59 16.87 12.50 Z" />
      {children}
    </svg>
  );
});

export default TomboKnow;
