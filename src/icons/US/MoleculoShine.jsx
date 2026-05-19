import React from 'react';

export const iconData = {
  "id": "MoleculoShine",
  "name": "MoleculoShine",
  "category": "US",
  "nodes": [
    [
      "path",
      {
        "d": "M 8.67 10.07 11.81 7.76 Q 14.12 11.84 16.43 15.93 Q 14.81 17.27 13.19 18.62 Q 13.04 19.01 12.88 19.41 Q 9.59 18.23 6.29 17.04 Q 5.91 14.71 5.52 12.38 Z"
      }
    ]
  ]
};

export const MoleculoShine = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 8.67 10.07 11.81 7.76 Q 14.12 11.84 16.43 15.93 Q 14.81 17.27 13.19 18.62 Q 13.04 19.01 12.88 19.41 Q 9.59 18.23 6.29 17.04 Q 5.91 14.71 5.52 12.38 Z" />
      {children}
    </svg>
  );
});

export default MoleculoShine;
