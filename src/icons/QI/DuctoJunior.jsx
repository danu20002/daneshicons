import React from 'react';

export const iconData = {
  "id": "DuctoJunior",
  "name": "DuctoJunior",
  "category": "QI",
  "nodes": [
    [
      "path",
      {
        "d": "M 11.71 7.41 3.32 6.96 Q 4.46 5.02 5.60 3.08 Q 8.93 6.05 12.26 9.03 Q 14.96 6.38 17.66 3.73 Q 19.16 4.28 20.65 4.84 Q 18.85 6.63 17.05 8.43 Q 18.58 8.15 20.11 7.87 Z"
      }
    ]
  ]
};

export const DuctoJunior = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 11.71 7.41 3.32 6.96 Q 4.46 5.02 5.60 3.08 Q 8.93 6.05 12.26 9.03 Q 14.96 6.38 17.66 3.73 Q 19.16 4.28 20.65 4.84 Q 18.85 6.63 17.05 8.43 Q 18.58 8.15 20.11 7.87 Z" />
      {children}
    </svg>
  );
});

export default DuctoJunior;
