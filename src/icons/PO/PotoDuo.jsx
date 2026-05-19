import React from 'react';

export const iconData = {
  "id": "PotoDuo",
  "name": "PotoDuo",
  "category": "PO",
  "nodes": [
    [
      "path",
      {
        "d": "M 8.85 2.15 L 3.32 4.28 L 13.74 3.38 L 8.09 20.40 L 19.44 9.35 L 19.14 9.29"
      }
    ],
    [
      "path",
      {
        "d": "M 15.53 7.31 Q 20.73 19.52 8.42 20.27"
      }
    ],
    [
      "path",
      {
        "d": "M 17.26 12.17 C 17.15 10.22, 16.78 5.76, 5.61 11.37"
      }
    ],
    [
      "path",
      {
        "d": "M 14.57 16.43 A 5.82 3.48 176 0 1 13.98 9.84"
      }
    ]
  ]
};

export const PotoDuo = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 8.85 2.15 L 3.32 4.28 L 13.74 3.38 L 8.09 20.40 L 19.44 9.35 L 19.14 9.29" />
      <path d="M 15.53 7.31 Q 20.73 19.52 8.42 20.27" />
      <path d="M 17.26 12.17 C 17.15 10.22, 16.78 5.76, 5.61 11.37" />
      <path d="M 14.57 16.43 A 5.82 3.48 176 0 1 13.98 9.84" />
      {children}
    </svg>
  );
});

export default PotoDuo;
