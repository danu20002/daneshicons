import React from 'react';

export const iconData = {
  "id": "OctoVista",
  "name": "OctoVista",
  "category": "AF",
  "nodes": [
    [
      "path",
      {
        "d": "M 11.23 14.58 Q 7.65 5.96 18.82 13.42"
      }
    ],
    [
      "path",
      {
        "d": "M 4.32 10.79 L 9.73 20.17"
      }
    ],
    [
      "path",
      {
        "d": "M 21.42 13.38 A 3.32 5.05 122 0 1 17.05 7.81"
      }
    ],
    [
      "path",
      {
        "d": "M 11.45 7.91 Q 5.81 21.79 9.66 14.68"
      }
    ]
  ]
};

export const OctoVista = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 11.23 14.58 Q 7.65 5.96 18.82 13.42" />
      <path d="M 4.32 10.79 L 9.73 20.17" />
      <path d="M 21.42 13.38 A 3.32 5.05 122 0 1 17.05 7.81" />
      <path d="M 11.45 7.91 Q 5.81 21.79 9.66 14.68" />
      {children}
    </svg>
  );
});

export default OctoVista;
