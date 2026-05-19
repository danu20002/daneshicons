import React from 'react';

export const iconData = {
  "id": "TaphoMinister",
  "name": "TaphoMinister",
  "category": "ZZ",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.11 5.48 L 20.89 5.48 L 20.89 18.52 L 3.11 18.52 Z"
      }
    ],
    [
      "path",
      {
        "d": "M 3.11 5.48 L 6.22 2.38 L 23.99 2.38 L 20.89 5.48"
      }
    ],
    [
      "path",
      {
        "d": "M 20.89 5.48 L 23.99 2.38 L 23.99 15.41 L 20.89 18.52"
      }
    ]
  ]
};

export const TaphoMinister = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.11 5.48 L 20.89 5.48 L 20.89 18.52 L 3.11 18.52 Z" />
      <path d="M 3.11 5.48 L 6.22 2.38 L 23.99 2.38 L 20.89 5.48" />
      <path d="M 20.89 5.48 L 23.99 2.38 L 23.99 15.41 L 20.89 18.52" />
      {children}
    </svg>
  );
});

export default TaphoMinister;
