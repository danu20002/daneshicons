import React from 'react';

export const iconData = {
  "id": "ZodiacoPrecious",
  "name": "ZodiacoPrecious",
  "category": "XU",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.81 5.93 L 20.19 5.93 L 20.19 18.07 L 3.81 18.07 Z"
      }
    ],
    [
      "path",
      {
        "d": "M 3.81 5.93 L 7.11 2.63 L 23.49 2.63 L 20.19 5.93"
      }
    ],
    [
      "path",
      {
        "d": "M 20.19 5.93 L 23.49 2.63 L 23.49 14.77 L 20.19 18.07"
      }
    ]
  ]
};

export const ZodiacoPrecious = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.81 5.93 L 20.19 5.93 L 20.19 18.07 L 3.81 18.07 Z" />
      <path d="M 3.81 5.93 L 7.11 2.63 L 23.49 2.63 L 20.19 5.93" />
      <path d="M 20.19 5.93 L 23.49 2.63 L 23.49 14.77 L 20.19 18.07" />
      {children}
    </svg>
  );
});

export default ZodiacoPrecious;
