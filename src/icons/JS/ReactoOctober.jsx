import React from 'react';

export const iconData = {
  "id": "ReactoOctober",
  "name": "ReactoOctober",
  "category": "JS",
  "nodes": [
    [
      "path",
      {
        "d": "M 18.76 20.41 Q 19.97 12.00 9.83 13.30"
      }
    ],
    [
      "path",
      {
        "d": "M 7.74 20.79 C 8.07 9.96, 6.59 2.77, 5.52 5.62"
      }
    ],
    [
      "path",
      {
        "d": "M 13.66 14.03 L 3.16 14.67 L 14.89 18.46 L 6.91 15.20"
      }
    ],
    [
      "path",
      {
        "d": "M 14.12 5.32 Q 7.92 8.41 10.48 13.14"
      }
    ],
    [
      "path",
      {
        "d": "M 11.00 3.47 L 5.60 3.29"
      }
    ]
  ]
};

export const ReactoOctober = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 18.76 20.41 Q 19.97 12.00 9.83 13.30" />
      <path d="M 7.74 20.79 C 8.07 9.96, 6.59 2.77, 5.52 5.62" />
      <path d="M 13.66 14.03 L 3.16 14.67 L 14.89 18.46 L 6.91 15.20" />
      <path d="M 14.12 5.32 Q 7.92 8.41 10.48 13.14" />
      <path d="M 11.00 3.47 L 5.60 3.29" />
      {children}
    </svg>
  );
});

export default ReactoOctober;
