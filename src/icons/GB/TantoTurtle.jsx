import React from 'react';

export const iconData = {
  "id": "TantoTurtle",
  "name": "TantoTurtle",
  "category": "GB",
  "nodes": [
    [
      "path",
      {
        "d": "M 11.81 3.91 L 12.82 11.84"
      }
    ],
    [
      "path",
      {
        "d": "M 6.91 4.77 L 9.82 10.40"
      }
    ],
    [
      "path",
      {
        "d": "M 21.69 7.24 L 7.56 7.14 L 10.07 14.90 L 10.69 5.21"
      }
    ],
    [
      "path",
      {
        "d": "M 7.47 7.79 L 7.10 20.89"
      }
    ]
  ]
};

export const TantoTurtle = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 11.81 3.91 L 12.82 11.84" />
      <path d="M 6.91 4.77 L 9.82 10.40" />
      <path d="M 21.69 7.24 L 7.56 7.14 L 10.07 14.90 L 10.69 5.21" />
      <path d="M 7.47 7.79 L 7.10 20.89" />
      {children}
    </svg>
  );
});

export default TantoTurtle;
