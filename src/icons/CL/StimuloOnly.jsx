import React from 'react';

export const iconData = {
  "id": "StimuloOnly",
  "name": "StimuloOnly",
  "category": "CL",
  "nodes": [
    [
      "path",
      {
        "d": "M 7.82 13.71 6.28 10.88 Q 5.63 9.94 4.98 9.00 Q 4.74 8.42 4.49 7.85 Q 7.04 8.39 9.59 8.93 Q 12.33 9.67 15.06 10.41 Q 14.62 12.84 14.18 15.28 Q 12.83 17.07 11.49 18.86 Q 10.43 17.70 9.36 16.53 Z"
      }
    ]
  ]
};

export const StimuloOnly = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 7.82 13.71 6.28 10.88 Q 5.63 9.94 4.98 9.00 Q 4.74 8.42 4.49 7.85 Q 7.04 8.39 9.59 8.93 Q 12.33 9.67 15.06 10.41 Q 14.62 12.84 14.18 15.28 Q 12.83 17.07 11.49 18.86 Q 10.43 17.70 9.36 16.53 Z" />
      {children}
    </svg>
  );
});

export default StimuloOnly;
