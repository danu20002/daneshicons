import React from 'react';

export const iconData = {
  "id": "SestoPretty",
  "name": "SestoPretty",
  "category": "MB",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.87 12.00 a 8.13 8.13 0 1 0 16.26 0 a 8.13 8.13 0 1 0 -16.26 0"
      }
    ],
    [
      "path",
      {
        "d": "M 4.96 7.94 a 7.04 2.1116938146563773 0 1 0 14.08 0 a 7.04 2.1116938146563773 0 1 0 -14.08 0"
      }
    ],
    [
      "path",
      {
        "d": "M 3.87 12.00 a 8.13 2.4383739846758545 0 1 0 16.26 0 a 8.13 2.4383739846758545 0 1 0 -16.26 0"
      }
    ],
    [
      "path",
      {
        "d": "M 4.96 16.06 a 7.04 2.1116938146563773 0 1 0 14.08 0 a 7.04 2.1116938146563773 0 1 0 -14.08 0"
      }
    ],
    [
      "path",
      {
        "d": "M 17.75 6.25 A 2 2 0 0 0 17.75 17.75"
      }
    ],
    [
      "path",
      {
        "d": "M 17.75 6.25 A 2 2 0 0 1 17.75 17.75"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 3.87 A 2 2 0 0 0 12.00 20.13"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 3.87 A 2 2 0 0 1 12.00 20.13"
      }
    ],
    [
      "path",
      {
        "d": "M 6.25 6.25 A 2 2 0 0 0 6.25 17.75"
      }
    ],
    [
      "path",
      {
        "d": "M 6.25 6.25 A 2 2 0 0 1 6.25 17.75"
      }
    ]
  ]
};

export const SestoPretty = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.87 12.00 a 8.13 8.13 0 1 0 16.26 0 a 8.13 8.13 0 1 0 -16.26 0" />
      <path d="M 4.96 7.94 a 7.04 2.1116938146563773 0 1 0 14.08 0 a 7.04 2.1116938146563773 0 1 0 -14.08 0" />
      <path d="M 3.87 12.00 a 8.13 2.4383739846758545 0 1 0 16.26 0 a 8.13 2.4383739846758545 0 1 0 -16.26 0" />
      <path d="M 4.96 16.06 a 7.04 2.1116938146563773 0 1 0 14.08 0 a 7.04 2.1116938146563773 0 1 0 -14.08 0" />
      <path d="M 17.75 6.25 A 2 2 0 0 0 17.75 17.75" />
      <path d="M 17.75 6.25 A 2 2 0 0 1 17.75 17.75" />
      <path d="M 12.00 3.87 A 2 2 0 0 0 12.00 20.13" />
      <path d="M 12.00 3.87 A 2 2 0 0 1 12.00 20.13" />
      <path d="M 6.25 6.25 A 2 2 0 0 0 6.25 17.75" />
      <path d="M 6.25 6.25 A 2 2 0 0 1 6.25 17.75" />
      {children}
    </svg>
  );
});

export default SestoPretty;
