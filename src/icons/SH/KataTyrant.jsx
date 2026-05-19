import React from 'react';

export const iconData = {
  "id": "KataTyrant",
  "name": "KataTyrant",
  "category": "SH",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.50 2.16 C 14.40 5.78, 4.09 4.60, 19.56 17.54"
      }
    ],
    [
      "path",
      {
        "d": "M 3.55 5.41 C 4.26 18.67, 13.37 16.62, 19.67 15.61"
      }
    ],
    [
      "path",
      {
        "d": "M 4.61 5.29 C 8.63 11.51, 6.83 5.12, 21.10 17.02"
      }
    ],
    [
      "path",
      {
        "d": "M 5.55 5.97 C 16.42 4.98, 7.82 16.08, 18.18 17.35"
      }
    ],
    [
      "path",
      {
        "d": "M 7.50 2.73 C 19.72 19.31, 6.84 18.51, 17.68 19.97"
      }
    ]
  ]
};

export const KataTyrant = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.50 2.16 C 14.40 5.78, 4.09 4.60, 19.56 17.54" />
      <path d="M 3.55 5.41 C 4.26 18.67, 13.37 16.62, 19.67 15.61" />
      <path d="M 4.61 5.29 C 8.63 11.51, 6.83 5.12, 21.10 17.02" />
      <path d="M 5.55 5.97 C 16.42 4.98, 7.82 16.08, 18.18 17.35" />
      <path d="M 7.50 2.73 C 19.72 19.31, 6.84 18.51, 17.68 19.97" />
      {children}
    </svg>
  );
});

export default KataTyrant;
