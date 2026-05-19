import React from 'react';

export const iconData = {
  "id": "ZoppicoBrick",
  "name": "ZoppicoBrick",
  "category": "KM",
  "nodes": [
    [
      "path",
      {
        "d": "M 8.30 14.47 7.84 9.44 Q 9.14 10.16 10.44 10.88 Q 12.30 13.25 14.16 15.63 Q 14.23 16.55 14.29 17.47 Q 13.41 18.55 12.52 19.63 Q 10.63 19.57 8.75 19.50 Z"
      }
    ]
  ]
};

export const ZoppicoBrick = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 8.30 14.47 7.84 9.44 Q 9.14 10.16 10.44 10.88 Q 12.30 13.25 14.16 15.63 Q 14.23 16.55 14.29 17.47 Q 13.41 18.55 12.52 19.63 Q 10.63 19.57 8.75 19.50 Z" />
      {children}
    </svg>
  );
});

export default ZoppicoBrick;
