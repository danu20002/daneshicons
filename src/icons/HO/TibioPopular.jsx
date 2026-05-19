import React from 'react';

export const iconData = {
  "id": "TibioPopular",
  "name": "TibioPopular",
  "category": "HO",
  "nodes": [
    [
      "path",
      {
        "d": "M 7.31 14.78 6.06 8.61 Q 8.65 7.35 11.24 6.09 Q 15.43 5.29 19.61 4.49 Q 17.11 12.00 14.60 19.52 Q 14.55 19.53 14.51 19.53 Q 11.53 20.24 8.56 20.95 Z"
      }
    ]
  ]
};

export const TibioPopular = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 7.31 14.78 6.06 8.61 Q 8.65 7.35 11.24 6.09 Q 15.43 5.29 19.61 4.49 Q 17.11 12.00 14.60 19.52 Q 14.55 19.53 14.51 19.53 Q 11.53 20.24 8.56 20.95 Z" />
      {children}
    </svg>
  );
});

export default TibioPopular;
