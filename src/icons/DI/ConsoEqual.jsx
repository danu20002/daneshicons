import React from 'react';

export const iconData = {
  "id": "ConsoEqual",
  "name": "ConsoEqual",
  "category": "DI",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.33 6.20 L 20.67 6.20 L 20.67 17.80 L 3.33 17.80 Z"
      }
    ],
    [
      "path",
      {
        "d": "M 3.33 6.20 L 7.27 2.26 L 24.61 2.26 L 20.67 6.20"
      }
    ],
    [
      "path",
      {
        "d": "M 20.67 6.20 L 24.61 2.26 L 24.61 13.86 L 20.67 17.80"
      }
    ]
  ]
};

export const ConsoEqual = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.33 6.20 L 20.67 6.20 L 20.67 17.80 L 3.33 17.80 Z" />
      <path d="M 3.33 6.20 L 7.27 2.26 L 24.61 2.26 L 20.67 6.20" />
      <path d="M 20.67 6.20 L 24.61 2.26 L 24.61 13.86 L 20.67 17.80" />
      {children}
    </svg>
  );
});

export default ConsoEqual;
