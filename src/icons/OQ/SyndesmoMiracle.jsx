import React from 'react';

export const iconData = {
  "id": "SyndesmoMiracle",
  "name": "SyndesmoMiracle",
  "category": "OQ",
  "nodes": [
    [
      "path",
      {
        "d": "M 8.84 9.09 C 8.68 13.13, 5.03 13.91, 19.77 20.86"
      }
    ],
    [
      "path",
      {
        "d": "M 4.99 4.32 C 18.87 13.18, 9.51 17.73, 15.58 15.54"
      }
    ],
    [
      "path",
      {
        "d": "M 6.38 2.65 C 15.07 13.15, 19.91 7.48, 16.64 16.03"
      }
    ],
    [
      "path",
      {
        "d": "M 5.87 5.20 C 19.99 14.73, 4.79 6.72, 21.82 14.55"
      }
    ],
    [
      "path",
      {
        "d": "M 5.19 9.66 C 6.62 12.75, 10.68 7.47, 14.46 15.94"
      }
    ],
    [
      "path",
      {
        "d": "M 5.11 6.18 C 12.09 9.68, 16.54 8.42, 20.33 20.50"
      }
    ]
  ]
};

export const SyndesmoMiracle = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 8.84 9.09 C 8.68 13.13, 5.03 13.91, 19.77 20.86" />
      <path d="M 4.99 4.32 C 18.87 13.18, 9.51 17.73, 15.58 15.54" />
      <path d="M 6.38 2.65 C 15.07 13.15, 19.91 7.48, 16.64 16.03" />
      <path d="M 5.87 5.20 C 19.99 14.73, 4.79 6.72, 21.82 14.55" />
      <path d="M 5.19 9.66 C 6.62 12.75, 10.68 7.47, 14.46 15.94" />
      <path d="M 5.11 6.18 C 12.09 9.68, 16.54 8.42, 20.33 20.50" />
      {children}
    </svg>
  );
});

export default SyndesmoMiracle;
