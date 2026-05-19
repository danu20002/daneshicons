import React from 'react';

export const iconData = {
  "id": "VinovoSegment",
  "name": "VinovoSegment",
  "category": "CR",
  "nodes": [
    [
      "path",
      {
        "d": "M 20.95 14.80 L 12.10 21.38 L 3.11 15.00 L 6.40 4.47 L 17.43 4.35 Z"
      }
    ]
  ]
};

export const VinovoSegment = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 20.95 14.80 L 12.10 21.38 L 3.11 15.00 L 6.40 4.47 L 17.43 4.35 Z" />
      {children}
    </svg>
  );
});

export default VinovoSegment;
