import React from 'react';

export const iconData = {
  "id": "UrpinoMotto",
  "name": "UrpinoMotto",
  "category": "OQ",
  "nodes": [
    [
      "path",
      {
        "d": "M 7.12 8.63 C 13.09 10.05, 8.86 17.43, 20.43 17.57"
      }
    ],
    [
      "path",
      {
        "d": "M 3.25 9.26 C 5.17 4.51, 11.99 10.42, 15.14 16.92"
      }
    ],
    [
      "path",
      {
        "d": "M 3.14 9.53 C 14.71 13.49, 11.77 13.98, 18.62 14.64"
      }
    ],
    [
      "path",
      {
        "d": "M 8.23 8.45 C 14.42 7.43, 5.61 6.13, 15.42 18.02"
      }
    ],
    [
      "path",
      {
        "d": "M 6.37 6.70 C 17.34 6.11, 17.45 7.54, 19.61 20.98"
      }
    ]
  ]
};

export const UrpinoMotto = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 7.12 8.63 C 13.09 10.05, 8.86 17.43, 20.43 17.57" />
      <path d="M 3.25 9.26 C 5.17 4.51, 11.99 10.42, 15.14 16.92" />
      <path d="M 3.14 9.53 C 14.71 13.49, 11.77 13.98, 18.62 14.64" />
      <path d="M 8.23 8.45 C 14.42 7.43, 5.61 6.13, 15.42 18.02" />
      <path d="M 6.37 6.70 C 17.34 6.11, 17.45 7.54, 19.61 20.98" />
      {children}
    </svg>
  );
});

export default UrpinoMotto;
