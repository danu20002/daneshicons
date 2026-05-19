import React from 'react';

export const iconData = {
  "id": "TisicoNor",
  "name": "TisicoNor",
  "category": "PN",
  "nodes": [
    [
      "path",
      {
        "d": "M 20.02 12.00 Q 15.91 13.27 18.49 16.71"
      }
    ],
    [
      "path",
      {
        "d": "M 18.49 16.71 Q 14.42 15.33 14.48 19.63"
      }
    ],
    [
      "path",
      {
        "d": "M 14.48 19.63 Q 12.00 16.11 9.52 19.63"
      }
    ],
    [
      "path",
      {
        "d": "M 9.52 19.63 Q 9.58 15.33 5.51 16.71"
      }
    ],
    [
      "path",
      {
        "d": "M 5.51 16.71 Q 8.09 13.27 3.98 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 3.98 12.00 Q 8.09 10.73 5.51 7.29"
      }
    ],
    [
      "path",
      {
        "d": "M 5.51 7.29 Q 9.58 8.67 9.52 4.37"
      }
    ],
    [
      "path",
      {
        "d": "M 9.52 4.37 Q 12.00 7.89 14.48 4.37"
      }
    ],
    [
      "path",
      {
        "d": "M 14.48 4.37 Q 14.42 8.67 18.49 7.29"
      }
    ],
    [
      "path",
      {
        "d": "M 18.49 7.29 Q 15.91 10.73 20.02 12.00"
      }
    ]
  ]
};

export const TisicoNor = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 20.02 12.00 Q 15.91 13.27 18.49 16.71" />
      <path d="M 18.49 16.71 Q 14.42 15.33 14.48 19.63" />
      <path d="M 14.48 19.63 Q 12.00 16.11 9.52 19.63" />
      <path d="M 9.52 19.63 Q 9.58 15.33 5.51 16.71" />
      <path d="M 5.51 16.71 Q 8.09 13.27 3.98 12.00" />
      <path d="M 3.98 12.00 Q 8.09 10.73 5.51 7.29" />
      <path d="M 5.51 7.29 Q 9.58 8.67 9.52 4.37" />
      <path d="M 9.52 4.37 Q 12.00 7.89 14.48 4.37" />
      <path d="M 14.48 4.37 Q 14.42 8.67 18.49 7.29" />
      <path d="M 18.49 7.29 Q 15.91 10.73 20.02 12.00" />
      {children}
    </svg>
  );
});

export default TisicoNor;
