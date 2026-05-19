import React from 'react';

export const iconData = {
  "id": "ZoccoloSyntax",
  "name": "ZoccoloSyntax",
  "category": "VP",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.91 5.53 L 19.09 5.53 L 19.09 18.47 L 4.91 18.47 Z"
      }
    ],
    [
      "path",
      {
        "d": "M 4.91 5.53 L 8.74 1.70 L 22.92 1.70 L 19.09 5.53"
      }
    ],
    [
      "path",
      {
        "d": "M 19.09 5.53 L 22.92 1.70 L 22.92 14.64 L 19.09 18.47"
      }
    ]
  ]
};

export const ZoccoloSyntax = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.91 5.53 L 19.09 5.53 L 19.09 18.47 L 4.91 18.47 Z" />
      <path d="M 4.91 5.53 L 8.74 1.70 L 22.92 1.70 L 19.09 5.53" />
      <path d="M 19.09 5.53 L 22.92 1.70 L 22.92 14.64 L 19.09 18.47" />
      {children}
    </svg>
  );
});

export default ZoccoloSyntax;
