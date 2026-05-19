import React from 'react';

export const iconData = {
  "id": "PirouVerb",
  "name": "PirouVerb",
  "category": "OJ",
  "nodes": [
    [
      "path",
      {
        "d": "M 18.51 18.30 L 8.02 20.14 L 3.03 10.73 L 10.43 3.07 L 20.01 7.75 Z"
      }
    ]
  ]
};

export const PirouVerb = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 18.51 18.30 L 8.02 20.14 L 3.03 10.73 L 10.43 3.07 L 20.01 7.75 Z" />
      {children}
    </svg>
  );
});

export default PirouVerb;
