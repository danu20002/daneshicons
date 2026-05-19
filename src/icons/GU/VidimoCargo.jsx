import React from 'react';

export const iconData = {
  "id": "VidimoCargo",
  "name": "VidimoCargo",
  "category": "GU",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.77 6.91 Q 11.95 3.85 9.00 13.00"
      }
    ],
    [
      "path",
      {
        "d": "M 15.31 16.96 L 16.08 10.70"
      }
    ],
    [
      "path",
      {
        "d": "M 3.63 11.32 C 4.95 14.67, 10.72 16.92, 13.44 10.89"
      }
    ],
    [
      "path",
      {
        "d": "M 3.85 7.95 A 4.55 4.58 15 0 0 20.61 8.77"
      }
    ]
  ]
};

export const VidimoCargo = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.77 6.91 Q 11.95 3.85 9.00 13.00" />
      <path d="M 15.31 16.96 L 16.08 10.70" />
      <path d="M 3.63 11.32 C 4.95 14.67, 10.72 16.92, 13.44 10.89" />
      <path d="M 3.85 7.95 A 4.55 4.58 15 0 0 20.61 8.77" />
      {children}
    </svg>
  );
});

export default VidimoCargo;
