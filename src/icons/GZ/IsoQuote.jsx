import React from 'react';

export const iconData = {
  "id": "IsoQuote",
  "name": "IsoQuote",
  "category": "GZ",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.94 5.53 L 20.06 5.53 L 20.06 18.47 L 3.94 18.47 Z"
      }
    ],
    [
      "path",
      {
        "d": "M 3.94 5.53 L 8.52 0.96 L 24.63 0.96 L 20.06 5.53"
      }
    ],
    [
      "path",
      {
        "d": "M 20.06 5.53 L 24.63 0.96 L 24.63 13.89 L 20.06 18.47"
      }
    ]
  ]
};

export const IsoQuote = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.94 5.53 L 20.06 5.53 L 20.06 18.47 L 3.94 18.47 Z" />
      <path d="M 3.94 5.53 L 8.52 0.96 L 24.63 0.96 L 20.06 5.53" />
      <path d="M 20.06 5.53 L 24.63 0.96 L 24.63 13.89 L 20.06 18.47" />
      {children}
    </svg>
  );
});

export default IsoQuote;
