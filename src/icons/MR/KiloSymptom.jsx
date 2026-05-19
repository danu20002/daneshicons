import React from 'react';

export const iconData = {
  "id": "KiloSymptom",
  "name": "KiloSymptom",
  "category": "MR",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.94 13.49 3.34 6.30 Q 8.52 7.07 13.70 7.85 Q 15.30 5.64 16.90 3.44 Q 16.62 7.08 16.35 10.73 Q 16.33 11.11 16.31 11.48 Q 16.39 13.31 16.47 15.14 Q 10.51 17.91 4.55 20.67 Z"
      }
    ]
  ]
};

export const KiloSymptom = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.94 13.49 3.34 6.30 Q 8.52 7.07 13.70 7.85 Q 15.30 5.64 16.90 3.44 Q 16.62 7.08 16.35 10.73 Q 16.33 11.11 16.31 11.48 Q 16.39 13.31 16.47 15.14 Q 10.51 17.91 4.55 20.67 Z" />
      {children}
    </svg>
  );
});

export default KiloSymptom;
