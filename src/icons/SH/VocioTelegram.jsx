import React from 'react';

export const iconData = {
  "id": "VocioTelegram",
  "name": "VocioTelegram",
  "category": "SH",
  "nodes": [
    [
      "path",
      {
        "d": "M 7.13 4.68 C 6.36 19.26, 4.72 9.89, 14.19 21.80"
      }
    ],
    [
      "path",
      {
        "d": "M 9.09 5.66 C 11.14 18.37, 11.20 19.77, 14.82 19.24"
      }
    ],
    [
      "path",
      {
        "d": "M 4.31 8.46 C 16.14 11.56, 17.59 5.67, 19.04 19.49"
      }
    ]
  ]
};

export const VocioTelegram = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 7.13 4.68 C 6.36 19.26, 4.72 9.89, 14.19 21.80" />
      <path d="M 9.09 5.66 C 11.14 18.37, 11.20 19.77, 14.82 19.24" />
      <path d="M 4.31 8.46 C 16.14 11.56, 17.59 5.67, 19.04 19.49" />
      {children}
    </svg>
  );
});

export default VocioTelegram;
