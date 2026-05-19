import React from 'react';

export const iconData = {
  "id": "QuarzoTube",
  "name": "QuarzoTube",
  "category": "AZ",
  "nodes": [
    [
      "path",
      {
        "d": "M 7.38 11.92 3.59 11.61 Q 9.40 7.95 15.20 4.28 Q 14.99 10.43 14.78 16.59 Q 13.59 16.25 12.41 15.90 Q 12.13 17.90 11.85 19.89 Q 11.06 18.55 10.28 17.21 Q 10.72 14.72 11.17 12.23 Z"
      }
    ]
  ]
};

export const QuarzoTube = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 7.38 11.92 3.59 11.61 Q 9.40 7.95 15.20 4.28 Q 14.99 10.43 14.78 16.59 Q 13.59 16.25 12.41 15.90 Q 12.13 17.90 11.85 19.89 Q 11.06 18.55 10.28 17.21 Q 10.72 14.72 11.17 12.23 Z" />
      {children}
    </svg>
  );
});

export default QuarzoTube;
