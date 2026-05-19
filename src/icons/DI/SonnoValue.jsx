import React from 'react';

export const iconData = {
  "id": "SonnoValue",
  "name": "SonnoValue",
  "category": "DI",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.34 5.88 L 20.66 5.88 L 20.66 18.12 L 3.34 18.12 Z"
      }
    ],
    [
      "path",
      {
        "d": "M 3.34 5.88 L 6.44 2.78 L 23.76 2.78 L 20.66 5.88"
      }
    ],
    [
      "path",
      {
        "d": "M 20.66 5.88 L 23.76 2.78 L 23.76 15.02 L 20.66 18.12"
      }
    ]
  ]
};

export const SonnoValue = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.34 5.88 L 20.66 5.88 L 20.66 18.12 L 3.34 18.12 Z" />
      <path d="M 3.34 5.88 L 6.44 2.78 L 23.76 2.78 L 20.66 5.88" />
      <path d="M 20.66 5.88 L 23.76 2.78 L 23.76 15.02 L 20.66 18.12" />
      {children}
    </svg>
  );
});

export default SonnoValue;
