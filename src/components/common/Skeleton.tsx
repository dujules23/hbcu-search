interface Props {
  className?: string;
}

export const Skeleton: React.FC<Props> = ({ className }) => (
  <div aria-live="polite" aria-busy="true" className={className}>
    <span className="inline-flex w-full animate-pulse select-none rounded bg-gray-300 leading-none">
      ‌
    </span>
    <br />
  </div>
);

export const SVGSkeleton: React.FC<Props> = ({ className }) => (
  <svg className={className + " animate-pulse rounded bg-gray-300"} />
);
