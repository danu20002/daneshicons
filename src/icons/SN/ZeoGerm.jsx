import React from 'react';

export const iconData = {
  "id": "ZeoGerm",
  "name": "ZeoGerm",
  "category": "SN",
  "nodes": [
    [
      "path",
      {
        "d": "M 10.55 15.56 9.41 11.62 Q 7.53 9.05 5.65 6.49 Q 11.10 7.35 16.56 8.21 Q 15.91 10.40 15.26 12.59 Q 13.47 16.04 11.69 19.49 Z"
      }
    ]
  ]
};

export const ZeoGerm = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 10.55 15.56 9.41 11.62 Q 7.53 9.05 5.65 6.49 Q 11.10 7.35 16.56 8.21 Q 15.91 10.40 15.26 12.59 Q 13.47 16.04 11.69 19.49 Z" />
      {children}
    </svg>
  );
});

export default ZeoGerm;
