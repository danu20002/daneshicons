import React from 'react';

export const iconData = {
  "id": "MelanoNative",
  "name": "MelanoNative",
  "category": "IZ",
  "nodes": [
    [
      "path",
      {
        "d": "M 8.58 21.96 C 17.12 2.14, 12.15 14.86, 3.78 11.69"
      }
    ],
    [
      "path",
      {
        "d": "M 10.52 6.01 L 16.49 7.05"
      }
    ],
    [
      "path",
      {
        "d": "M 19.59 8.08 C 20.42 21.37, 3.58 20.18, 7.66 19.61"
      }
    ],
    [
      "path",
      {
        "d": "M 6.82 4.78 A 5.84 4.14 45 0 1 5.46 2.10"
      }
    ]
  ]
};

export const MelanoNative = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 8.58 21.96 C 17.12 2.14, 12.15 14.86, 3.78 11.69" />
      <path d="M 10.52 6.01 L 16.49 7.05" />
      <path d="M 19.59 8.08 C 20.42 21.37, 3.58 20.18, 7.66 19.61" />
      <path d="M 6.82 4.78 A 5.84 4.14 45 0 1 5.46 2.10" />
      {children}
    </svg>
  );
});

export default MelanoNative;
