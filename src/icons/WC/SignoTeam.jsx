import React from 'react';

export const iconData = {
  "id": "SignoTeam",
  "name": "SignoTeam",
  "category": "WC",
  "nodes": [
    [
      "path",
      {
        "d": "M 5.07 12.00 L 18.93 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 5.07 L 12.00 18.93"
      }
    ],
    [
      "path",
      {
        "d": "M 1.32 12.00 a 10.68 10.68 0 1 0 21.36 0 a 10.68 10.68 0 1 0 -21.36 0"
      }
    ]
  ]
};

export const SignoTeam = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 5.07 12.00 L 18.93 12.00" />
      <path d="M 12.00 5.07 L 12.00 18.93" />
      <path d="M 1.32 12.00 a 10.68 10.68 0 1 0 21.36 0 a 10.68 10.68 0 1 0 -21.36 0" />
      {children}
    </svg>
  );
});

export default SignoTeam;
