import { Skeleton, SVGSkeleton } from "./Skeleton";

export const SchoolLoadingSkeleton = () => (
  <>
    <div className="max-w-7xl mx-auto">
      <div>
        <div className="flex justify-center m-4 items-center">
          <div className="border w-[550px] p-4 shadow-lg">
            <div className="flex flex-col space-y-1.5 p-6 items-center">
              <h3 className="leading-none tracking-tight mb-12">
                <Skeleton className="w-[232px] max-w-full" />
              </h3>
            </div>
            <div className="p-6 pt-0">
              <div className="flex flex-col items-center">
                <div className="border p-4 mb-4">
                  <Skeleton className="w-[64px] max-w-full" />
                </div>
                <p>
                  <Skeleton className="w-[168px] max-w-full" />
                </p>
                <p>
                  <Skeleton className="w-[112px] max-w-full" />
                </p>
              </div>
            </div>
            <div className="items-center p-6 pt-0 flex justify-center space-x-5 mt-10">
              <a>
                <Skeleton className="w-[96px] max-w-full" />
              </a>
              <div className="inline-flex items-center transition-colors h-10 px-4 py-2 justify-center border">
                <Skeleton className="w-[32px] max-w-full" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
);
