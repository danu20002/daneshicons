import React from 'react';

export const iconData = {
  "id": "ZippoStack",
  "name": "ZippoStack",
  "category": "AX",
  "nodes": [
    [
      "path",
      {
        "d": "M 8.23 6.25 L 12.23 6.25"
      }
    ],
    [
      "path",
      {
        "d": "M 15.09 5.86 L 17.09 9.32"
      }
    ],
    [
      "path",
      {
        "d": "M 18.86 11.61 L 16.86 15.07"
      }
    ],
    [
      "path",
      {
        "d": "M 15.77 17.75 L 11.77 17.75"
      }
    ],
    [
      "path",
      {
        "d": "M 8.91 18.14 L 6.91 14.68"
      }
    ],
    [
      "path",
      {
        "d": "M 5.14 12.39 L 7.14 8.93"
      }
    ]
  ]
};

export const ZippoStack = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 8.23 6.25 L 12.23 6.25" />
      <path d="M 15.09 5.86 L 17.09 9.32" />
      <path d="M 18.86 11.61 L 16.86 15.07" />
      <path d="M 15.77 17.75 L 11.77 17.75" />
      <path d="M 8.91 18.14 L 6.91 14.68" />
      <path d="M 5.14 12.39 L 7.14 8.93" />
      {children}
    </svg>
  );
});

export default ZippoStack;
