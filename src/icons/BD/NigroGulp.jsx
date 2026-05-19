import React from 'react';

export const iconData = {
  "id": "NigroGulp",
  "name": "NigroGulp",
  "category": "BD",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.00 6.42 L 20.00 6.42 L 20.00 17.58 L 4.00 17.58 Z"
      }
    ],
    [
      "path",
      {
        "d": "M 4.00 6.42 L 8.26 2.16 L 24.26 2.16 L 20.00 6.42"
      }
    ],
    [
      "path",
      {
        "d": "M 20.00 6.42 L 24.26 2.16 L 24.26 13.33 L 20.00 17.58"
      }
    ]
  ]
};

export const NigroGulp = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.00 6.42 L 20.00 6.42 L 20.00 17.58 L 4.00 17.58 Z" />
      <path d="M 4.00 6.42 L 8.26 2.16 L 24.26 2.16 L 20.00 6.42" />
      <path d="M 20.00 6.42 L 24.26 2.16 L 24.26 13.33 L 20.00 17.58" />
      {children}
    </svg>
  );
});

export default NigroGulp;
