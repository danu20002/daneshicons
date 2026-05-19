import React from 'react';

export const iconData = {
  "id": "VitaleDwell",
  "name": "VitaleDwell",
  "category": "VA",
  "nodes": [
    [
      "path",
      {
        "d": "M 16.90 4.30 L 20.71 9.25 L 20.44 15.49 L 16.22 20.10 L 10.03 20.92 L 4.76 17.56 L 2.88 11.61 L 5.27 5.83 L 10.80 2.95 Z"
      }
    ]
  ]
};

export const VitaleDwell = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 16.90 4.30 L 20.71 9.25 L 20.44 15.49 L 16.22 20.10 L 10.03 20.92 L 4.76 17.56 L 2.88 11.61 L 5.27 5.83 L 10.80 2.95 Z" />
      {children}
    </svg>
  );
});

export default VitaleDwell;
