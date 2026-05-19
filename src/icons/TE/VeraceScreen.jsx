import React from 'react';

export const iconData = {
  "id": "VeraceScreen",
  "name": "VeraceScreen",
  "category": "TE",
  "nodes": [
    [
      "path",
      {
        "d": "M 6.42 6.64 L 10.42 6.64"
      }
    ],
    [
      "path",
      {
        "d": "M 15.38 5.04 L 16.61 8.84"
      }
    ],
    [
      "path",
      {
        "d": "M 19.67 13.06 L 16.43 15.41"
      }
    ],
    [
      "path",
      {
        "d": "M 13.36 19.62 L 10.13 17.27"
      }
    ],
    [
      "path",
      {
        "d": "M 5.18 15.65 L 6.41 11.84"
      }
    ]
  ]
};

export const VeraceScreen = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 6.42 6.64 L 10.42 6.64" />
      <path d="M 15.38 5.04 L 16.61 8.84" />
      <path d="M 19.67 13.06 L 16.43 15.41" />
      <path d="M 13.36 19.62 L 10.13 17.27" />
      <path d="M 5.18 15.65 L 6.41 11.84" />
      {children}
    </svg>
  );
});

export default VeraceScreen;
