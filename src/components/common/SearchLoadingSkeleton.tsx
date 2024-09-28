import { Skeleton, SVGSkeleton } from "./Skeleton";

export const SearchLoadingSkeleton = () => (
  <>
    <div className="border dark:border-light-primary border-dark-primary items-center m-4 md:w-92">
      <div>
        <div className="w-full overflow-auto">
          <table className="w-full caption-bottom">
            <thead className="[&amp;_tr]:border-b">
              <tr className="border-b transition-colors">
                <th className="h-12 px-4 text-left align-middle [&amp;:has([role=checkbox])]:pr-0">
                  <div>
                    <Skeleton className="w-[32px] max-w-full" />
                  </div>
                </th>
                <th className="h-12 px-4 text-left align-middle [&amp;:has([role=checkbox])]:pr-0">
                  <div>
                    <Skeleton className="w-[64px] max-w-full" />
                  </div>
                </th>
                <th className="h-12 px-4 text-left align-middle [&amp;:has([role=checkbox])]:pr-0">
                  <div>
                    <Skeleton className="w-[32px] max-w-full" />
                  </div>
                </th>
              </tr>
            </thead>
            <tbody className="[&amp;_tr:last-child]:border-0">
              <tr className="border-b transition-colors">
                <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">
                  <a>
                    <Skeleton className="w-[192px] max-w-full" />
                  </a>
                </td>
                <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">
                  <div>
                    <Skeleton className="w-[120px] max-w-full" />
                  </div>
                </td>
                <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">
                  <Skeleton className="w-[112px] max-w-full" />
                </td>
              </tr>
              <tr className="border-b transition-colors">
                <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">
                  <a>
                    <Skeleton className="w-[192px] max-w-full" />
                  </a>
                </td>
                <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">
                  <div>
                    <Skeleton className="w-[152px] max-w-full" />
                  </div>
                </td>
                <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">
                  <Skeleton className="w-[112px] max-w-full" />
                </td>
              </tr>
              <tr className="border-b transition-colors">
                <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">
                  <a>
                    <Skeleton className="w-[184px] max-w-full" />
                  </a>
                </td>
                <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">
                  <div>
                    <Skeleton className="w-[120px] max-w-full" />
                  </div>
                </td>
                <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">
                  <Skeleton className="w-[112px] max-w-full" />
                </td>
              </tr>
              <tr className="border-b transition-colors">
                <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">
                  <a>
                    <Skeleton className="w-[184px] max-w-full" />
                  </a>
                </td>
                <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">
                  <div>
                    <Skeleton className="w-[200px] max-w-full" />
                  </div>
                </td>
                <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">
                  <Skeleton className="w-[112px] max-w-full" />
                </td>
              </tr>
              <tr className="border-b transition-colors">
                <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">
                  <a>
                    <Skeleton className="w-[128px] max-w-full" />
                  </a>
                </td>
                <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">
                  <div>
                    <Skeleton className="w-[192px] max-w-full" />
                  </div>
                </td>
                <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">
                  <Skeleton className="w-[240px] max-w-full" />
                </td>
              </tr>
              <tr className="border-b transition-colors">
                <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">
                  <a>
                    <Skeleton className="w-[192px] max-w-full" />
                  </a>
                </td>
                <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">
                  <div>
                    <Skeleton className="w-[160px] max-w-full" />
                  </div>
                </td>
                <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">
                  <Skeleton className="w-[240px] max-w-full" />
                </td>
              </tr>
              <tr className="border-b transition-colors">
                <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">
                  <a>
                    <Skeleton className="w-[192px] max-w-full" />
                  </a>
                </td>
                <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">
                  <div>
                    <Skeleton className="w-[168px] max-w-full" />
                  </div>
                </td>
                <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">
                  <Skeleton className="w-[424px] max-w-full" />
                </td>
              </tr>
              <tr className="border-b transition-colors">
                <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">
                  <a>
                    <Skeleton className="w-[128px] max-w-full" />
                  </a>
                </td>
                <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">
                  <div>
                    <Skeleton className="w-[192px] max-w-full" />
                  </div>
                </td>
                <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">
                  <Skeleton className="w-[240px] max-w-full" />
                </td>
              </tr>
              <tr className="border-b transition-colors">
                <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">
                  <a>
                    <Skeleton className="w-[120px] max-w-full" />
                  </a>
                </td>
                <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">
                  <div>
                    <Skeleton className="w-[208px] max-w-full" />
                  </div>
                </td>
                <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">
                  <Skeleton className="w-[240px] max-w-full" />
                </td>
              </tr>
              <tr className="border-b transition-colors">
                <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">
                  <a>
                    <Skeleton className="w-[208px] max-w-full" />
                  </a>
                </td>
                <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">
                  <div>
                    <Skeleton className="w-[176px] max-w-full" />
                  </div>
                </td>
                <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">
                  <Skeleton className="w-[240px] max-w-full" />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </>
);
