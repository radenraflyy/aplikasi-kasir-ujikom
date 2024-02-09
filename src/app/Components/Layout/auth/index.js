import React from "react"
import Image from "next/image"
import { kasirLogo, logoWk } from "../../../../../public/image"

const AuthLayout = ({ children }) => {
  return (
    <div>
      <main className="flex flex-col justify-center items-center">
        <header>
          <Image src={kasirLogo} alt="Kasir Logo" width={200} height={200} />
        </header>
        <div>{children}</div>
        <footer className="flex flex-col justify-center items-center mt-5">
          <Image src={logoWk} alt="Kasir Logo" width={60} height={60} />
          <p className="text-xs">Copyright © 2022. All Rights Reserved.</p>
        </footer>
      </main>
    </div>
  )
}

export default AuthLayout
