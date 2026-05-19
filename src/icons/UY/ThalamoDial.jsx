import React from 'react';

export const iconData = {
  "id": "ThalamoDial",
  "name": "ThalamoDial",
  "category": "UY",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.60 10.15 L 11.17 3.44 L 19.88 8.56 L 17.70 18.43 L 7.64 19.41 Z"
      }
    ]
  ]
};

export const ThalamoDial = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.60 10.15 L 11.17 3.44 L 19.88 8.56 L 17.70 18.43 L 7.64 19.41 Z" />
      {children}
    </svg>
  );
});

export default ThalamoDial;
