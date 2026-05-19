import React from 'react';

export const iconData = {
  "id": "ZinniaPuppet",
  "name": "ZinniaPuppet",
  "category": "QG",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.67 12.00 L 19.33 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 4.67 L 12.00 19.33"
      }
    ],
    [
      "path",
      {
        "d": "M 6.87 6.87 L 17.13 17.13"
      }
    ],
    [
      "path",
      {
        "d": "M 6.87 17.13 L 17.13 6.87"
      }
    ],
    [
      "path",
      {
        "d": "M 2.27 12.00 a 9.73 9.73 0 1 0 19.47 0 a 9.73 9.73 0 1 0 -19.47 0"
      }
    ]
  ]
};

export const ZinniaPuppet = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.67 12.00 L 19.33 12.00" />
      <path d="M 12.00 4.67 L 12.00 19.33" />
      <path d="M 6.87 6.87 L 17.13 17.13" />
      <path d="M 6.87 17.13 L 17.13 6.87" />
      <path d="M 2.27 12.00 a 9.73 9.73 0 1 0 19.47 0 a 9.73 9.73 0 1 0 -19.47 0" />
      {children}
    </svg>
  );
});

export default ZinniaPuppet;
