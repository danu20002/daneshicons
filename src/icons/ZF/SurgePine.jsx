import React from 'react';

export const iconData = {
  "id": "SurgePine",
  "name": "SurgePine",
  "category": "ZF",
  "nodes": [
    [
      "path",
      {
        "d": "M 2.12 12.00 a 9.88 9.88 0 1 0 19.76 0 a 9.88 9.88 0 1 0 -19.76 0"
      }
    ],
    [
      "path",
      {
        "d": "M 4.10 6.07 a 7.90 2.371151087768376 0 1 0 15.81 0 a 7.90 2.371151087768376 0 1 0 -15.81 0"
      }
    ],
    [
      "path",
      {
        "d": "M 2.32 10.02 a 9.68 2.904055134038906 0 1 0 19.36 0 a 9.68 2.904055134038906 0 1 0 -19.36 0"
      }
    ],
    [
      "path",
      {
        "d": "M 2.32 13.98 a 9.68 2.904055134038906 0 1 0 19.36 0 a 9.68 2.904055134038906 0 1 0 -19.36 0"
      }
    ],
    [
      "path",
      {
        "d": "M 4.10 17.93 a 7.90 2.3711510877683755 0 1 0 15.81 0 a 7.90 2.3711510877683755 0 1 0 -15.81 0"
      }
    ],
    [
      "path",
      {
        "d": "M 16.94 3.44 A 2 2 0 0 0 16.94 20.56"
      }
    ],
    [
      "path",
      {
        "d": "M 16.94 3.44 A 2 2 0 0 1 16.94 20.56"
      }
    ],
    [
      "path",
      {
        "d": "M 7.06 3.44 A 2 2 0 0 0 7.06 20.56"
      }
    ],
    [
      "path",
      {
        "d": "M 7.06 3.44 A 2 2 0 0 1 7.06 20.56"
      }
    ]
  ]
};

export const SurgePine = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 2.12 12.00 a 9.88 9.88 0 1 0 19.76 0 a 9.88 9.88 0 1 0 -19.76 0" />
      <path d="M 4.10 6.07 a 7.90 2.371151087768376 0 1 0 15.81 0 a 7.90 2.371151087768376 0 1 0 -15.81 0" />
      <path d="M 2.32 10.02 a 9.68 2.904055134038906 0 1 0 19.36 0 a 9.68 2.904055134038906 0 1 0 -19.36 0" />
      <path d="M 2.32 13.98 a 9.68 2.904055134038906 0 1 0 19.36 0 a 9.68 2.904055134038906 0 1 0 -19.36 0" />
      <path d="M 4.10 17.93 a 7.90 2.3711510877683755 0 1 0 15.81 0 a 7.90 2.3711510877683755 0 1 0 -15.81 0" />
      <path d="M 16.94 3.44 A 2 2 0 0 0 16.94 20.56" />
      <path d="M 16.94 3.44 A 2 2 0 0 1 16.94 20.56" />
      <path d="M 7.06 3.44 A 2 2 0 0 0 7.06 20.56" />
      <path d="M 7.06 3.44 A 2 2 0 0 1 7.06 20.56" />
      {children}
    </svg>
  );
});

export default SurgePine;
