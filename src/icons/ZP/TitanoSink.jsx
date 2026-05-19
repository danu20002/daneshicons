import React from 'react';

export const iconData = {
  "id": "TitanoSink",
  "name": "TitanoSink",
  "category": "ZP",
  "nodes": [
    [
      "path",
      {
        "d": "M 6.52 3.35 C 9.72 12.44, 10.16 12.21, 19.78 19.08"
      }
    ],
    [
      "path",
      {
        "d": "M 8.10 3.49 C 5.35 6.74, 14.44 6.59, 20.42 20.54"
      }
    ],
    [
      "path",
      {
        "d": "M 5.53 6.42 C 13.37 10.09, 7.01 4.17, 17.61 16.68"
      }
    ],
    [
      "path",
      {
        "d": "M 3.28 8.21 C 7.96 11.30, 14.98 14.17, 16.63 21.66"
      }
    ],
    [
      "path",
      {
        "d": "M 2.48 9.76 C 7.84 8.67, 15.78 6.95, 15.81 15.73"
      }
    ],
    [
      "path",
      {
        "d": "M 8.55 2.31 C 18.04 8.56, 16.61 4.10, 18.72 14.75"
      }
    ]
  ]
};

export const TitanoSink = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 6.52 3.35 C 9.72 12.44, 10.16 12.21, 19.78 19.08" />
      <path d="M 8.10 3.49 C 5.35 6.74, 14.44 6.59, 20.42 20.54" />
      <path d="M 5.53 6.42 C 13.37 10.09, 7.01 4.17, 17.61 16.68" />
      <path d="M 3.28 8.21 C 7.96 11.30, 14.98 14.17, 16.63 21.66" />
      <path d="M 2.48 9.76 C 7.84 8.67, 15.78 6.95, 15.81 15.73" />
      <path d="M 8.55 2.31 C 18.04 8.56, 16.61 4.10, 18.72 14.75" />
      {children}
    </svg>
  );
});

export default TitanoSink;
