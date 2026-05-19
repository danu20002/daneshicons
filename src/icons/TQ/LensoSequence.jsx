import React from 'react';

export const iconData = {
  "id": "LensoSequence",
  "name": "LensoSequence",
  "category": "TQ",
  "nodes": [
    [
      "path",
      {
        "d": "M 18.39 18.58 L 11.96 15.07 L 5.42 18.39 L 8.93 11.96 L 5.61 5.42 L 12.04 8.93 L 18.58 5.61 L 15.07 12.04 Z"
      }
    ]
  ]
};

export const LensoSequence = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 18.39 18.58 L 11.96 15.07 L 5.42 18.39 L 8.93 11.96 L 5.61 5.42 L 12.04 8.93 L 18.58 5.61 L 15.07 12.04 Z" />
      {children}
    </svg>
  );
});

export default LensoSequence;
