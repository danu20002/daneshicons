import React from 'react';

export const iconData = {
  "id": "LigroCopper",
  "name": "LigroCopper",
  "category": "XR",
  "nodes": [
    [
      "path",
      {
        "d": "M 21.12 14.10 L 3.82 18.87 L 14.89 7.04 L 9.94 20.42"
      }
    ],
    [
      "circle",
      {
        "cx": "21.12",
        "cy": "14.10",
        "r": "0.53"
      }
    ],
    [
      "circle",
      {
        "cx": "3.82",
        "cy": "18.87",
        "r": "1.35"
      }
    ],
    [
      "circle",
      {
        "cx": "14.89",
        "cy": "7.04",
        "r": "0.73"
      }
    ],
    [
      "circle",
      {
        "cx": "9.94",
        "cy": "20.42",
        "r": "0.51"
      }
    ]
  ]
};

export const LigroCopper = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 21.12 14.10 L 3.82 18.87 L 14.89 7.04 L 9.94 20.42" />
      <circle cx="21.12" cy="14.10" r="0.53" />
      <circle cx="3.82" cy="18.87" r="1.35" />
      <circle cx="14.89" cy="7.04" r="0.73" />
      <circle cx="9.94" cy="20.42" r="0.51" />
      {children}
    </svg>
  );
});

export default LigroCopper;
