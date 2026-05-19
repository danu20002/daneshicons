import React from 'react';

export const iconData = {
  "id": "ZeoChain",
  "name": "ZeoChain",
  "category": "RA",
  "nodes": [
    [
      "path",
      {
        "d": "M 17.47 20.58 L 10.26 6.80 L 17.96 12.20"
      }
    ],
    [
      "path",
      {
        "d": "M 3.70 19.50 L 4.23 15.49"
      }
    ]
  ]
};

export const ZeoChain = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 17.47 20.58 L 10.26 6.80 L 17.96 12.20" />
      <path d="M 3.70 19.50 L 4.23 15.49" />
      {children}
    </svg>
  );
});

export default ZeoChain;
