import React from 'react';

export const iconData = {
  "id": "TriumviLever",
  "name": "TriumviLever",
  "category": "DX",
  "nodes": [
    [
      "path",
      {
        "d": "M 7.56 11.62 7.19 9.59 Q 12.26 6.46 17.32 3.34 Q 16.65 7.87 15.98 12.41 Q 14.16 14.87 12.33 17.33 Q 10.77 15.94 9.21 14.54 Q 6.35 16.60 3.49 18.66 Q 3.64 17.21 3.79 15.77 Q 5.86 14.70 7.93 13.64 Z"
      }
    ]
  ]
};

export const TriumviLever = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 7.56 11.62 7.19 9.59 Q 12.26 6.46 17.32 3.34 Q 16.65 7.87 15.98 12.41 Q 14.16 14.87 12.33 17.33 Q 10.77 15.94 9.21 14.54 Q 6.35 16.60 3.49 18.66 Q 3.64 17.21 3.79 15.77 Q 5.86 14.70 7.93 13.64 Z" />
      {children}
    </svg>
  );
});

export default TriumviLever;
