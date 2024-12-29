import Image from "next/image"

const AdminCard = () => {
  return (
    <div className="w-72 h-80 flex flex-col items-center justify-center gap-2 shadow-md rounded-lg p-4  ">
            <Image src={'/images/users/profile.png'} alt="avatar" height={300} width={300} className="h-40 w-auto" />
            <h1 className="text-2xl">Kafeel Ahmed</h1>
            <p className="text-sm text-border_gray">iamkafeelahmedch@gmail.com</p>
    </div>
  )
}

export default AdminCard