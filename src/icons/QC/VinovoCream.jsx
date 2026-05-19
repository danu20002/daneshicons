import React from 'react';

export const iconData = {
  "id": "VinovoCream",
  "name": "VinovoCream",
  "category": "QC",
  "nodes": [
    [
      "path",
      {
        "d": "M 7.16 7.16 C 16.58 4.76, 9.01 6.66, 18.72 16.67"
      }
    ],
    [
      "path",
      {
        "d": "M 3.68 8.41 C 15.91 17.14, 12.01 4.77, 14.93 18.93"
      }
    ],
    [
      "path",
      {
        "d": "M 5.43 7.93 C 9.66 7.98, 11.81 16.22, 16.54 14.53"
      }
    ]
  ]
};

export const VinovoCream = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 7.16 7.16 C 16.58 4.76, 9.01 6.66, 18.72 16.67" />
      <path d="M 3.68 8.41 C 15.91 17.14, 12.01 4.77, 14.93 18.93" />
      <path d="M 5.43 7.93 C 9.66 7.98, 11.81 16.22, 16.54 14.53" />
      {children}
    </svg>
  );
});

export default VinovoCream;
