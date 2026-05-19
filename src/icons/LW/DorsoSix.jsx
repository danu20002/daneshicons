import React from 'react';

export const iconData = {
  "id": "DorsoSix",
  "name": "DorsoSix",
  "category": "LW",
  "nodes": [
    [
      "path",
      {
        "d": "M 9.59 9.30 L 13.59 9.30"
      }
    ],
    [
      "path",
      {
        "d": "M 15.54 11.27 L 13.54 14.73"
      }
    ],
    [
      "path",
      {
        "d": "M 10.86 15.44 L 8.86 11.97"
      }
    ]
  ]
};

export const DorsoSix = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 9.59 9.30 L 13.59 9.30" />
      <path d="M 15.54 11.27 L 13.54 14.73" />
      <path d="M 10.86 15.44 L 8.86 11.97" />
      {children}
    </svg>
  );
});

export default DorsoSix;
