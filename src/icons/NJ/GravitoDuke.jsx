import React from 'react';

export const iconData = {
  "id": "GravitoDuke",
  "name": "GravitoDuke",
  "category": "NJ",
  "nodes": [
    [
      "path",
      {
        "d": "M 17.40 10.61 Q 10.92 12.07 5.79 7.00"
      }
    ],
    [
      "path",
      {
        "d": "M 5.97 14.75 Q 12.61 14.87 13.14 18.53"
      }
    ],
    [
      "path",
      {
        "d": "M 6.62 9.54 L 9.23 9.39 L 21.51 19.25"
      }
    ]
  ]
};

export const GravitoDuke = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 17.40 10.61 Q 10.92 12.07 5.79 7.00" />
      <path d="M 5.97 14.75 Q 12.61 14.87 13.14 18.53" />
      <path d="M 6.62 9.54 L 9.23 9.39 L 21.51 19.25" />
      {children}
    </svg>
  );
});

export default GravitoDuke;
