import React from 'react';

export const iconData = {
  "id": "SignoBreach",
  "name": "SignoBreach",
  "category": "JR",
  "nodes": [
    [
      "path",
      {
        "d": "M 20.78 12.00 Q 16.48 13.20 19.61 16.39"
      }
    ],
    [
      "path",
      {
        "d": "M 19.61 16.39 Q 15.28 15.28 16.39 19.61"
      }
    ],
    [
      "path",
      {
        "d": "M 16.39 19.61 Q 13.20 16.48 12.00 20.78"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 20.78 Q 10.80 16.48 7.61 19.61"
      }
    ],
    [
      "path",
      {
        "d": "M 7.61 19.61 Q 8.72 15.28 4.39 16.39"
      }
    ],
    [
      "path",
      {
        "d": "M 4.39 16.39 Q 7.52 13.20 3.22 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 3.22 12.00 Q 7.52 10.80 4.39 7.61"
      }
    ],
    [
      "path",
      {
        "d": "M 4.39 7.61 Q 8.72 8.72 7.61 4.39"
      }
    ],
    [
      "path",
      {
        "d": "M 7.61 4.39 Q 10.80 7.52 12.00 3.22"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 3.22 Q 13.20 7.52 16.39 4.39"
      }
    ],
    [
      "path",
      {
        "d": "M 16.39 4.39 Q 15.28 8.72 19.61 7.61"
      }
    ],
    [
      "path",
      {
        "d": "M 19.61 7.61 Q 16.48 10.80 20.78 12.00"
      }
    ]
  ]
};

export const SignoBreach = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 20.78 12.00 Q 16.48 13.20 19.61 16.39" />
      <path d="M 19.61 16.39 Q 15.28 15.28 16.39 19.61" />
      <path d="M 16.39 19.61 Q 13.20 16.48 12.00 20.78" />
      <path d="M 12.00 20.78 Q 10.80 16.48 7.61 19.61" />
      <path d="M 7.61 19.61 Q 8.72 15.28 4.39 16.39" />
      <path d="M 4.39 16.39 Q 7.52 13.20 3.22 12.00" />
      <path d="M 3.22 12.00 Q 7.52 10.80 4.39 7.61" />
      <path d="M 4.39 7.61 Q 8.72 8.72 7.61 4.39" />
      <path d="M 7.61 4.39 Q 10.80 7.52 12.00 3.22" />
      <path d="M 12.00 3.22 Q 13.20 7.52 16.39 4.39" />
      <path d="M 16.39 4.39 Q 15.28 8.72 19.61 7.61" />
      <path d="M 19.61 7.61 Q 16.48 10.80 20.78 12.00" />
      {children}
    </svg>
  );
});

export default SignoBreach;
