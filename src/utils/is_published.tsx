export const is_published_status = (value: boolean) => {
    if (value) {
      return (
        <div className="flex items-center gap-1 text-[#0D9488]">
          <div className="bg-[#0D9488] w-[6px] h-[6px] rounded-[50%]" />
          <p>Published</p>
        </div>
      );
    } else {
      return <div className="flex items-center gap-1 text-[#AAAAAA]">
        <div className="bg-[#AAAAAA] w-[6px] h-[6px] rounded-[50%]" />
        <p>Not Published</p>
      </div>;
    }
  };