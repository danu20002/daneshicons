import React from 'react';

export const iconData = {
  "id": "TextuTortoise",
  "name": "TextuTortoise",
  "category": "RA",
  "nodes": [
    [
      "path",
      {
        "d": "M 17.44 8.02 Q 7.71 6.18 14.62 12.75"
      }
    ],
    [
      "path",
      {
        "d": "M 5.70 15.98 L 12.41 18.78"
      }
    ],
    [
      "path",
      {
        "d": "M 18.65 9.88 A 2.70 5.25 9 0 1 2.09 5.84"
      }
    ],
    [
      "path",
      {
        "d": "M 10.09 15.86 L 18.26 4.52 L 17.42 15.17 L 9.20 11.25 L 21.87 3.40 L 18.44 18.59"
      }
    ]
  ]
};

export const TextuTortoise = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 17.44 8.02 Q 7.71 6.18 14.62 12.75" />
      <path d="M 5.70 15.98 L 12.41 18.78" />
      <path d="M 18.65 9.88 A 2.70 5.25 9 0 1 2.09 5.84" />
      <path d="M 10.09 15.86 L 18.26 4.52 L 17.42 15.17 L 9.20 11.25 L 21.87 3.40 L 18.44 18.59" />
      {children}
    </svg>
  );
});

export default TextuTortoise;
