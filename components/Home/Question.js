import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
function Question({question}) {
  return (
    <div className="flex w-full py-3 px-3">
      <div className="w-1/12 flex justify-center">
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" className="w-10" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </div>
      <div className="w-11/12 pl-4">
        <p className="font-medium text-sm">You</p>
        <p className="text-sm">{question===undefined?"":question}</p>
      </div>
    </div>
  );
}

export default Question;
