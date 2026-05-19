import React from 'react';

export const iconData = {
  "id": "PhrenSpade",
  "name": "PhrenSpade",
  "category": "YJ",
  "nodes": [
    [
      "path",
      {
        "d": "M 8.66 10.08 10.96 7.55 Q 12.20 6.95 13.45 6.36 Q 12.95 8.41 12.46 10.46 Q 13.68 8.95 14.91 7.45 Q 17.29 12.67 19.67 17.88 Q 16.48 17.92 13.29 17.97 Q 9.82 15.29 6.35 12.61 Z"
      }
    ]
  ]
};

export const PhrenSpade = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 8.66 10.08 10.96 7.55 Q 12.20 6.95 13.45 6.36 Q 12.95 8.41 12.46 10.46 Q 13.68 8.95 14.91 7.45 Q 17.29 12.67 19.67 17.88 Q 16.48 17.92 13.29 17.97 Q 9.82 15.29 6.35 12.61 Z" />
      {children}
    </svg>
  );
});

export default PhrenSpade;
