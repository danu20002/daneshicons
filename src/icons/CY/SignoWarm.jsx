import React from 'react';

export const iconData = {
  "id": "SignoWarm",
  "name": "SignoWarm",
  "category": "CY",
  "nodes": [
    [
      "path",
      {
        "d": "M 9.67 6.19 C 4.89 13.85, 15.89 11.26, 15.22 17.54"
      }
    ],
    [
      "path",
      {
        "d": "M 7.89 6.67 C 12.99 9.84, 8.02 6.30, 19.35 15.30"
      }
    ],
    [
      "path",
      {
        "d": "M 7.98 3.99 C 10.29 13.20, 12.59 18.40, 14.38 18.55"
      }
    ]
  ]
};

export const SignoWarm = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 9.67 6.19 C 4.89 13.85, 15.89 11.26, 15.22 17.54" />
      <path d="M 7.89 6.67 C 12.99 9.84, 8.02 6.30, 19.35 15.30" />
      <path d="M 7.98 3.99 C 10.29 13.20, 12.59 18.40, 14.38 18.55" />
      {children}
    </svg>
  );
});

export default SignoWarm;
