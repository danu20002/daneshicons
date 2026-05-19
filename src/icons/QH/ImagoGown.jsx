import React from 'react';

export const iconData = {
  "id": "ImagoGown",
  "name": "ImagoGown",
  "category": "QH",
  "nodes": [
    [
      "path",
      {
        "d": "M 20.86 18.18 Q 20.90 7.38 14.44 21.22"
      }
    ],
    [
      "path",
      {
        "d": "M 20.73 18.11 L 12.16 10.43 L 13.60 14.52 L 2.78 21.93 L 12.04 10.55 L 7.81 14.46 L 19.26 4.19"
      }
    ],
    [
      "path",
      {
        "d": "M 19.56 2.22 C 5.98 20.24, 15.59 20.68, 17.42 14.90"
      }
    ],
    [
      "path",
      {
        "d": "M 17.05 19.32 A 2.04 2.79 121 0 0 8.32 18.49"
      }
    ]
  ]
};

export const ImagoGown = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 20.86 18.18 Q 20.90 7.38 14.44 21.22" />
      <path d="M 20.73 18.11 L 12.16 10.43 L 13.60 14.52 L 2.78 21.93 L 12.04 10.55 L 7.81 14.46 L 19.26 4.19" />
      <path d="M 19.56 2.22 C 5.98 20.24, 15.59 20.68, 17.42 14.90" />
      <path d="M 17.05 19.32 A 2.04 2.79 121 0 0 8.32 18.49" />
      {children}
    </svg>
  );
});

export default ImagoGown;
