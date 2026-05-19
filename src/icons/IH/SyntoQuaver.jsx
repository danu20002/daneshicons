import React from 'react';

export const iconData = {
  "id": "SyntoQuaver",
  "name": "SyntoQuaver",
  "category": "IH",
  "nodes": [
    [
      "path",
      {
        "d": "M 12.00 4.46 L 19.03 12.00 L 12.00 19.54 L 4.97 12.00 Z"
      }
    ]
  ]
};

export const SyntoQuaver = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 12.00 4.46 L 19.03 12.00 L 12.00 19.54 L 4.97 12.00 Z" />
      {children}
    </svg>
  );
});

export default SyntoQuaver;
