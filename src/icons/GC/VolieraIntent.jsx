import React from 'react';

export const iconData = {
  "id": "VolieraIntent",
  "name": "VolieraIntent",
  "category": "GC",
  "nodes": [
    [
      "path",
      {
        "d": "M 6.04 12.72 7.68 10.02 Q 10.13 8.80 12.57 7.57 Q 15.84 6.78 19.11 5.99 Q 19.10 13.47 19.09 20.94 Q 15.36 17.56 11.63 14.19 Q 9.88 14.70 8.13 15.21 Q 5.97 15.56 3.82 15.91 Q 4.11 15.66 4.40 15.42 Z"
      }
    ]
  ]
};

export const VolieraIntent = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 6.04 12.72 7.68 10.02 Q 10.13 8.80 12.57 7.57 Q 15.84 6.78 19.11 5.99 Q 19.10 13.47 19.09 20.94 Q 15.36 17.56 11.63 14.19 Q 9.88 14.70 8.13 15.21 Q 5.97 15.56 3.82 15.91 Q 4.11 15.66 4.40 15.42 Z" />
      {children}
    </svg>
  );
});

export default VolieraIntent;
