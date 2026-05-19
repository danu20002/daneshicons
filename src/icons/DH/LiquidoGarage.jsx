import React from 'react';

export const iconData = {
  "id": "LiquidoGarage",
  "name": "LiquidoGarage",
  "category": "DH",
  "nodes": [
    [
      "path",
      {
        "d": "M 2.03 12.00 a 9.97 9.97 0 1 0 19.94 0 a 9.97 9.97 0 1 0 -19.94 0"
      }
    ],
    [
      "path",
      {
        "d": "M 2.60 8.68 a 9.40 2.819332550938837 0 1 0 18.80 0 a 9.40 2.819332550938837 0 1 0 -18.80 0"
      }
    ],
    [
      "path",
      {
        "d": "M 2.60 15.32 a 9.40 2.819332550938837 0 1 0 18.80 0 a 9.40 2.819332550938837 0 1 0 -18.80 0"
      }
    ],
    [
      "path",
      {
        "d": "M 16.98 3.37 A 2 2 0 0 0 16.98 20.63"
      }
    ],
    [
      "path",
      {
        "d": "M 16.98 3.37 A 2 2 0 0 1 16.98 20.63"
      }
    ],
    [
      "path",
      {
        "d": "M 7.02 3.37 A 2 2 0 0 0 7.02 20.63"
      }
    ],
    [
      "path",
      {
        "d": "M 7.02 3.37 A 2 2 0 0 1 7.02 20.63"
      }
    ]
  ]
};

export const LiquidoGarage = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 2.03 12.00 a 9.97 9.97 0 1 0 19.94 0 a 9.97 9.97 0 1 0 -19.94 0" />
      <path d="M 2.60 8.68 a 9.40 2.819332550938837 0 1 0 18.80 0 a 9.40 2.819332550938837 0 1 0 -18.80 0" />
      <path d="M 2.60 15.32 a 9.40 2.819332550938837 0 1 0 18.80 0 a 9.40 2.819332550938837 0 1 0 -18.80 0" />
      <path d="M 16.98 3.37 A 2 2 0 0 0 16.98 20.63" />
      <path d="M 16.98 3.37 A 2 2 0 0 1 16.98 20.63" />
      <path d="M 7.02 3.37 A 2 2 0 0 0 7.02 20.63" />
      <path d="M 7.02 3.37 A 2 2 0 0 1 7.02 20.63" />
      {children}
    </svg>
  );
});

export default LiquidoGarage;
