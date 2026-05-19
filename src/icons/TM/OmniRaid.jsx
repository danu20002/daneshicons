import React from 'react';

export const iconData = {
  "id": "OmniRaid",
  "name": "OmniRaid",
  "category": "TM",
  "nodes": [
    [
      "path",
      {
        "d": "M 2.51 11.04 L 5.97 4.61 L 12.96 2.51 L 19.39 5.97 L 21.49 12.96 L 18.03 19.39 L 11.04 21.49 L 4.61 18.03 Z"
      }
    ]
  ]
};

export const OmniRaid = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 2.51 11.04 L 5.97 4.61 L 12.96 2.51 L 19.39 5.97 L 21.49 12.96 L 18.03 19.39 L 11.04 21.49 L 4.61 18.03 Z" />
      {children}
    </svg>
  );
});

export default OmniRaid;
