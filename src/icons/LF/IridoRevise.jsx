import React from 'react';

export const iconData = {
  "id": "IridoRevise",
  "name": "IridoRevise",
  "category": "LF",
  "nodes": [
    [
      "path",
      {
        "d": "M 7.16 11.11 7.08 6.10 Q 13.75 5.73 20.43 5.36 Q 19.25 7.12 18.08 8.89 Q 17.71 9.60 17.35 10.31 Q 16.94 12.38 16.54 14.45 Q 15.65 16.18 14.77 17.92 Q 13.93 16.22 13.08 14.51 Q 10.17 15.32 7.25 16.12 Z"
      }
    ]
  ]
};

export const IridoRevise = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 7.16 11.11 7.08 6.10 Q 13.75 5.73 20.43 5.36 Q 19.25 7.12 18.08 8.89 Q 17.71 9.60 17.35 10.31 Q 16.94 12.38 16.54 14.45 Q 15.65 16.18 14.77 17.92 Q 13.93 16.22 13.08 14.51 Q 10.17 15.32 7.25 16.12 Z" />
      {children}
    </svg>
  );
});

export default IridoRevise;
