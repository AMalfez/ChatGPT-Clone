import {DummyResponse} from "@/DummyResponse";
function SampleMsg() {
  const res =
    DummyResponse.length > 4 ? DummyResponse.slice(0, 4) : DummyResponse;
  return (
    <div className="grid grid-cols-2 gap-2 w-9/12">
      {res.map((res) => (
        <div key={res.message} className="border py-3 px-3 rounded cursor-pointer hover:bg-gray-100">
          <p className="font-semibold text-sm">{res.message}</p>
          <p className="text-sm text-gray-400">{res.context}</p>
        </div>
      ))}
    </div>
  );
}

export default SampleMsg;
