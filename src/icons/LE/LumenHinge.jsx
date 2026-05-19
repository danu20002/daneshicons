import React from 'react';

export const iconData = {
  "id": "LumenHinge",
  "name": "LumenHinge",
  "category": "LE",
  "nodes": [
    [
      "path",
      {
        "d": "M 20.16 14.24 L 21.61 17.48"
      }
    ],
    [
      "path",
      {
        "d": "M 8.98 10.63 L 9.83 16.96 L 19.85 18.16 L 10.96 17.27 L 15.75 13.82 L 12.74 9.55 L 6.46 12.40"
      }
    ],
    [
      "path",
      {
        "d": "M 17.96 12.51 C 8.69 20.59, 14.75 19.26, 4.72 19.89"
      }
    ]
  ]
};

export const LumenHinge = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 20.16 14.24 L 21.61 17.48" />
      <path d="M 8.98 10.63 L 9.83 16.96 L 19.85 18.16 L 10.96 17.27 L 15.75 13.82 L 12.74 9.55 L 6.46 12.40" />
      <path d="M 17.96 12.51 C 8.69 20.59, 14.75 19.26, 4.72 19.89" />
      {children}
    </svg>
  );
});

export default LumenHinge;
