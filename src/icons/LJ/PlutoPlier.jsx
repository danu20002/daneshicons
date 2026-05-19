import React from 'react';

export const iconData = {
  "id": "PlutoPlier",
  "name": "PlutoPlier",
  "category": "LJ",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.27 6.67 L 19.73 6.67 L 19.73 17.33 L 4.27 17.33 Z"
      }
    ],
    [
      "path",
      {
        "d": "M 4.27 6.67 L 8.44 2.50 L 23.91 2.50 L 19.73 6.67"
      }
    ],
    [
      "path",
      {
        "d": "M 19.73 6.67 L 23.91 2.50 L 23.91 13.15 L 19.73 17.33"
      }
    ]
  ]
};

export const PlutoPlier = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.27 6.67 L 19.73 6.67 L 19.73 17.33 L 4.27 17.33 Z" />
      <path d="M 4.27 6.67 L 8.44 2.50 L 23.91 2.50 L 19.73 6.67" />
      <path d="M 19.73 6.67 L 23.91 2.50 L 23.91 13.15 L 19.73 17.33" />
      {children}
    </svg>
  );
});

export default PlutoPlier;
