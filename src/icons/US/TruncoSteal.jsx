import React from 'react';

export const iconData = {
  "id": "TruncoSteal",
  "name": "TruncoSteal",
  "category": "US",
  "nodes": [
    [
      "path",
      {
        "d": "M 6.27 13.10 3.49 5.97 Q 7.18 7.53 10.86 9.09 Q 11.58 10.04 12.29 11.00 Q 12.79 15.35 13.29 19.71 Q 11.16 19.97 9.04 20.23 Z"
      }
    ]
  ]
};

export const TruncoSteal = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 6.27 13.10 3.49 5.97 Q 7.18 7.53 10.86 9.09 Q 11.58 10.04 12.29 11.00 Q 12.79 15.35 13.29 19.71 Q 11.16 19.97 9.04 20.23 Z" />
      {children}
    </svg>
  );
});

export default TruncoSteal;
