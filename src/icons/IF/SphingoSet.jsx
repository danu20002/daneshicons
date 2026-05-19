import React from 'react';

export const iconData = {
  "id": "SphingoSet",
  "name": "SphingoSet",
  "category": "IF",
  "nodes": [
    [
      "path",
      {
        "d": "M 10.87 7.99 L 14.87 7.99"
      }
    ],
    [
      "path",
      {
        "d": "M 15.47 9.69 L 16.70 13.49"
      }
    ],
    [
      "path",
      {
        "d": "M 15.27 14.58 L 12.03 16.94"
      }
    ],
    [
      "path",
      {
        "d": "M 10.55 15.91 L 7.32 13.56"
      }
    ],
    [
      "path",
      {
        "d": "M 7.83 11.83 L 9.07 8.03"
      }
    ]
  ]
};

export const SphingoSet = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 10.87 7.99 L 14.87 7.99" />
      <path d="M 15.47 9.69 L 16.70 13.49" />
      <path d="M 15.27 14.58 L 12.03 16.94" />
      <path d="M 10.55 15.91 L 7.32 13.56" />
      <path d="M 7.83 11.83 L 9.07 8.03" />
      {children}
    </svg>
  );
});

export default SphingoSet;
