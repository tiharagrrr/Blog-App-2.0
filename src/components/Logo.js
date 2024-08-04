import Link from "next/link"
import Image from "next/image"
import profileImage from "../public/profile.jpg"

const Logo = () => {
  return (
    <Link href="/">
        <div>
            <Image src="/logo.png" alt="logo" width={50} height={50} /> 
        </div>
    </Link>
  )
}

export default Logo