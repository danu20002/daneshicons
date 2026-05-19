import React from 'react';

export const iconData = {
  "id": "EunoQuasar",
  "name": "EunoQuasar",
  "category": "VC",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.96 19.43 L 8.73 12.97 L 2.04 9.62 L 9.52 9.66 L 9.08 2.19 L 12.79 8.68 L 19.04 4.57 L 15.27 11.03 L 21.96 14.38 L 14.48 14.34 L 14.92 21.81 L 11.21 15.32 Z"
      }
    ]
  ]
};

export const EunoQuasar = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.96 19.43 L 8.73 12.97 L 2.04 9.62 L 9.52 9.66 L 9.08 2.19 L 12.79 8.68 L 19.04 4.57 L 15.27 11.03 L 21.96 14.38 L 14.48 14.34 L 14.92 21.81 L 11.21 15.32 Z" />
      {children}
    </svg>
  );
});

export default EunoQuasar;
