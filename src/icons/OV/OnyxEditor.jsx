import React from 'react';

export const iconData = {
  "id": "OnyxEditor",
  "name": "OnyxEditor",
  "category": "OV",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.43 3.17 L 11.90 5.78 L 9.89 5.24 L 18.70 7.45 L 18.91 10.33 L 18.89 8.97 L 3.90 20.00"
      }
    ],
    [
      "path",
      {
        "d": "M 4.18 12.32 L 17.37 13.03"
      }
    ],
    [
      "path",
      {
        "d": "M 2.73 12.06 A 6.86 5.02 14 0 1 10.73 13.62"
      }
    ],
    [
      "path",
      {
        "d": "M 4.12 3.20 A 5.00 6.44 152 0 1 9.44 13.14"
      }
    ]
  ]
};

export const OnyxEditor = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.43 3.17 L 11.90 5.78 L 9.89 5.24 L 18.70 7.45 L 18.91 10.33 L 18.89 8.97 L 3.90 20.00" />
      <path d="M 4.18 12.32 L 17.37 13.03" />
      <path d="M 2.73 12.06 A 6.86 5.02 14 0 1 10.73 13.62" />
      <path d="M 4.12 3.20 A 5.00 6.44 152 0 1 9.44 13.14" />
      {children}
    </svg>
  );
});

export default OnyxEditor;
