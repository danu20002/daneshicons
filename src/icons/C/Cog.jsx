import React from 'react';

export const iconData = {
  id: "Cog",
  name: "Cog",
  category: "C",
  nodes: [["path",{"d":"M11 10.27 7 3.34"}],["path",{"d":"m11 13.73-4 6.93"}],["path",{"d":"M12 22v-2"}],["path",{"d":"M12 2v2"}],["path",{"d":"M14 12h8"}],["path",{"d":"m17 20.66-1-1.73"}],["path",{"d":"m17 3.34-1 1.73"}],["path",{"d":"M2 12h2"}],["path",{"d":"m20.66 17-1.73-1"}],["path",{"d":"m20.66 7-1.73 1"}],["path",{"d":"m3.34 17 1.73-1"}],["path",{"d":"m3.34 7 1.73 1"}],["circle",{"cx":"12","cy":"12","r":"2"}],["circle",{"cx":"12","cy":"12","r":"8"}]]
};

export const Cog = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M11 10.27 7 3.34" />
      <path d="m11 13.73-4 6.93" />
      <path d="M12 22v-2" />
      <path d="M12 2v2" />
      <path d="M14 12h8" />
      <path d="m17 20.66-1-1.73" />
      <path d="m17 3.34-1 1.73" />
      <path d="M2 12h2" />
      <path d="m20.66 17-1.73-1" />
      <path d="m20.66 7-1.73 1" />
      <path d="m3.34 17 1.73-1" />
      <path d="m3.34 7 1.73 1" />
      <circle cx="12" cy="12" r="2" />
      <circle cx="12" cy="12" r="8" />
      {children}
    </svg>
  );
});

export default Cog;
