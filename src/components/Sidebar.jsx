import FiltersList from './Filters';

export default function Sidebar() {
  return (
    <aside className="fixed w-[15%] h-[90%] text-black flex flex-col dark:text-white">
      
      <div className="flex-1 overflow-y-auto p-4 pb-20 scrollbar-custom">
        <FiltersList />
      </div>
    </aside>
  );
}