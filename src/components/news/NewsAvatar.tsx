import Image from "next/image"
import Link from "next/link"

export default function NewsAvatar() {
  return (
    <Link href="/">
      <div className="w-12 h-12 rounded-full overflow-hidden shadow-lg flex items-center justify-center cursor-pointer">
        <Image
          src="/logo.png"
          alt="Payame Insaaniyat Logo"
          width={40}
          height={40}
          className="object-cover p-1"
        />
      </div>
    </Link>
  )
}