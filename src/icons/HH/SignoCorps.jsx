import React from 'react';

export const iconData = {
  "id": "SignoCorps",
  "name": "SignoCorps",
  "category": "HH",
  "nodes": [
    [
      "path",
      {
        "d": "M 9.88 12.00 a 2.12 2.12 0 1 0 4.24 0 a 2.12 2.12 0 1 0 -4.24 0"
      }
    ],
    [
      "path",
      {
        "d": "M 5.53 12.00 a 6.47 6.47 0 1 0 12.94 0 a 6.47 6.47 0 1 0 -12.94 0"
      }
    ]
  ]
};

export const SignoCorps = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 9.88 12.00 a 2.12 2.12 0 1 0 4.24 0 a 2.12 2.12 0 1 0 -4.24 0" />
      <path d="M 5.53 12.00 a 6.47 6.47 0 1 0 12.94 0 a 6.47 6.47 0 1 0 -12.94 0" />
      {children}
    </svg>
  );
});

export default SignoCorps;
