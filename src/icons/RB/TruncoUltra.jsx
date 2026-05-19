import React from 'react';

export const iconData = {
  "id": "TruncoUltra",
  "name": "TruncoUltra",
  "category": "RB",
  "nodes": [
    [
      "path",
      {
        "d": "M 7.28 12.96 9.82 11.39 Q 8.52 10.80 7.23 10.22 Q 10.35 6.64 13.47 3.07 Q 15.61 4.10 17.76 5.14 Q 19.17 12.61 20.58 20.08 Q 17.46 19.96 14.33 19.83 Q 11.35 19.69 8.37 19.55 Q 6.56 17.04 4.75 14.52 Z"
      }
    ]
  ]
};

export const TruncoUltra = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 7.28 12.96 9.82 11.39 Q 8.52 10.80 7.23 10.22 Q 10.35 6.64 13.47 3.07 Q 15.61 4.10 17.76 5.14 Q 19.17 12.61 20.58 20.08 Q 17.46 19.96 14.33 19.83 Q 11.35 19.69 8.37 19.55 Q 6.56 17.04 4.75 14.52 Z" />
      {children}
    </svg>
  );
});

export default TruncoUltra;
