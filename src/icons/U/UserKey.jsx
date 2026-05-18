import React from 'react';

export const iconData = {
  id: "UserKey",
  name: "UserKey",
  category: "U",
  nodes: [["path",{"d":"M20 11v6"}],["path",{"d":"M20 13h2"}],["path",{"d":"M3 21v-2a4 4 0 0 1 4-4h6a4 4 0 0 1 2.072.578"}],["circle",{"cx":"10","cy":"7","r":"4"}],["circle",{"cx":"20","cy":"19","r":"2"}]]
};

export const UserKey = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M20 11v6" />
      <path d="M20 13h2" />
      <path d="M3 21v-2a4 4 0 0 1 4-4h6a4 4 0 0 1 2.072.578" />
      <circle cx="10" cy="7" r="4" />
      <circle cx="20" cy="19" r="2" />
      {children}
    </svg>
  );
});

export default UserKey;
