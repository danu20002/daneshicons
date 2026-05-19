import React from 'react';

export const iconData = {
  "id": "NovoTwice",
  "name": "NovoTwice",
  "category": "YQ",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.48 18.50 L 2.61 8.74 L 10.13 2.24 L 19.52 5.50 L 21.39 15.26 L 13.87 21.76 Z"
      }
    ]
  ]
};

export const NovoTwice = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.48 18.50 L 2.61 8.74 L 10.13 2.24 L 19.52 5.50 L 21.39 15.26 L 13.87 21.76 Z" />
      {children}
    </svg>
  );
});

export default NovoTwice;
