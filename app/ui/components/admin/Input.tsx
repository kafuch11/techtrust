

const Input = (params : { name: string, text: string, placeholder: string, type?: string, required?:boolean }) => {
    const { name, text, placeholder, type, required } = params
    return (
        <div className="grid grid-rows-2 grid-cols-1 w-full">
            <label htmlFor={name} className="text-xl ">{text}</label>
            <input type={type || "text"} required={required } name={name} id={name} placeholder={placeholder} className="rounded-xl border px-4 py-2 text-lg bg-black_grad_m text-[#C2C2C2]" />
        </div>
    )
}

export default Input;