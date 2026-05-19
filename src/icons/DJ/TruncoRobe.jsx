import React from 'react';

export const iconData = {
  "id": "TruncoRobe",
  "name": "TruncoRobe",
  "category": "DJ",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.72 12.00 a 7.28 7.28 0 1 0 14.55 0 a 7.28 7.28 0 1 0 -14.55 0"
      }
    ],
    [
      "path",
      {
        "d": "M 7.53 12.00 a 4.47 4.47 0 1 1 8.94 0 a 4.47 4.47 0 1 1 -8.94 0"
      }
    ],
    [
      "path",
      {
        "d": "M 18.78 12.00 L 20.78 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 17.70 15.66 L 19.38 16.74"
      }
    ],
    [
      "path",
      {
        "d": "M 14.81 18.16 L 15.65 19.98"
      }
    ],
    [
      "path",
      {
        "d": "M 11.04 18.71 L 10.75 20.69"
      }
    ],
    [
      "path",
      {
        "d": "M 7.56 17.12 L 6.25 18.63"
      }
    ],
    [
      "path",
      {
        "d": "M 5.50 13.91 L 3.58 14.47"
      }
    ],
    [
      "path",
      {
        "d": "M 5.50 10.09 L 3.58 9.53"
      }
    ],
    [
      "path",
      {
        "d": "M 7.56 6.88 L 6.25 5.37"
      }
    ],
    [
      "path",
      {
        "d": "M 11.04 5.29 L 10.75 3.31"
      }
    ],
    [
      "path",
      {
        "d": "M 14.81 5.84 L 15.65 4.02"
      }
    ],
    [
      "path",
      {
        "d": "M 17.70 8.34 L 19.38 7.26"
      }
    ]
  ]
};

export const TruncoRobe = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.72 12.00 a 7.28 7.28 0 1 0 14.55 0 a 7.28 7.28 0 1 0 -14.55 0" />
      <path d="M 7.53 12.00 a 4.47 4.47 0 1 1 8.94 0 a 4.47 4.47 0 1 1 -8.94 0" />
      <path d="M 18.78 12.00 L 20.78 12.00" />
      <path d="M 17.70 15.66 L 19.38 16.74" />
      <path d="M 14.81 18.16 L 15.65 19.98" />
      <path d="M 11.04 18.71 L 10.75 20.69" />
      <path d="M 7.56 17.12 L 6.25 18.63" />
      <path d="M 5.50 13.91 L 3.58 14.47" />
      <path d="M 5.50 10.09 L 3.58 9.53" />
      <path d="M 7.56 6.88 L 6.25 5.37" />
      <path d="M 11.04 5.29 L 10.75 3.31" />
      <path d="M 14.81 5.84 L 15.65 4.02" />
      <path d="M 17.70 8.34 L 19.38 7.26" />
      {children}
    </svg>
  );
});

export default TruncoRobe;
