import React from 'react';

export const iconData = {
  "id": "PartiPrairie",
  "name": "PartiPrairie",
  "category": "BV",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.78 12.00 a 8.22 8.22 0 1 0 16.44 0 a 8.22 8.22 0 1 0 -16.44 0"
      }
    ],
    [
      "path",
      {
        "d": "M 5.42 7.07 a 6.58 1.9733896516263485 0 1 0 13.16 0 a 6.58 1.9733896516263485 0 1 0 -13.16 0"
      }
    ],
    [
      "path",
      {
        "d": "M 3.94 10.36 a 8.06 2.416898855086605 0 1 0 16.11 0 a 8.06 2.416898855086605 0 1 0 -16.11 0"
      }
    ],
    [
      "path",
      {
        "d": "M 3.94 13.64 a 8.06 2.416898855086605 0 1 0 16.11 0 a 8.06 2.416898855086605 0 1 0 -16.11 0"
      }
    ],
    [
      "path",
      {
        "d": "M 5.42 16.93 a 6.58 1.9733896516263485 0 1 0 13.16 0 a 6.58 1.9733896516263485 0 1 0 -13.16 0"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 3.78 A 2 2 0 0 0 12.00 20.22"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 3.78 A 2 2 0 0 1 12.00 20.22"
      }
    ]
  ]
};

export const PartiPrairie = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.78 12.00 a 8.22 8.22 0 1 0 16.44 0 a 8.22 8.22 0 1 0 -16.44 0" />
      <path d="M 5.42 7.07 a 6.58 1.9733896516263485 0 1 0 13.16 0 a 6.58 1.9733896516263485 0 1 0 -13.16 0" />
      <path d="M 3.94 10.36 a 8.06 2.416898855086605 0 1 0 16.11 0 a 8.06 2.416898855086605 0 1 0 -16.11 0" />
      <path d="M 3.94 13.64 a 8.06 2.416898855086605 0 1 0 16.11 0 a 8.06 2.416898855086605 0 1 0 -16.11 0" />
      <path d="M 5.42 16.93 a 6.58 1.9733896516263485 0 1 0 13.16 0 a 6.58 1.9733896516263485 0 1 0 -13.16 0" />
      <path d="M 12.00 3.78 A 2 2 0 0 0 12.00 20.22" />
      <path d="M 12.00 3.78 A 2 2 0 0 1 12.00 20.22" />
      {children}
    </svg>
  );
});

export default PartiPrairie;
