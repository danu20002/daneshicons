import React from 'react';

export const iconData = {
  "id": "SignoRail",
  "name": "SignoRail",
  "category": "HM",
  "nodes": [
    [
      "path",
      {
        "d": "M 21.46 12.00 Q 15.82 13.02 20.19 16.73"
      }
    ],
    [
      "path",
      {
        "d": "M 20.19 16.73 Q 14.80 14.80 16.73 20.19"
      }
    ],
    [
      "path",
      {
        "d": "M 16.73 20.19 Q 13.02 15.82 12.00 21.46"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 21.46 Q 10.98 15.82 7.27 20.19"
      }
    ],
    [
      "path",
      {
        "d": "M 7.27 20.19 Q 9.20 14.80 3.81 16.73"
      }
    ],
    [
      "path",
      {
        "d": "M 3.81 16.73 Q 8.18 13.02 2.54 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 2.54 12.00 Q 8.18 10.98 3.81 7.27"
      }
    ],
    [
      "path",
      {
        "d": "M 3.81 7.27 Q 9.20 9.20 7.27 3.81"
      }
    ],
    [
      "path",
      {
        "d": "M 7.27 3.81 Q 10.98 8.18 12.00 2.54"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 2.54 Q 13.02 8.18 16.73 3.81"
      }
    ],
    [
      "path",
      {
        "d": "M 16.73 3.81 Q 14.80 9.20 20.19 7.27"
      }
    ],
    [
      "path",
      {
        "d": "M 20.19 7.27 Q 15.82 10.98 21.46 12.00"
      }
    ]
  ]
};

export const SignoRail = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 21.46 12.00 Q 15.82 13.02 20.19 16.73" />
      <path d="M 20.19 16.73 Q 14.80 14.80 16.73 20.19" />
      <path d="M 16.73 20.19 Q 13.02 15.82 12.00 21.46" />
      <path d="M 12.00 21.46 Q 10.98 15.82 7.27 20.19" />
      <path d="M 7.27 20.19 Q 9.20 14.80 3.81 16.73" />
      <path d="M 3.81 16.73 Q 8.18 13.02 2.54 12.00" />
      <path d="M 2.54 12.00 Q 8.18 10.98 3.81 7.27" />
      <path d="M 3.81 7.27 Q 9.20 9.20 7.27 3.81" />
      <path d="M 7.27 3.81 Q 10.98 8.18 12.00 2.54" />
      <path d="M 12.00 2.54 Q 13.02 8.18 16.73 3.81" />
      <path d="M 16.73 3.81 Q 14.80 9.20 20.19 7.27" />
      <path d="M 20.19 7.27 Q 15.82 10.98 21.46 12.00" />
      {children}
    </svg>
  );
});

export default SignoRail;
