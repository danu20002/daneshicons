import React from 'react';

export const iconData = {
  "id": "SignoGross",
  "name": "SignoGross",
  "category": "RO",
  "nodes": [
    [
      "path",
      {
        "d": "M 7.08 8.88 C 15.72 19.81, 13.36 9.66, 14.20 15.97"
      }
    ],
    [
      "path",
      {
        "d": "M 2.32 9.57 C 8.98 16.47, 5.19 5.28, 19.06 15.48"
      }
    ],
    [
      "path",
      {
        "d": "M 7.01 8.66 C 11.67 19.35, 17.36 13.84, 17.26 15.66"
      }
    ]
  ]
};

export const SignoGross = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 7.08 8.88 C 15.72 19.81, 13.36 9.66, 14.20 15.97" />
      <path d="M 2.32 9.57 C 8.98 16.47, 5.19 5.28, 19.06 15.48" />
      <path d="M 7.01 8.66 C 11.67 19.35, 17.36 13.84, 17.26 15.66" />
      {children}
    </svg>
  );
});

export default SignoGross;
