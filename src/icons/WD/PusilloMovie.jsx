import React from 'react';

export const iconData = {
  "id": "PusilloMovie",
  "name": "PusilloMovie",
  "category": "WD",
  "nodes": [
    [
      "path",
      {
        "d": "M 19.07 12.01 L 6.51 8.78"
      }
    ],
    [
      "path",
      {
        "d": "M 18.79 8.54 Q 14.39 17.98 5.63 4.97"
      }
    ],
    [
      "path",
      {
        "d": "M 19.54 17.73 A 5.03 6.09 80 0 0 9.83 16.52"
      }
    ],
    [
      "path",
      {
        "d": "M 14.26 3.85 L 8.54 5.69"
      }
    ],
    [
      "path",
      {
        "d": "M 20.91 7.19 Q 17.67 2.91 19.68 5.56"
      }
    ],
    [
      "path",
      {
        "d": "M 11.02 8.59 C 5.85 6.84, 4.26 8.99, 16.25 7.17"
      }
    ]
  ]
};

export const PusilloMovie = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 19.07 12.01 L 6.51 8.78" />
      <path d="M 18.79 8.54 Q 14.39 17.98 5.63 4.97" />
      <path d="M 19.54 17.73 A 5.03 6.09 80 0 0 9.83 16.52" />
      <path d="M 14.26 3.85 L 8.54 5.69" />
      <path d="M 20.91 7.19 Q 17.67 2.91 19.68 5.56" />
      <path d="M 11.02 8.59 C 5.85 6.84, 4.26 8.99, 16.25 7.17" />
      {children}
    </svg>
  );
});

export default PusilloMovie;
