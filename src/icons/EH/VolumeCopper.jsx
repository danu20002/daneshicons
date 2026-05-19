import React from 'react';

export const iconData = {
  "id": "VolumeCopper",
  "name": "VolumeCopper",
  "category": "EH",
  "nodes": [
    [
      "path",
      {
        "d": "M 21.13 16.18 L 12.52 17.55 L 3.81 17.81 L 6.93 9.68 L 11.06 2.00 L 16.55 8.77 Z"
      }
    ]
  ]
};

export const VolumeCopper = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 21.13 16.18 L 12.52 17.55 L 3.81 17.81 L 6.93 9.68 L 11.06 2.00 L 16.55 8.77 Z" />
      {children}
    </svg>
  );
});

export default VolumeCopper;
