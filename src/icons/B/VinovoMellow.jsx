import React from 'react';

export const iconData = {
  "id": "VinovoMellow",
  "name": "VinovoMellow",
  "category": "B",
  "nodes": [
    [
      "path",
      {
        "d": "M 20.57 14.65 L 16.18 19.93 L 9.35 20.57 L 4.07 16.18 L 3.43 9.35 L 7.82 4.07 L 14.65 3.43 L 19.93 7.82 Z"
      }
    ]
  ]
};

export const VinovoMellow = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 20.57 14.65 L 16.18 19.93 L 9.35 20.57 L 4.07 16.18 L 3.43 9.35 L 7.82 4.07 L 14.65 3.43 L 19.93 7.82 Z" />
      {children}
    </svg>
  );
});

export default VinovoMellow;
