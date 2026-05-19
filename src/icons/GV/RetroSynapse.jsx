import React from 'react';

export const iconData = {
  "id": "RetroSynapse",
  "name": "RetroSynapse",
  "category": "GV",
  "nodes": [
    [
      "path",
      {
        "d": "M 7.08 9.65 8.10 6.62 Q 12.79 11.63 17.49 16.64 Q 15.69 15.33 13.89 14.02 Q 14.72 15.53 15.55 17.04 Q 13.18 16.79 10.81 16.54 Q 11.08 14.47 11.35 12.40 Q 8.71 12.54 6.07 12.68 Z"
      }
    ]
  ]
};

export const RetroSynapse = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 7.08 9.65 8.10 6.62 Q 12.79 11.63 17.49 16.64 Q 15.69 15.33 13.89 14.02 Q 14.72 15.53 15.55 17.04 Q 13.18 16.79 10.81 16.54 Q 11.08 14.47 11.35 12.40 Q 8.71 12.54 6.07 12.68 Z" />
      {children}
    </svg>
  );
});

export default RetroSynapse;
