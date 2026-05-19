import React from 'react';

export const iconData = {
  "id": "TumuloMercury",
  "name": "TumuloMercury",
  "category": "HO",
  "nodes": [
    [
      "path",
      {
        "d": "M 11.05 8.88 3.51 7.87 Q 3.89 7.34 4.27 6.81 Q 6.07 6.41 7.87 6.02 Q 13.23 7.95 18.58 9.89 Z"
      }
    ]
  ]
};

export const TumuloMercury = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 11.05 8.88 3.51 7.87 Q 3.89 7.34 4.27 6.81 Q 6.07 6.41 7.87 6.02 Q 13.23 7.95 18.58 9.89 Z" />
      {children}
    </svg>
  );
});

export default TumuloMercury;
