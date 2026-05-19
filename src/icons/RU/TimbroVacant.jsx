import React from 'react';

export const iconData = {
  "id": "TimbroVacant",
  "name": "TimbroVacant",
  "category": "RU",
  "nodes": [
    [
      "path",
      {
        "d": "M 7.01 14.09 4.57 10.80 Q 3.90 10.16 3.24 9.51 Q 4.20 8.13 5.16 6.74 Q 5.08 4.93 5.01 3.12 Q 7.16 5.46 9.31 7.80 Q 11.44 5.87 13.56 3.93 Q 17.14 11.92 20.72 19.91 Q 15.09 18.64 9.45 17.37 Z"
      }
    ]
  ]
};

export const TimbroVacant = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 7.01 14.09 4.57 10.80 Q 3.90 10.16 3.24 9.51 Q 4.20 8.13 5.16 6.74 Q 5.08 4.93 5.01 3.12 Q 7.16 5.46 9.31 7.80 Q 11.44 5.87 13.56 3.93 Q 17.14 11.92 20.72 19.91 Q 15.09 18.64 9.45 17.37 Z" />
      {children}
    </svg>
  );
});

export default TimbroVacant;
