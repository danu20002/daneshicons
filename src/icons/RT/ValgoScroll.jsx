import React from 'react';

export const iconData = {
  "id": "ValgoScroll",
  "name": "ValgoScroll",
  "category": "RT",
  "nodes": [
    [
      "path",
      {
        "d": "M 6.22 17.77 L 5.96 16.61 L 2.28 2.46 L 9.86 19.58"
      }
    ],
    [
      "path",
      {
        "d": "M 20.15 2.19 Q 12.25 3.00 5.41 17.26"
      }
    ],
    [
      "path",
      {
        "d": "M 13.08 9.08 Q 7.39 17.16 13.50 19.93"
      }
    ],
    [
      "path",
      {
        "d": "M 17.67 18.61 A 6.35 6.65 164 0 0 9.91 8.22"
      }
    ]
  ]
};

export const ValgoScroll = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 6.22 17.77 L 5.96 16.61 L 2.28 2.46 L 9.86 19.58" />
      <path d="M 20.15 2.19 Q 12.25 3.00 5.41 17.26" />
      <path d="M 13.08 9.08 Q 7.39 17.16 13.50 19.93" />
      <path d="M 17.67 18.61 A 6.35 6.65 164 0 0 9.91 8.22" />
      {children}
    </svg>
  );
});

export default ValgoScroll;
