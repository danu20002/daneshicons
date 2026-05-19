import React from 'react';

export const iconData = {
  "id": "TrigonTender",
  "name": "TrigonTender",
  "category": "YW",
  "nodes": [
    [
      "path",
      {
        "d": "M 2.78 3.71 C 8.06 13.88, 7.03 19.26, 21.10 18.87"
      }
    ],
    [
      "path",
      {
        "d": "M 3.70 2.55 C 10.07 12.59, 11.57 17.95, 18.71 20.26"
      }
    ],
    [
      "path",
      {
        "d": "M 3.99 4.56 C 9.25 5.49, 19.57 11.93, 20.40 21.82"
      }
    ],
    [
      "path",
      {
        "d": "M 3.52 3.72 C 14.64 11.46, 15.42 9.00, 17.89 14.14"
      }
    ],
    [
      "path",
      {
        "d": "M 6.87 4.60 C 7.06 16.14, 4.51 19.23, 21.82 14.13"
      }
    ],
    [
      "path",
      {
        "d": "M 2.90 8.36 C 17.52 9.17, 19.89 7.44, 17.91 20.91"
      }
    ]
  ]
};

export const TrigonTender = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 2.78 3.71 C 8.06 13.88, 7.03 19.26, 21.10 18.87" />
      <path d="M 3.70 2.55 C 10.07 12.59, 11.57 17.95, 18.71 20.26" />
      <path d="M 3.99 4.56 C 9.25 5.49, 19.57 11.93, 20.40 21.82" />
      <path d="M 3.52 3.72 C 14.64 11.46, 15.42 9.00, 17.89 14.14" />
      <path d="M 6.87 4.60 C 7.06 16.14, 4.51 19.23, 21.82 14.13" />
      <path d="M 2.90 8.36 C 17.52 9.17, 19.89 7.44, 17.91 20.91" />
      {children}
    </svg>
  );
});

export default TrigonTender;
