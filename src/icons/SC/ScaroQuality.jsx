import React from 'react';

export const iconData = {
  "id": "ScaroQuality",
  "name": "ScaroQuality",
  "category": "SC",
  "nodes": [
    [
      "path",
      {
        "d": "M 19.25 7.50 L 20.04 14.86 L 14.77 20.07 L 7.42 19.20 L 3.52 12.91 L 6.00 5.93 L 13.00 3.53 Z"
      }
    ]
  ]
};

export const ScaroQuality = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 19.25 7.50 L 20.04 14.86 L 14.77 20.07 L 7.42 19.20 L 3.52 12.91 L 6.00 5.93 L 13.00 3.53 Z" />
      {children}
    </svg>
  );
});

export default ScaroQuality;
