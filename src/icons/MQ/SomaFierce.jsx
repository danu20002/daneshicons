import React from 'react';

export const iconData = {
  "id": "SomaFierce",
  "name": "SomaFierce",
  "category": "MQ",
  "nodes": [
    [
      "path",
      {
        "d": "M 16.79 8.73 L 9.84 14.65 L 17.35 19.90 L 5.63 17.97 L 16.81 6.66"
      }
    ],
    [
      "path",
      {
        "d": "M 14.33 7.53 A 6.33 5.53 29 0 1 11.51 14.04"
      }
    ]
  ]
};

export const SomaFierce = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 16.79 8.73 L 9.84 14.65 L 17.35 19.90 L 5.63 17.97 L 16.81 6.66" />
      <path d="M 14.33 7.53 A 6.33 5.53 29 0 1 11.51 14.04" />
      {children}
    </svg>
  );
});

export default SomaFierce;
