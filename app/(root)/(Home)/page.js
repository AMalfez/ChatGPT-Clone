import InputForm from "@/components/Home/InputForm"

function Page() {
  return (
    <div className="h-screen flex flex-col justify-between items-center">
      <div className="w-full h-full border border-red-500">Home</div>
      <InputForm/>
    </div>
  )
}

export default Page