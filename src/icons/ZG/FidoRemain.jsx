import React from 'react';

export const iconData = {
  "id": "FidoRemain",
  "name": "FidoRemain",
  "category": "ZG",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.34 5.37 L 20.66 5.37 L 20.66 18.63 L 3.34 18.63 Z"
      }
    ],
    [
      "path",
      {
        "d": "M 3.34 5.37 L 8.19 0.52 L 25.51 0.52 L 20.66 5.37"
      }
    ],
    [
      "path",
      {
        "d": "M 20.66 5.37 L 25.51 0.52 L 25.51 13.78 L 20.66 18.63"
      }
    ]
  ]
};

export const FidoRemain = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.34 5.37 L 20.66 5.37 L 20.66 18.63 L 3.34 18.63 Z" />
      <path d="M 3.34 5.37 L 8.19 0.52 L 25.51 0.52 L 20.66 5.37" />
      <path d="M 20.66 5.37 L 25.51 0.52 L 25.51 13.78 L 20.66 18.63" />
      {children}
    </svg>
  );
});

export default FidoRemain;
