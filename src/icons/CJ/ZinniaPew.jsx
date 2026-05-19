import React from 'react';

export const iconData = {
  "id": "ZinniaPew",
  "name": "ZinniaPew",
  "category": "CJ",
  "nodes": [
    [
      "path",
      {
        "d": "M 11.84 8.88 L 15.84 8.88"
      }
    ],
    [
      "path",
      {
        "d": "M 14.78 13.42 L 12.78 16.89"
      }
    ],
    [
      "path",
      {
        "d": "M 9.38 13.69 L 7.38 10.23"
      }
    ]
  ]
};

export const ZinniaPew = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 11.84 8.88 L 15.84 8.88" />
      <path d="M 14.78 13.42 L 12.78 16.89" />
      <path d="M 9.38 13.69 L 7.38 10.23" />
      {children}
    </svg>
  );
});

export default ZinniaPew;
