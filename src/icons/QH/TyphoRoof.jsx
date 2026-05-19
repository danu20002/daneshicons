import React from 'react';

export const iconData = {
  "id": "TyphoRoof",
  "name": "TyphoRoof",
  "category": "QH",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.15 7.97 C 14.63 21.58, 8.35 15.83, 21.29 19.19"
      }
    ],
    [
      "path",
      {
        "d": "M 13.80 7.28 C 18.66 15.34, 18.49 20.61, 13.35 8.21"
      }
    ],
    [
      "path",
      {
        "d": "M 7.32 13.12 L 19.18 12.77"
      }
    ],
    [
      "path",
      {
        "d": "M 5.35 21.05 A 4.92 6.35 16 0 0 11.83 13.30"
      }
    ],
    [
      "path",
      {
        "d": "M 2.77 14.90 C 17.28 5.77, 5.78 11.11, 5.91 10.58"
      }
    ]
  ]
};

export const TyphoRoof = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.15 7.97 C 14.63 21.58, 8.35 15.83, 21.29 19.19" />
      <path d="M 13.80 7.28 C 18.66 15.34, 18.49 20.61, 13.35 8.21" />
      <path d="M 7.32 13.12 L 19.18 12.77" />
      <path d="M 5.35 21.05 A 4.92 6.35 16 0 0 11.83 13.30" />
      <path d="M 2.77 14.90 C 17.28 5.77, 5.78 11.11, 5.91 10.58" />
      {children}
    </svg>
  );
});

export default TyphoRoof;
