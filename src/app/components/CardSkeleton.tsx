import { Card, Skeleton } from "@nextui-org/react";

export default function App() {
  return (
    <Card
      className="w-[300px] h-[380px] min-w-[240px] min-h-[340px] gap-4 mt-10 mb-10 p-4"
      radius="lg"
    >
      <Skeleton className="rounded-lg">
        <div className="h-36 rounded-lg bg-default-300"></div>
      </Skeleton>
      <div className="space-y-3">
        <div className="flex mb-5">
          <Skeleton className="w-2/5 rounded-lg mr-3">
            <div className="h-3 w-3/5 rounded-lg bg-default-200"></div>
          </Skeleton>
          <Skeleton className="w-3/5 rounded-lg">
            <div className="h-3 w-3/5 rounded-lg bg-default-200"></div>
          </Skeleton>
        </div>
        <div className="flex flex-col items-center">
          <Skeleton className="w-4/5 rounded-lg mb-3">
            <div className="h-5 w-4/5 rounded-lg bg-default-200"></div>
          </Skeleton>
          <Skeleton className="w-4/5 rounded-lg">
            <div className="h-5 w-4/5 rounded-lg bg-default-200"></div>
          </Skeleton>
        </div>
        <div className="flex flex-col gap-2 pt-4">
          <Skeleton className="w-4/5 rounded-lg">
            <div className="h-3 w-2/5 rounded-lg bg-default-300"></div>
          </Skeleton>
          <Skeleton className="w-4/5 rounded-lg">
            <div className="h-3 w-2/5 rounded-lg bg-default-300"></div>
          </Skeleton>
          <Skeleton className="w-3/5 rounded-lg">
            <div className="h-3 w-2/5 rounded-lg bg-default-300"></div>
          </Skeleton>
        </div>
      </div>
    </Card>
  );
}
