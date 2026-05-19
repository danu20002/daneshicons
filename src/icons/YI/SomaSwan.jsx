import React from 'react';

export const iconData = {
  "id": "SomaSwan",
  "name": "SomaSwan",
  "category": "YI",
  "nodes": [
    [
      "path",
      {
        "d": "M 11.03 17.60 L 15.96 13.30"
      }
    ],
    [
      "path",
      {
        "d": "M 2.70 20.00 L 13.63 14.97 L 19.74 7.87"
      }
    ],
    [
      "path",
      {
        "d": "M 14.13 3.20 C 17.18 18.81, 13.61 16.16, 3.57 17.42"
      }
    ],
    [
      "path",
      {
        "d": "M 4.34 19.02 C 17.61 9.42, 11.16 15.61, 14.67 18.17"
      }
    ],
    [
      "path",
      {
        "d": "M 10.39 4.06 Q 2.71 3.13 16.80 18.13"
      }
    ],
    [
      "path",
      {
        "d": "M 21.00 17.71 C 9.51 12.77, 19.64 17.09, 8.83 14.81"
      }
    ]
  ]
};

export const SomaSwan = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 11.03 17.60 L 15.96 13.30" />
      <path d="M 2.70 20.00 L 13.63 14.97 L 19.74 7.87" />
      <path d="M 14.13 3.20 C 17.18 18.81, 13.61 16.16, 3.57 17.42" />
      <path d="M 4.34 19.02 C 17.61 9.42, 11.16 15.61, 14.67 18.17" />
      <path d="M 10.39 4.06 Q 2.71 3.13 16.80 18.13" />
      <path d="M 21.00 17.71 C 9.51 12.77, 19.64 17.09, 8.83 14.81" />
      {children}
    </svg>
  );
});

export default SomaSwan;
