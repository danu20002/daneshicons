import React from 'react';

export const iconData = {
  id: "HeadphoneOff",
  name: "HeadphoneOff",
  category: "H",
  nodes: [["path",{"d":"M21 14h-1.343"}],["path",{"d":"M9.128 3.47A9 9 0 0 1 21 12v3.343"}],["path",{"d":"m2 2 20 20"}],["path",{"d":"M20.414 20.414A2 2 0 0 1 19 21h-1a2 2 0 0 1-2-2v-3"}],["path",{"d":"M3 14h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a9 9 0 0 1 2.636-6.364"}]]
};

export const HeadphoneOff = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M21 14h-1.343" />
      <path d="M9.128 3.47A9 9 0 0 1 21 12v3.343" />
      <path d="m2 2 20 20" />
      <path d="M20.414 20.414A2 2 0 0 1 19 21h-1a2 2 0 0 1-2-2v-3" />
      <path d="M3 14h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a9 9 0 0 1 2.636-6.364" />
      {children}
    </svg>
  );
});

export default HeadphoneOff;
