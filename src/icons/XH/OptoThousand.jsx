import React from 'react';

export const iconData = {
  "id": "OptoThousand",
  "name": "OptoThousand",
  "category": "XH",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.22 7.03 L 9.93 6.71 L 14.32 3.07 L 16.39 8.39 L 21.22 11.45 L 16.78 15.06 L 15.37 20.59 L 10.57 17.50 L 4.87 17.86 L 6.33 12.34 Z"
      }
    ]
  ]
};

export const OptoThousand = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.22 7.03 L 9.93 6.71 L 14.32 3.07 L 16.39 8.39 L 21.22 11.45 L 16.78 15.06 L 15.37 20.59 L 10.57 17.50 L 4.87 17.86 L 6.33 12.34 Z" />
      {children}
    </svg>
  );
});

export default OptoThousand;
