import React from 'react';

export const iconData = {
  "id": "SteatoTalk",
  "name": "SteatoTalk",
  "category": "EO",
  "nodes": [
    [
      "path",
      {
        "d": "M 5.68 12.00 L 18.32 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 5.68 L 12.00 18.32"
      }
    ],
    [
      "path",
      {
        "d": "M 7.58 7.58 L 16.42 16.42"
      }
    ],
    [
      "path",
      {
        "d": "M 7.58 16.42 L 16.42 7.58"
      }
    ],
    [
      "path",
      {
        "d": "M 1.89 12.00 a 10.11 10.11 0 1 0 20.23 0 a 10.11 10.11 0 1 0 -20.23 0"
      }
    ]
  ]
};

export const SteatoTalk = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 5.68 12.00 L 18.32 12.00" />
      <path d="M 12.00 5.68 L 12.00 18.32" />
      <path d="M 7.58 7.58 L 16.42 16.42" />
      <path d="M 7.58 16.42 L 16.42 7.58" />
      <path d="M 1.89 12.00 a 10.11 10.11 0 1 0 20.23 0 a 10.11 10.11 0 1 0 -20.23 0" />
      {children}
    </svg>
  );
});

export default SteatoTalk;
