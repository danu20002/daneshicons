import React from 'react';

export const iconData = {
  "id": "TurcheseQuintet",
  "name": "TurcheseQuintet",
  "category": "IR",
  "nodes": [
    [
      "path",
      {
        "d": "M 13.93 1.98 L 15.76 8.48 L 22.13 10.74 L 16.51 14.49 L 16.33 21.24 L 11.03 17.06 L 4.55 18.97 L 6.89 12.64 L 3.06 7.07 L 9.81 7.33 Z"
      }
    ]
  ]
};

export const TurcheseQuintet = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 13.93 1.98 L 15.76 8.48 L 22.13 10.74 L 16.51 14.49 L 16.33 21.24 L 11.03 17.06 L 4.55 18.97 L 6.89 12.64 L 3.06 7.07 L 9.81 7.33 Z" />
      {children}
    </svg>
  );
});

export default TurcheseQuintet;
