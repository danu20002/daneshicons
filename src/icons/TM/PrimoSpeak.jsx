import React from 'react';

export const iconData = {
  "id": "PrimoSpeak",
  "name": "PrimoSpeak",
  "category": "TM",
  "nodes": [
    [
      "path",
      {
        "d": "M 18.02 18.04 L 5.96 18.02 L 5.98 5.96 L 18.04 5.98 Z"
      }
    ]
  ]
};

export const PrimoSpeak = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 18.02 18.04 L 5.96 18.02 L 5.98 5.96 L 18.04 5.98 Z" />
      {children}
    </svg>
  );
});

export default PrimoSpeak;
