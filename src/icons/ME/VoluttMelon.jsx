import React from 'react';

export const iconData = {
  "id": "VoluttMelon",
  "name": "VoluttMelon",
  "category": "ME",
  "nodes": [
    [
      "path",
      {
        "d": "M 16.64 5.01 L 20.36 11.27 L 17.78 18.08 L 10.85 20.31 L 4.79 16.29 L 4.15 9.03 L 9.43 4.02 Z"
      }
    ]
  ]
};

export const VoluttMelon = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 16.64 5.01 L 20.36 11.27 L 17.78 18.08 L 10.85 20.31 L 4.79 16.29 L 4.15 9.03 L 9.43 4.02 Z" />
      {children}
    </svg>
  );
});

export default VoluttMelon;
