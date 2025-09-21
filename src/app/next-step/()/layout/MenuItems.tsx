import Link from "next/link";

export interface MenuItemsProps {
  href: string;
  text: string;
  icon?: React.ReactNode;
}

export default function MenuItems(props: MenuItemsProps) {
  return (
    <Link href={props.href} className="flex items-center gap-2">
      <span>{props.icon}</span>
      <span className="hidden sm:flex">{props.text}</span>
    </Link>
  )
}