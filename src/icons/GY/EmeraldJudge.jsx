import React from 'react';

export const iconData = {
  "id": "EmeraldJudge",
  "name": "EmeraldJudge",
  "category": "GY",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.56 12.00 a 8.44 8.44 0 1 0 16.88 0 a 8.44 8.44 0 1 0 -16.88 0"
      }
    ],
    [
      "path",
      {
        "d": "M 4.04 9.19 a 7.96 2.386813901300696 0 1 0 15.91 0 a 7.96 2.386813901300696 0 1 0 -15.91 0"
      }
    ],
    [
      "path",
      {
        "d": "M 4.04 14.81 a 7.96 2.3868139013006964 0 1 0 15.91 0 a 7.96 2.3868139013006964 0 1 0 -15.91 0"
      }
    ],
    [
      "path",
      {
        "d": "M 16.22 4.69 A 2 2 0 0 0 16.22 19.31"
      }
    ],
    [
      "path",
      {
        "d": "M 16.22 4.69 A 2 2 0 0 1 16.22 19.31"
      }
    ],
    [
      "path",
      {
        "d": "M 7.78 4.69 A 2 2 0 0 0 7.78 19.31"
      }
    ],
    [
      "path",
      {
        "d": "M 7.78 4.69 A 2 2 0 0 1 7.78 19.31"
      }
    ]
  ]
};

export const EmeraldJudge = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.56 12.00 a 8.44 8.44 0 1 0 16.88 0 a 8.44 8.44 0 1 0 -16.88 0" />
      <path d="M 4.04 9.19 a 7.96 2.386813901300696 0 1 0 15.91 0 a 7.96 2.386813901300696 0 1 0 -15.91 0" />
      <path d="M 4.04 14.81 a 7.96 2.3868139013006964 0 1 0 15.91 0 a 7.96 2.3868139013006964 0 1 0 -15.91 0" />
      <path d="M 16.22 4.69 A 2 2 0 0 0 16.22 19.31" />
      <path d="M 16.22 4.69 A 2 2 0 0 1 16.22 19.31" />
      <path d="M 7.78 4.69 A 2 2 0 0 0 7.78 19.31" />
      <path d="M 7.78 4.69 A 2 2 0 0 1 7.78 19.31" />
      {children}
    </svg>
  );
});

export default EmeraldJudge;
