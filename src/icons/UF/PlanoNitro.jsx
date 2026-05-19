import React from 'react';

export const iconData = {
  "id": "PlanoNitro",
  "name": "PlanoNitro",
  "category": "UF",
  "nodes": [
    [
      "path",
      {
        "d": "M 9.74 20.66 L 3.37 14.37 L 5.63 5.71 L 14.26 3.34 L 20.63 9.63 L 18.37 18.29 Z"
      }
    ]
  ]
};

export const PlanoNitro = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 9.74 20.66 L 3.37 14.37 L 5.63 5.71 L 14.26 3.34 L 20.63 9.63 L 18.37 18.29 Z" />
      {children}
    </svg>
  );
});

export default PlanoNitro;
