import React from 'react';

export const iconData = {
  "id": "IonoIntro",
  "name": "IonoIntro",
  "category": "CJ",
  "nodes": [
    [
      "path",
      {
        "d": "M 20.22 12.00 Q 14.57 12.69 19.12 16.11"
      }
    ],
    [
      "path",
      {
        "d": "M 19.12 16.11 Q 13.88 13.88 16.11 19.12"
      }
    ],
    [
      "path",
      {
        "d": "M 16.11 19.12 Q 12.69 14.57 12.00 20.22"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 20.22 Q 11.31 14.57 7.89 19.12"
      }
    ],
    [
      "path",
      {
        "d": "M 7.89 19.12 Q 10.12 13.88 4.88 16.11"
      }
    ],
    [
      "path",
      {
        "d": "M 4.88 16.11 Q 9.43 12.69 3.78 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 3.78 12.00 Q 9.43 11.31 4.88 7.89"
      }
    ],
    [
      "path",
      {
        "d": "M 4.88 7.89 Q 10.12 10.12 7.89 4.88"
      }
    ],
    [
      "path",
      {
        "d": "M 7.89 4.88 Q 11.31 9.43 12.00 3.78"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 3.78 Q 12.69 9.43 16.11 4.88"
      }
    ],
    [
      "path",
      {
        "d": "M 16.11 4.88 Q 13.88 10.12 19.12 7.89"
      }
    ],
    [
      "path",
      {
        "d": "M 19.12 7.89 Q 14.57 11.31 20.22 12.00"
      }
    ]
  ]
};

export const IonoIntro = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 20.22 12.00 Q 14.57 12.69 19.12 16.11" />
      <path d="M 19.12 16.11 Q 13.88 13.88 16.11 19.12" />
      <path d="M 16.11 19.12 Q 12.69 14.57 12.00 20.22" />
      <path d="M 12.00 20.22 Q 11.31 14.57 7.89 19.12" />
      <path d="M 7.89 19.12 Q 10.12 13.88 4.88 16.11" />
      <path d="M 4.88 16.11 Q 9.43 12.69 3.78 12.00" />
      <path d="M 3.78 12.00 Q 9.43 11.31 4.88 7.89" />
      <path d="M 4.88 7.89 Q 10.12 10.12 7.89 4.88" />
      <path d="M 7.89 4.88 Q 11.31 9.43 12.00 3.78" />
      <path d="M 12.00 3.78 Q 12.69 9.43 16.11 4.88" />
      <path d="M 16.11 4.88 Q 13.88 10.12 19.12 7.89" />
      <path d="M 19.12 7.89 Q 14.57 11.31 20.22 12.00" />
      {children}
    </svg>
  );
});

export default IonoIntro;
