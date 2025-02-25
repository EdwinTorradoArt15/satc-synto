const PageHeader = (props: any) => {
  return (
    <div className="block justify-between page-header md:flex">
      <div>
        <h3 className="text-gray-700 hover:text-gray-900 dark:text-white dark:hover:text-white text-2xl font-medium">
          {props.currentpage}
        </h3>
      </div>
      <ol className="flex items-center whitespace-nowrap min-w-0">
        <li className="text-sm">
          <p
            className="flex items-center font-semibold text-primary hover:text-primary dark:text-primary truncate"
          >
            {props.activepage}
            <i className="ti ti-chevrons-right flex-shrink-0 mx-3 overflow-visible text-gray-300 dark:text-gray-300 rtl:rotate-180"></i>
          </p>
        </li>
        <li
          className="text-sm text-gray-500 hover:text-primary dark:text-white/70 "
          aria-current="page"
        >
          {props.mainpage}
        </li>
      </ol>
    </div>
  );
};

export default PageHeader;
