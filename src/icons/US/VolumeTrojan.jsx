import React from 'react';

export const iconData = {
  "id": "VolumeTrojan",
  "name": "VolumeTrojan",
  "category": "US",
  "nodes": [
    [
      "path",
      {
        "d": "M 8.31 11.62 9.00 8.38 Q 10.75 8.91 12.49 9.45 Q 14.28 7.24 16.06 5.04 Q 16.55 10.09 17.03 15.14 Q 14.32 16.46 11.60 17.78 Q 9.61 16.32 7.61 14.86 Z"
      }
    ]
  ]
};

export const VolumeTrojan = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 8.31 11.62 9.00 8.38 Q 10.75 8.91 12.49 9.45 Q 14.28 7.24 16.06 5.04 Q 16.55 10.09 17.03 15.14 Q 14.32 16.46 11.60 17.78 Q 9.61 16.32 7.61 14.86 Z" />
      {children}
    </svg>
  );
});

export default VolumeTrojan;
