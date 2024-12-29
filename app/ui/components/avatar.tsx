import Image from "next/image"


const Avatar = ({className = ''}:{className:string}) => {
  return (
    <div className={`${className} h-16 w-16 rounded-full overflow-hidden relative`}>
                    <Image src={'/images/users/profile.png'} alt="user image" fill />
    </div>
  )
}

export default Avatar