import React from 'react';

export const iconData = {
  "id": "UlceraRender",
  "name": "UlceraRender",
  "category": "SS",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.84 12.00 a 7.16 7.16 0 1 0 14.32 0 a 7.16 7.16 0 1 0 -14.32 0"
      }
    ],
    [
      "path",
      {
        "d": "M 7.60 12.00 a 4.40 4.40 0 1 1 8.80 0 a 4.40 4.40 0 1 1 -8.80 0"
      }
    ],
    [
      "path",
      {
        "d": "M 18.66 12.00 L 20.66 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 17.60 15.60 L 19.28 16.68"
      }
    ],
    [
      "path",
      {
        "d": "M 14.77 18.06 L 15.60 19.88"
      }
    ],
    [
      "path",
      {
        "d": "M 11.05 18.59 L 10.77 20.57"
      }
    ],
    [
      "path",
      {
        "d": "M 7.64 17.03 L 6.33 18.54"
      }
    ],
    [
      "path",
      {
        "d": "M 5.61 13.88 L 3.69 14.44"
      }
    ],
    [
      "path",
      {
        "d": "M 5.61 10.12 L 3.69 9.56"
      }
    ],
    [
      "path",
      {
        "d": "M 7.64 6.97 L 6.33 5.46"
      }
    ],
    [
      "path",
      {
        "d": "M 11.05 5.41 L 10.77 3.43"
      }
    ],
    [
      "path",
      {
        "d": "M 14.77 5.94 L 15.60 4.12"
      }
    ],
    [
      "path",
      {
        "d": "M 17.60 8.40 L 19.28 7.32"
      }
    ]
  ]
};

export const UlceraRender = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.84 12.00 a 7.16 7.16 0 1 0 14.32 0 a 7.16 7.16 0 1 0 -14.32 0" />
      <path d="M 7.60 12.00 a 4.40 4.40 0 1 1 8.80 0 a 4.40 4.40 0 1 1 -8.80 0" />
      <path d="M 18.66 12.00 L 20.66 12.00" />
      <path d="M 17.60 15.60 L 19.28 16.68" />
      <path d="M 14.77 18.06 L 15.60 19.88" />
      <path d="M 11.05 18.59 L 10.77 20.57" />
      <path d="M 7.64 17.03 L 6.33 18.54" />
      <path d="M 5.61 13.88 L 3.69 14.44" />
      <path d="M 5.61 10.12 L 3.69 9.56" />
      <path d="M 7.64 6.97 L 6.33 5.46" />
      <path d="M 11.05 5.41 L 10.77 3.43" />
      <path d="M 14.77 5.94 L 15.60 4.12" />
      <path d="M 17.60 8.40 L 19.28 7.32" />
      {children}
    </svg>
  );
});

export default UlceraRender;
