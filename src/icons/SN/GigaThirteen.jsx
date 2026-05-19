import React from 'react';

export const iconData = {
  "id": "GigaThirteen",
  "name": "GigaThirteen",
  "category": "SN",
  "nodes": [
    [
      "path",
      {
        "d": "M 9.29 10.35 9.12 6.97 Q 14.50 5.29 19.89 3.61 Q 18.83 10.52 17.78 17.44 Q 10.69 18.34 3.61 19.25 Q 6.54 16.49 9.47 13.73 Z"
      }
    ]
  ]
};

export const GigaThirteen = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 9.29 10.35 9.12 6.97 Q 14.50 5.29 19.89 3.61 Q 18.83 10.52 17.78 17.44 Q 10.69 18.34 3.61 19.25 Q 6.54 16.49 9.47 13.73 Z" />
      {children}
    </svg>
  );
});

export default GigaThirteen;
