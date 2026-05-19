import React from 'react';

export const iconData = {
  "id": "VerniceDecade",
  "name": "VerniceDecade",
  "category": "MB",
  "nodes": [
    [
      "path",
      {
        "d": "M 2.14 12.00 a 9.86 9.86 0 1 0 19.73 0 a 9.86 9.86 0 1 0 -19.73 0"
      }
    ],
    [
      "path",
      {
        "d": "M 3.46 7.07 a 8.54 2.5628605105309807 0 1 0 17.09 0 a 8.54 2.5628605105309807 0 1 0 -17.09 0"
      }
    ],
    [
      "path",
      {
        "d": "M 2.14 12.00 a 9.86 2.9593364113010465 0 1 0 19.73 0 a 9.86 2.9593364113010465 0 1 0 -19.73 0"
      }
    ],
    [
      "path",
      {
        "d": "M 3.46 16.93 a 8.54 2.5628605105309807 0 1 0 17.09 0 a 8.54 2.5628605105309807 0 1 0 -17.09 0"
      }
    ],
    [
      "path",
      {
        "d": "M 18.98 5.02 A 2 2 0 0 0 18.98 18.98"
      }
    ],
    [
      "path",
      {
        "d": "M 18.98 5.02 A 2 2 0 0 1 18.98 18.98"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 2.14 A 2 2 0 0 0 12.00 21.86"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 2.14 A 2 2 0 0 1 12.00 21.86"
      }
    ],
    [
      "path",
      {
        "d": "M 5.02 5.02 A 2 2 0 0 0 5.02 18.98"
      }
    ],
    [
      "path",
      {
        "d": "M 5.02 5.02 A 2 2 0 0 1 5.02 18.98"
      }
    ]
  ]
};

export const VerniceDecade = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 2.14 12.00 a 9.86 9.86 0 1 0 19.73 0 a 9.86 9.86 0 1 0 -19.73 0" />
      <path d="M 3.46 7.07 a 8.54 2.5628605105309807 0 1 0 17.09 0 a 8.54 2.5628605105309807 0 1 0 -17.09 0" />
      <path d="M 2.14 12.00 a 9.86 2.9593364113010465 0 1 0 19.73 0 a 9.86 2.9593364113010465 0 1 0 -19.73 0" />
      <path d="M 3.46 16.93 a 8.54 2.5628605105309807 0 1 0 17.09 0 a 8.54 2.5628605105309807 0 1 0 -17.09 0" />
      <path d="M 18.98 5.02 A 2 2 0 0 0 18.98 18.98" />
      <path d="M 18.98 5.02 A 2 2 0 0 1 18.98 18.98" />
      <path d="M 12.00 2.14 A 2 2 0 0 0 12.00 21.86" />
      <path d="M 12.00 2.14 A 2 2 0 0 1 12.00 21.86" />
      <path d="M 5.02 5.02 A 2 2 0 0 0 5.02 18.98" />
      <path d="M 5.02 5.02 A 2 2 0 0 1 5.02 18.98" />
      {children}
    </svg>
  );
});

export default VerniceDecade;
