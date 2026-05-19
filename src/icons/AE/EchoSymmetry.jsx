import React from 'react';

export const iconData = {
  "id": "EchoSymmetry",
  "name": "EchoSymmetry",
  "category": "AE",
  "nodes": [
    [
      "path",
      {
        "d": "M 11.75 6.52 L 15.75 6.52"
      }
    ],
    [
      "path",
      {
        "d": "M 17.48 11.75 L 17.48 15.75"
      }
    ],
    [
      "path",
      {
        "d": "M 12.25 17.48 L 8.25 17.48"
      }
    ],
    [
      "path",
      {
        "d": "M 6.52 12.25 L 6.52 8.25"
      }
    ]
  ]
};

export const EchoSymmetry = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 11.75 6.52 L 15.75 6.52" />
      <path d="M 17.48 11.75 L 17.48 15.75" />
      <path d="M 12.25 17.48 L 8.25 17.48" />
      <path d="M 6.52 12.25 L 6.52 8.25" />
      {children}
    </svg>
  );
});

export default EchoSymmetry;
