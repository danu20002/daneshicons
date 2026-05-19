import React from 'react';

export const iconData = {
  "id": "LigroEmbrace",
  "name": "LigroEmbrace",
  "category": "MP",
  "nodes": [
    [
      "path",
      {
        "d": "M 20.20 12.00 Q 15.91 13.27 18.63 16.82"
      }
    ],
    [
      "path",
      {
        "d": "M 18.63 16.82 Q 14.42 15.33 14.53 19.80"
      }
    ],
    [
      "path",
      {
        "d": "M 14.53 19.80 Q 12.00 16.11 9.47 19.80"
      }
    ],
    [
      "path",
      {
        "d": "M 9.47 19.80 Q 9.58 15.33 5.37 16.82"
      }
    ],
    [
      "path",
      {
        "d": "M 5.37 16.82 Q 8.09 13.27 3.80 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 3.80 12.00 Q 8.09 10.73 5.37 7.18"
      }
    ],
    [
      "path",
      {
        "d": "M 5.37 7.18 Q 9.58 8.67 9.47 4.20"
      }
    ],
    [
      "path",
      {
        "d": "M 9.47 4.20 Q 12.00 7.89 14.53 4.20"
      }
    ],
    [
      "path",
      {
        "d": "M 14.53 4.20 Q 14.42 8.67 18.63 7.18"
      }
    ],
    [
      "path",
      {
        "d": "M 18.63 7.18 Q 15.91 10.73 20.20 12.00"
      }
    ]
  ]
};

export const LigroEmbrace = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 20.20 12.00 Q 15.91 13.27 18.63 16.82" />
      <path d="M 18.63 16.82 Q 14.42 15.33 14.53 19.80" />
      <path d="M 14.53 19.80 Q 12.00 16.11 9.47 19.80" />
      <path d="M 9.47 19.80 Q 9.58 15.33 5.37 16.82" />
      <path d="M 5.37 16.82 Q 8.09 13.27 3.80 12.00" />
      <path d="M 3.80 12.00 Q 8.09 10.73 5.37 7.18" />
      <path d="M 5.37 7.18 Q 9.58 8.67 9.47 4.20" />
      <path d="M 9.47 4.20 Q 12.00 7.89 14.53 4.20" />
      <path d="M 14.53 4.20 Q 14.42 8.67 18.63 7.18" />
      <path d="M 18.63 7.18 Q 15.91 10.73 20.20 12.00" />
      {children}
    </svg>
  );
});

export default LigroEmbrace;
