import React from 'react';

export const iconData = {
  "id": "SigmoDecade",
  "name": "SigmoDecade",
  "category": "N",
  "nodes": [
    [
      "path",
      {
        "d": "M 13.82 15.92 15.99 12.23 Q 18.17 16.30 20.35 20.36 Q 18.28 19.82 16.22 19.28 Q 15.24 17.78 14.26 16.29 Q 13.86 15.79 13.46 15.29 Q 12.55 17.45 11.64 19.61 Z"
      }
    ]
  ]
};

export const SigmoDecade = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 13.82 15.92 15.99 12.23 Q 18.17 16.30 20.35 20.36 Q 18.28 19.82 16.22 19.28 Q 15.24 17.78 14.26 16.29 Q 13.86 15.79 13.46 15.29 Q 12.55 17.45 11.64 19.61 Z" />
      {children}
    </svg>
  );
});

export default SigmoDecade;
