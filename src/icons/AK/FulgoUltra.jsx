import React from 'react';

export const iconData = {
  "id": "FulgoUltra",
  "name": "FulgoUltra",
  "category": "AK",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.62 6.89 L 20.38 6.89 L 20.38 17.11 L 3.62 17.11 Z"
      }
    ],
    [
      "path",
      {
        "d": "M 3.62 6.89 L 7.56 2.95 L 24.32 2.95 L 20.38 6.89"
      }
    ],
    [
      "path",
      {
        "d": "M 20.38 6.89 L 24.32 2.95 L 24.32 13.17 L 20.38 17.11"
      }
    ]
  ]
};

export const FulgoUltra = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.62 6.89 L 20.38 6.89 L 20.38 17.11 L 3.62 17.11 Z" />
      <path d="M 3.62 6.89 L 7.56 2.95 L 24.32 2.95 L 20.38 6.89" />
      <path d="M 20.38 6.89 L 24.32 2.95 L 24.32 13.17 L 20.38 17.11" />
      {children}
    </svg>
  );
});

export default FulgoUltra;
