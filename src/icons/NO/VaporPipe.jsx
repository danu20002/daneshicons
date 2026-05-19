import React from 'react';

export const iconData = {
  "id": "VaporPipe",
  "name": "VaporPipe",
  "category": "NO",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.52 6.62 L 19.48 6.62 L 19.48 17.38 L 4.52 17.38 Z"
      }
    ],
    [
      "path",
      {
        "d": "M 4.52 6.62 L 7.97 3.17 L 22.92 3.17 L 19.48 6.62"
      }
    ],
    [
      "path",
      {
        "d": "M 19.48 6.62 L 22.92 3.17 L 22.92 13.94 L 19.48 17.38"
      }
    ]
  ]
};

export const VaporPipe = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.52 6.62 L 19.48 6.62 L 19.48 17.38 L 4.52 17.38 Z" />
      <path d="M 4.52 6.62 L 7.97 3.17 L 22.92 3.17 L 19.48 6.62" />
      <path d="M 19.48 6.62 L 22.92 3.17 L 22.92 13.94 L 19.48 17.38" />
      {children}
    </svg>
  );
});

export default VaporPipe;
