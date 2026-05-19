import React from 'react';

export const iconData = {
  "id": "UrinoOuter",
  "name": "UrinoOuter",
  "category": "PT",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.69 5.45 L 20.31 5.45 L 20.31 18.55 L 3.69 18.55 Z"
      }
    ],
    [
      "path",
      {
        "d": "M 3.69 5.45 L 7.09 2.05 L 23.70 2.05 L 20.31 5.45"
      }
    ],
    [
      "path",
      {
        "d": "M 20.31 5.45 L 23.70 2.05 L 23.70 15.16 L 20.31 18.55"
      }
    ]
  ]
};

export const UrinoOuter = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.69 5.45 L 20.31 5.45 L 20.31 18.55 L 3.69 18.55 Z" />
      <path d="M 3.69 5.45 L 7.09 2.05 L 23.70 2.05 L 20.31 5.45" />
      <path d="M 20.31 5.45 L 23.70 2.05 L 23.70 15.16 L 20.31 18.55" />
      {children}
    </svg>
  );
});

export default UrinoOuter;
