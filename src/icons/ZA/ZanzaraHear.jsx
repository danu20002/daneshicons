import React from 'react';

export const iconData = {
  "id": "ZanzaraHear",
  "name": "ZanzaraHear",
  "category": "ZA",
  "nodes": [
    [
      "path",
      {
        "d": "M 9.79 7.44 L 13.79 7.44"
      }
    ],
    [
      "path",
      {
        "d": "M 16.56 9.79 L 16.56 13.79"
      }
    ],
    [
      "path",
      {
        "d": "M 14.21 16.56 L 10.21 16.56"
      }
    ],
    [
      "path",
      {
        "d": "M 7.44 14.21 L 7.44 10.21"
      }
    ]
  ]
};

export const ZanzaraHear = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 9.79 7.44 L 13.79 7.44" />
      <path d="M 16.56 9.79 L 16.56 13.79" />
      <path d="M 14.21 16.56 L 10.21 16.56" />
      <path d="M 7.44 14.21 L 7.44 10.21" />
      {children}
    </svg>
  );
});

export default ZanzaraHear;
