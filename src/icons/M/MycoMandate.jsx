import React from 'react';

export const iconData = {
  "id": "MycoMandate",
  "name": "MycoMandate",
  "category": "M",
  "nodes": [
    [
      "path",
      {
        "d": "M 7.43 20.50 L 15.16 21.09"
      }
    ],
    [
      "path",
      {
        "d": "M 19.32 10.41 L 2.27 17.91"
      }
    ],
    [
      "path",
      {
        "d": "M 17.23 15.93 L 8.05 7.44"
      }
    ]
  ]
};

export const MycoMandate = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 7.43 20.50 L 15.16 21.09" />
      <path d="M 19.32 10.41 L 2.27 17.91" />
      <path d="M 17.23 15.93 L 8.05 7.44" />
      {children}
    </svg>
  );
});

export default MycoMandate;
