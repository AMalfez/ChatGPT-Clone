function InputForm() {
  return (
    <div className="w-3/4">
      <input className="py-3 px-4 border rounded-lg outline-0 w-full" type="text" placeholder="Message ChatGPT"/>
      <p className="text-gray-400 text-center text-xs py-2">ChatGPT can make mistakes. Check important info.</p>
    </div>
  )
}

export default InputForm