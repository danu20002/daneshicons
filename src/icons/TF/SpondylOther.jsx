import React from 'react';

export const iconData = {
  "id": "SpondylOther",
  "name": "SpondylOther",
  "category": "TF",
  "nodes": [
    [
      "path",
      {
        "d": "M 21.84 9.03 C 3.45 13.22, 19.78 10.59, 13.55 15.62"
      }
    ],
    [
      "path",
      {
        "d": "M 20.41 3.85 Q 19.87 21.38 20.19 2.86"
      }
    ],
    [
      "path",
      {
        "d": "M 11.73 14.31 L 2.90 12.25 L 10.58 17.30 L 10.13 6.13 L 16.61 4.23 L 12.22 21.69"
      }
    ]
  ]
};

export const SpondylOther = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 21.84 9.03 C 3.45 13.22, 19.78 10.59, 13.55 15.62" />
      <path d="M 20.41 3.85 Q 19.87 21.38 20.19 2.86" />
      <path d="M 11.73 14.31 L 2.90 12.25 L 10.58 17.30 L 10.13 6.13 L 16.61 4.23 L 12.22 21.69" />
      {children}
    </svg>
  );
});

export default SpondylOther;
