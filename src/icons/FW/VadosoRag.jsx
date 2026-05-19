import React from 'react';

export const iconData = {
  "id": "VadosoRag",
  "name": "VadosoRag",
  "category": "FW",
  "nodes": [
    [
      "path",
      {
        "d": "M 8.73 8.02 C 12.06 19.72, 11.23 17.66, 20.37 20.65"
      }
    ],
    [
      "path",
      {
        "d": "M 5.47 9.34 C 6.41 18.62, 19.69 4.66, 18.88 16.65"
      }
    ],
    [
      "path",
      {
        "d": "M 7.62 5.35 C 15.01 9.08, 10.08 5.60, 16.10 17.36"
      }
    ],
    [
      "path",
      {
        "d": "M 7.67 7.51 C 4.30 18.36, 14.35 11.86, 21.34 19.78"
      }
    ]
  ]
};

export const VadosoRag = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 8.73 8.02 C 12.06 19.72, 11.23 17.66, 20.37 20.65" />
      <path d="M 5.47 9.34 C 6.41 18.62, 19.69 4.66, 18.88 16.65" />
      <path d="M 7.62 5.35 C 15.01 9.08, 10.08 5.60, 16.10 17.36" />
      <path d="M 7.67 7.51 C 4.30 18.36, 14.35 11.86, 21.34 19.78" />
      {children}
    </svg>
  );
});

export default VadosoRag;
