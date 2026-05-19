import React from 'react';

export const iconData = {
  "id": "ScriptoLexicon",
  "name": "ScriptoLexicon",
  "category": "GH",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.45 12.00 a 7.55 7.55 0 1 0 15.10 0 a 7.55 7.55 0 1 0 -15.10 0"
      }
    ],
    [
      "path",
      {
        "d": "M 6.73 12.00 a 5.27 5.27 0 1 1 10.54 0 a 5.27 5.27 0 1 1 -10.54 0"
      }
    ],
    [
      "path",
      {
        "d": "M 19.05 12.00 L 21.05 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 17.40 16.53 L 18.93 17.82"
      }
    ],
    [
      "path",
      {
        "d": "M 13.22 18.94 L 13.57 20.91"
      }
    ],
    [
      "path",
      {
        "d": "M 8.47 18.11 L 7.47 19.84"
      }
    ],
    [
      "path",
      {
        "d": "M 5.37 14.41 L 3.49 15.10"
      }
    ],
    [
      "path",
      {
        "d": "M 5.37 9.59 L 3.49 8.90"
      }
    ],
    [
      "path",
      {
        "d": "M 8.47 5.89 L 7.47 4.16"
      }
    ],
    [
      "path",
      {
        "d": "M 13.22 5.06 L 13.57 3.09"
      }
    ],
    [
      "path",
      {
        "d": "M 17.40 7.47 L 18.93 6.18"
      }
    ]
  ]
};

export const ScriptoLexicon = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.45 12.00 a 7.55 7.55 0 1 0 15.10 0 a 7.55 7.55 0 1 0 -15.10 0" />
      <path d="M 6.73 12.00 a 5.27 5.27 0 1 1 10.54 0 a 5.27 5.27 0 1 1 -10.54 0" />
      <path d="M 19.05 12.00 L 21.05 12.00" />
      <path d="M 17.40 16.53 L 18.93 17.82" />
      <path d="M 13.22 18.94 L 13.57 20.91" />
      <path d="M 8.47 18.11 L 7.47 19.84" />
      <path d="M 5.37 14.41 L 3.49 15.10" />
      <path d="M 5.37 9.59 L 3.49 8.90" />
      <path d="M 8.47 5.89 L 7.47 4.16" />
      <path d="M 13.22 5.06 L 13.57 3.09" />
      <path d="M 17.40 7.47 L 18.93 6.18" />
      {children}
    </svg>
  );
});

export default ScriptoLexicon;
