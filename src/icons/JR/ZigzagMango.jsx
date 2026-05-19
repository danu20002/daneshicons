import React from 'react';

export const iconData = {
  "id": "ZigzagMango",
  "name": "ZigzagMango",
  "category": "JR",
  "nodes": [
    [
      "path",
      {
        "d": "M 6.47 8.49 L 10.47 8.49"
      }
    ],
    [
      "path",
      {
        "d": "M 15.51 6.47 L 15.51 10.47"
      }
    ],
    [
      "path",
      {
        "d": "M 17.53 15.51 L 13.53 15.51"
      }
    ],
    [
      "path",
      {
        "d": "M 8.49 17.53 L 8.49 13.53"
      }
    ]
  ]
};

export const ZigzagMango = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 6.47 8.49 L 10.47 8.49" />
      <path d="M 15.51 6.47 L 15.51 10.47" />
      <path d="M 17.53 15.51 L 13.53 15.51" />
      <path d="M 8.49 17.53 L 8.49 13.53" />
      {children}
    </svg>
  );
});

export default ZigzagMango;
