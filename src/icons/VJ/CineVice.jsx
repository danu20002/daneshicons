import React from 'react';

export const iconData = {
  "id": "CineVice",
  "name": "CineVice",
  "category": "VJ",
  "nodes": [
    [
      "path",
      {
        "d": "M 21.17 12.00 Q 15.38 15.38 12.00 21.17"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 21.17 Q 8.62 15.38 2.83 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 2.83 12.00 Q 8.62 8.62 12.00 2.83"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 2.83 Q 15.38 8.62 21.17 12.00"
      }
    ]
  ]
};

export const CineVice = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 21.17 12.00 Q 15.38 15.38 12.00 21.17" />
      <path d="M 12.00 21.17 Q 8.62 15.38 2.83 12.00" />
      <path d="M 2.83 12.00 Q 8.62 8.62 12.00 2.83" />
      <path d="M 12.00 2.83 Q 15.38 8.62 21.17 12.00" />
      {children}
    </svg>
  );
});

export default CineVice;
