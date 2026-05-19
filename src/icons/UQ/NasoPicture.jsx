import React from 'react';

export const iconData = {
  "id": "NasoPicture",
  "name": "NasoPicture",
  "category": "UQ",
  "nodes": [
    [
      "path",
      {
        "d": "M 20.52 12.00 Q 14.68 14.68 12.00 20.52"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 20.52 Q 9.32 14.68 3.48 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 3.48 12.00 Q 9.32 9.32 12.00 3.48"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 3.48 Q 14.68 9.32 20.52 12.00"
      }
    ]
  ]
};

export const NasoPicture = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 20.52 12.00 Q 14.68 14.68 12.00 20.52" />
      <path d="M 12.00 20.52 Q 9.32 14.68 3.48 12.00" />
      <path d="M 3.48 12.00 Q 9.32 9.32 12.00 3.48" />
      <path d="M 12.00 3.48 Q 14.68 9.32 20.52 12.00" />
      {children}
    </svg>
  );
});

export default NasoPicture;
