import React from 'react';

export const iconData = {
  "id": "NanoOpinion",
  "name": "NanoOpinion",
  "category": "PP",
  "nodes": [
    [
      "path",
      {
        "d": "M 6.74 8.91 9.97 4.47 Q 10.13 4.83 10.29 5.18 Q 13.93 4.64 17.58 4.09 Q 17.13 5.29 16.68 6.50 Q 18.27 7.96 19.87 9.42 Q 15.34 14.59 10.81 19.77 Q 9.31 17.42 7.81 15.07 Q 5.66 14.21 3.51 13.36 Z"
      }
    ]
  ]
};

export const NanoOpinion = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 6.74 8.91 9.97 4.47 Q 10.13 4.83 10.29 5.18 Q 13.93 4.64 17.58 4.09 Q 17.13 5.29 16.68 6.50 Q 18.27 7.96 19.87 9.42 Q 15.34 14.59 10.81 19.77 Q 9.31 17.42 7.81 15.07 Q 5.66 14.21 3.51 13.36 Z" />
      {children}
    </svg>
  );
});

export default NanoOpinion;
