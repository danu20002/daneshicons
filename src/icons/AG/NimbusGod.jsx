import React from 'react';

export const iconData = {
  "id": "NimbusGod",
  "name": "NimbusGod",
  "category": "AG",
  "nodes": [
    [
      "path",
      {
        "d": "M 5.98 12.01 7.55 5.45 Q 9.26 6.35 10.97 7.26 Q 12.66 10.41 14.36 13.57 Q 14.92 17.10 15.49 20.62 Q 9.67 20.69 3.85 20.75 Q 6.51 17.81 9.17 14.86 Q 6.79 16.72 4.42 18.57 Z"
      }
    ]
  ]
};

export const NimbusGod = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 5.98 12.01 7.55 5.45 Q 9.26 6.35 10.97 7.26 Q 12.66 10.41 14.36 13.57 Q 14.92 17.10 15.49 20.62 Q 9.67 20.69 3.85 20.75 Q 6.51 17.81 9.17 14.86 Q 6.79 16.72 4.42 18.57 Z" />
      {children}
    </svg>
  );
});

export default NimbusGod;
