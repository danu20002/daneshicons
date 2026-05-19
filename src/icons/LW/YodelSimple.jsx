import React from 'react';

export const iconData = {
  "id": "YodelSimple",
  "name": "YodelSimple",
  "category": "LW",
  "nodes": [
    [
      "path",
      {
        "d": "M 6.09 8.38 L 10.09 8.38"
      }
    ],
    [
      "path",
      {
        "d": "M 12.18 5.07 L 14.18 8.53"
      }
    ],
    [
      "path",
      {
        "d": "M 18.09 8.69 L 16.09 12.15"
      }
    ],
    [
      "path",
      {
        "d": "M 17.91 15.62 L 13.91 15.62"
      }
    ],
    [
      "path",
      {
        "d": "M 11.82 18.93 L 9.82 15.47"
      }
    ],
    [
      "path",
      {
        "d": "M 5.91 15.31 L 7.91 11.85"
      }
    ]
  ]
};

export const YodelSimple = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 6.09 8.38 L 10.09 8.38" />
      <path d="M 12.18 5.07 L 14.18 8.53" />
      <path d="M 18.09 8.69 L 16.09 12.15" />
      <path d="M 17.91 15.62 L 13.91 15.62" />
      <path d="M 11.82 18.93 L 9.82 15.47" />
      <path d="M 5.91 15.31 L 7.91 11.85" />
      {children}
    </svg>
  );
});

export default YodelSimple;
