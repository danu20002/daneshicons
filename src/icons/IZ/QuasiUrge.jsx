import React from 'react';

export const iconData = {
  "id": "QuasiUrge",
  "name": "QuasiUrge",
  "category": "IZ",
  "nodes": [
    [
      "path",
      {
        "d": "M 11.41 13.34 C 14.42 17.46, 11.70 12.41, 9.93 14.65"
      }
    ],
    [
      "path",
      {
        "d": "M 15.81 8.60 L 2.04 8.39 L 18.53 10.64 L 6.13 17.58 L 11.17 20.71 L 15.41 3.98"
      }
    ]
  ]
};

export const QuasiUrge = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 11.41 13.34 C 14.42 17.46, 11.70 12.41, 9.93 14.65" />
      <path d="M 15.81 8.60 L 2.04 8.39 L 18.53 10.64 L 6.13 17.58 L 11.17 20.71 L 15.41 3.98" />
      {children}
    </svg>
  );
});

export default QuasiUrge;
