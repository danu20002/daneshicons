import React from 'react';

export const iconData = {
  "id": "InteroTurtle",
  "name": "InteroTurtle",
  "category": "KG",
  "nodes": [
    [
      "path",
      {
        "d": "M 6.38 8.24 C 9.11 12.27, 4.02 14.46, 20.78 21.73"
      }
    ],
    [
      "path",
      {
        "d": "M 8.36 7.94 C 4.28 5.98, 8.57 15.66, 20.98 18.56"
      }
    ],
    [
      "path",
      {
        "d": "M 4.28 4.86 C 17.14 7.04, 10.69 7.84, 18.83 19.48"
      }
    ]
  ]
};

export const InteroTurtle = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 6.38 8.24 C 9.11 12.27, 4.02 14.46, 20.78 21.73" />
      <path d="M 8.36 7.94 C 4.28 5.98, 8.57 15.66, 20.98 18.56" />
      <path d="M 4.28 4.86 C 17.14 7.04, 10.69 7.84, 18.83 19.48" />
      {children}
    </svg>
  );
});

export default InteroTurtle;
