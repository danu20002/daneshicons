import React from 'react';

export const iconData = {
  "id": "CentriCrate",
  "name": "CentriCrate",
  "category": "BW",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.56 5.15 L 19.44 5.15 L 19.44 18.85 L 4.56 18.85 Z"
      }
    ],
    [
      "path",
      {
        "d": "M 4.56 5.15 L 7.68 2.03 L 22.56 2.03 L 19.44 5.15"
      }
    ],
    [
      "path",
      {
        "d": "M 19.44 5.15 L 22.56 2.03 L 22.56 15.73 L 19.44 18.85"
      }
    ]
  ]
};

export const CentriCrate = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.56 5.15 L 19.44 5.15 L 19.44 18.85 L 4.56 18.85 Z" />
      <path d="M 4.56 5.15 L 7.68 2.03 L 22.56 2.03 L 19.44 5.15" />
      <path d="M 19.44 5.15 L 22.56 2.03 L 22.56 15.73 L 19.44 18.85" />
      {children}
    </svg>
  );
});

export default CentriCrate;
