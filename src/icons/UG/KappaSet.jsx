import React from 'react';

export const iconData = {
  "id": "KappaSet",
  "name": "KappaSet",
  "category": "UG",
  "nodes": [
    [
      "path",
      {
        "d": "M 6.65 5.22 L 15.20 3.98 L 20.55 10.76 L 17.35 18.78 L 8.80 20.02 L 3.45 13.24 Z"
      }
    ]
  ]
};

export const KappaSet = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 6.65 5.22 L 15.20 3.98 L 20.55 10.76 L 17.35 18.78 L 8.80 20.02 L 3.45 13.24 Z" />
      {children}
    </svg>
  );
});

export default KappaSet;
