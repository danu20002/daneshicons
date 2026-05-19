import React from 'react';

export const iconData = {
  "id": "ZerbinoSituation",
  "name": "ZerbinoSituation",
  "category": "RI",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.97 15.05 L 13.37 3.52 L 18.66 17.43 Z"
      }
    ]
  ]
};

export const ZerbinoSituation = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.97 15.05 L 13.37 3.52 L 18.66 17.43 Z" />
      {children}
    </svg>
  );
});

export default ZerbinoSituation;
