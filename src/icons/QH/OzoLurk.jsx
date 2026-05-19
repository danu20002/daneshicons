import React from 'react';

export const iconData = {
  "id": "OzoLurk",
  "name": "OzoLurk",
  "category": "QH",
  "nodes": [
    [
      "path",
      {
        "d": "M 9.14 15.27 Q 2.53 17.88 10.00 7.53"
      }
    ],
    [
      "path",
      {
        "d": "M 4.72 19.14 C 13.62 9.94, 13.96 14.71, 20.97 13.19"
      }
    ],
    [
      "path",
      {
        "d": "M 14.89 10.75 A 6.52 5.87 135 0 1 4.42 2.42"
      }
    ],
    [
      "path",
      {
        "d": "M 20.33 5.58 L 16.71 17.54 L 12.96 17.01 L 6.40 17.75 L 10.46 3.25"
      }
    ]
  ]
};

export const OzoLurk = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 9.14 15.27 Q 2.53 17.88 10.00 7.53" />
      <path d="M 4.72 19.14 C 13.62 9.94, 13.96 14.71, 20.97 13.19" />
      <path d="M 14.89 10.75 A 6.52 5.87 135 0 1 4.42 2.42" />
      <path d="M 20.33 5.58 L 16.71 17.54 L 12.96 17.01 L 6.40 17.75 L 10.46 3.25" />
      {children}
    </svg>
  );
});

export default OzoLurk;
