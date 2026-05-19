import React from 'react';

export const iconData = {
  "id": "TelluroKidney",
  "name": "TelluroKidney",
  "category": "IZ",
  "nodes": [
    [
      "path",
      {
        "d": "M 2.31 5.19 L 19.95 9.60 L 2.97 17.47 L 2.18 8.72 L 12.52 11.24"
      }
    ],
    [
      "path",
      {
        "d": "M 16.69 10.70 L 12.36 7.64"
      }
    ],
    [
      "path",
      {
        "d": "M 15.42 4.63 Q 12.40 13.89 19.22 20.84"
      }
    ],
    [
      "path",
      {
        "d": "M 21.75 15.22 Q 17.04 5.59 21.97 13.87"
      }
    ]
  ]
};

export const TelluroKidney = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 2.31 5.19 L 19.95 9.60 L 2.97 17.47 L 2.18 8.72 L 12.52 11.24" />
      <path d="M 16.69 10.70 L 12.36 7.64" />
      <path d="M 15.42 4.63 Q 12.40 13.89 19.22 20.84" />
      <path d="M 21.75 15.22 Q 17.04 5.59 21.97 13.87" />
      {children}
    </svg>
  );
});

export default TelluroKidney;
