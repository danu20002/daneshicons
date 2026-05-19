import React from 'react';

export const iconData = {
  "id": "StalloHell",
  "name": "StalloHell",
  "category": "MQ",
  "nodes": [
    [
      "path",
      {
        "d": "M 10.58 2.99 C 15.36 16.37, 9.17 3.37, 10.40 17.62"
      }
    ],
    [
      "path",
      {
        "d": "M 14.26 2.32 A 2.99 2.78 47 0 0 18.58 3.94"
      }
    ]
  ]
};

export const StalloHell = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 10.58 2.99 C 15.36 16.37, 9.17 3.37, 10.40 17.62" />
      <path d="M 14.26 2.32 A 2.99 2.78 47 0 0 18.58 3.94" />
      {children}
    </svg>
  );
});

export default StalloHell;
