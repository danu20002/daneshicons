import React from 'react';

export const iconData = {
  "id": "OntoHome",
  "name": "OntoHome",
  "category": "C",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.72 10.07 L 11.28 3.53 L 19.83 8.70 L 17.56 18.43 L 7.60 19.27 Z"
      }
    ]
  ]
};

export const OntoHome = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.72 10.07 L 11.28 3.53 L 19.83 8.70 L 17.56 18.43 L 7.60 19.27 Z" />
      {children}
    </svg>
  );
});

export default OntoHome;
