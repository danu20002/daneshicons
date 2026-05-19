import React from 'react';

export const iconData = {
  "id": "ZoppicoPlush",
  "name": "ZoppicoPlush",
  "category": "BR",
  "nodes": [
    [
      "path",
      {
        "d": "M 10.92 11.68 Q 10.94 12.09 12.99 10.29"
      }
    ],
    [
      "path",
      {
        "d": "M 3.02 18.49 C 12.50 18.48, 4.03 16.83, 6.27 7.47"
      }
    ],
    [
      "path",
      {
        "d": "M 12.16 17.77 L 3.03 7.71"
      }
    ],
    [
      "path",
      {
        "d": "M 3.33 16.71 Q 18.25 18.07 20.34 3.49"
      }
    ]
  ]
};

export const ZoppicoPlush = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 10.92 11.68 Q 10.94 12.09 12.99 10.29" />
      <path d="M 3.02 18.49 C 12.50 18.48, 4.03 16.83, 6.27 7.47" />
      <path d="M 12.16 17.77 L 3.03 7.71" />
      <path d="M 3.33 16.71 Q 18.25 18.07 20.34 3.49" />
      {children}
    </svg>
  );
});

export default ZoppicoPlush;
