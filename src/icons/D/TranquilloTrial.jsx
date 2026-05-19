import React from 'react';

export const iconData = {
  "id": "TranquilloTrial",
  "name": "TranquilloTrial",
  "category": "D",
  "nodes": [
    [
      "path",
      {
        "d": "M 13.73 1.75 L 14.65 8.26 L 21.09 6.97 L 16.58 11.74 L 21.60 15.97 L 15.06 15.42 L 14.88 21.98 L 11.23 16.52 L 5.99 20.48 L 7.99 14.22 L 1.62 12.59 L 7.76 10.25 L 5.07 4.25 L 10.73 7.59 Z"
      }
    ]
  ]
};

export const TranquilloTrial = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 13.73 1.75 L 14.65 8.26 L 21.09 6.97 L 16.58 11.74 L 21.60 15.97 L 15.06 15.42 L 14.88 21.98 L 11.23 16.52 L 5.99 20.48 L 7.99 14.22 L 1.62 12.59 L 7.76 10.25 L 5.07 4.25 L 10.73 7.59 Z" />
      {children}
    </svg>
  );
});

export default TranquilloTrial;
