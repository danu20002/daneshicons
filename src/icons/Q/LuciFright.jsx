import React from 'react';

export const iconData = {
  "id": "LuciFright",
  "name": "LuciFright",
  "category": "Q",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.33 12.00 a 8.67 8.67 0 1 0 17.35 0 a 8.67 8.67 0 1 0 -17.35 0"
      }
    ],
    [
      "path",
      {
        "d": "M 4.49 7.66 a 7.51 2.253335490830131 0 1 0 15.02 0 a 7.51 2.253335490830131 0 1 0 -15.02 0"
      }
    ],
    [
      "path",
      {
        "d": "M 3.33 12.00 a 8.67 2.6019277044106275 0 1 0 17.35 0 a 8.67 2.6019277044106275 0 1 0 -17.35 0"
      }
    ],
    [
      "path",
      {
        "d": "M 4.49 16.34 a 7.51 2.253335490830131 0 1 0 15.02 0 a 7.51 2.253335490830131 0 1 0 -15.02 0"
      }
    ],
    [
      "path",
      {
        "d": "M 18.13 5.87 A 2 2 0 0 0 18.13 18.13"
      }
    ],
    [
      "path",
      {
        "d": "M 18.13 5.87 A 2 2 0 0 1 18.13 18.13"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 3.33 A 2 2 0 0 0 12.00 20.67"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 3.33 A 2 2 0 0 1 12.00 20.67"
      }
    ],
    [
      "path",
      {
        "d": "M 5.87 5.87 A 2 2 0 0 0 5.87 18.13"
      }
    ],
    [
      "path",
      {
        "d": "M 5.87 5.87 A 2 2 0 0 1 5.87 18.13"
      }
    ]
  ]
};

export const LuciFright = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.33 12.00 a 8.67 8.67 0 1 0 17.35 0 a 8.67 8.67 0 1 0 -17.35 0" />
      <path d="M 4.49 7.66 a 7.51 2.253335490830131 0 1 0 15.02 0 a 7.51 2.253335490830131 0 1 0 -15.02 0" />
      <path d="M 3.33 12.00 a 8.67 2.6019277044106275 0 1 0 17.35 0 a 8.67 2.6019277044106275 0 1 0 -17.35 0" />
      <path d="M 4.49 16.34 a 7.51 2.253335490830131 0 1 0 15.02 0 a 7.51 2.253335490830131 0 1 0 -15.02 0" />
      <path d="M 18.13 5.87 A 2 2 0 0 0 18.13 18.13" />
      <path d="M 18.13 5.87 A 2 2 0 0 1 18.13 18.13" />
      <path d="M 12.00 3.33 A 2 2 0 0 0 12.00 20.67" />
      <path d="M 12.00 3.33 A 2 2 0 0 1 12.00 20.67" />
      <path d="M 5.87 5.87 A 2 2 0 0 0 5.87 18.13" />
      <path d="M 5.87 5.87 A 2 2 0 0 1 5.87 18.13" />
      {children}
    </svg>
  );
});

export default LuciFright;
