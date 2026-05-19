import React from 'react';

export const iconData = {
  "id": "TisicoShop",
  "name": "TisicoShop",
  "category": "SC",
  "nodes": [
    [
      "path",
      {
        "d": "M 16.49 20.89 L 4.94 19.02 L 3.14 7.45 L 13.59 2.17 L 21.84 10.48 Z"
      }
    ]
  ]
};

export const TisicoShop = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 16.49 20.89 L 4.94 19.02 L 3.14 7.45 L 13.59 2.17 L 21.84 10.48 Z" />
      {children}
    </svg>
  );
});

export default TisicoShop;
