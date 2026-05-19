import React from 'react';

export const iconData = {
  "id": "ValicoMoss",
  "name": "ValicoMoss",
  "category": "JU",
  "nodes": [
    [
      "path",
      {
        "d": "M 5.32 19.17 L 17.06 4.51 L 8.28 5.17 L 11.39 13.22"
      }
    ],
    [
      "circle",
      {
        "cx": "5.32",
        "cy": "19.17",
        "r": "1.41"
      }
    ],
    [
      "circle",
      {
        "cx": "17.06",
        "cy": "4.51",
        "r": "0.52"
      }
    ],
    [
      "circle",
      {
        "cx": "8.28",
        "cy": "5.17",
        "r": "0.69"
      }
    ],
    [
      "circle",
      {
        "cx": "11.39",
        "cy": "13.22",
        "r": "0.52"
      }
    ]
  ]
};

export const ValicoMoss = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 5.32 19.17 L 17.06 4.51 L 8.28 5.17 L 11.39 13.22" />
      <circle cx="5.32" cy="19.17" r="1.41" />
      <circle cx="17.06" cy="4.51" r="0.52" />
      <circle cx="8.28" cy="5.17" r="0.69" />
      <circle cx="11.39" cy="13.22" r="0.52" />
      {children}
    </svg>
  );
});

export default ValicoMoss;
