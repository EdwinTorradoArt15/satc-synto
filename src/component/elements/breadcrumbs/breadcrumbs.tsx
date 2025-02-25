import PageHeader from '../../../components/dashboard/PageHeader';

const Breadcrumbs = () => {
  return (
    <div>

			<PageHeader currentpage="Breadcrumb" activepage="Elements" mainpage="Breadcrumb" />

        <div className= "grid grid-cols-12 gap-x-6">
          <div className= "col-span-12">
            <div className= "box">
              <div className= "box-header">
                <h5 className= "box-title">Basic Breadcrumb</h5>
              </div>
              <div className= "box-body">
                <ol className= "flex items-center whitespace-nowrap min-w-0">
                  <li className= "text-sm">
                    <a className= "flex items-center text-primary hover:text-primary dark:text-primary" href="#">
                      Home
                      <svg className= "flex-shrink-0 mx-3 overflow-visible h-2.5 w-2.5 text-gray-300 dark:text-white/10 rtl:rotate-180"
                        width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5 1L10.6869 7.16086C10.8637 7.35239 10.8637 7.64761 10.6869 7.83914L5 14"
                          stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                      </svg>
                    </a>
                  </li>
                  <li className= "text-sm">
                    <a className= "flex items-center text-primary hover:text-primary dark:text-primary" href="#">
                      App Center
                      <svg className= "flex-shrink-0 mx-3 overflow-visible h-2.5 w-2.5 text-gray-300 dark:text-white/10 rtl:rotate-180"
                        width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5 1L10.6869 7.16086C10.8637 7.35239 10.8637 7.64761 10.6869 7.83914L5 14"
                          stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                      </svg>
                    </a>
                  </li>
                  <li className= "text-sm text-gray-500 dark:text-white/70 hover:text-primary truncate" aria-current="page">
                    Application
                  </li>
                </ol>
              </div>
            </div>
          </div>
          <div className= "col-span-12">
            <div className= "box">
              <div className= "box-header">
                <h5 className= "box-title">Breadcrumb Style-1</h5>
              </div>
              <div className= "box-body">
                <ol className= "flex items-center whitespace-nowrap min-w-0">
                  <li className= "text-sm">
                    <a className= "flex items-center text-primary hover:text-primary dark:text-primary" href="#">
                      Home
                      <i
                        className= "ti ti-chevrons-right flex-shrink-0 mx-3 overflow-visible text-gray-300 dark:text-white/10 rtl:rotate-180"></i>
                    </a>
                  </li>
                  <li className= "text-sm">
                    <a className= "flex items-center text-primary hover:text-primary dark:text-primary" href="#">
                      App Center
                      <i
                        className= "ti ti-chevrons-right flex-shrink-0 mx-3 overflow-visible text-gray-300 dark:text-white/10 rtl:rotate-180"></i>
                    </a>
                  </li>
                  <li className= "text-sm text-gray-500 dark:text-white/70 hover:text-primary truncate" aria-current="page">
                    Application
                  </li>
                </ol>
              </div>
            </div>
          </div>
          <div className= "col-span-12">
            <div className= "box">
              <div className= "box-header">
                <h5 className= "box-title">Basic Breadcrumb-style-2</h5>
              </div>
              <div className= "box-body">
                <ol className= "flex items-center whitespace-nowrap min-w-0">
                  <li className= "text-smtext-primary hover:text-primary dark:text-primary">
                    <a className= "flex items-center text-primary hover:text-primary dark:text-primary" href="#">
                      Home
                      <svg className= "flex-shrink-0 h-5 w-5 text-gray-300 dark:text-white/10 mx-2" width="16" height="16"
                        viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                        <path d="M6 13L10 3" stroke="currentColor" strokeLinecap="round" />
                      </svg>
                    </a>
                  </li>

                  <li className= "text-smtext-primary hover:text-primary dark:text-primary">
                    <a className= "flex items-center text-primary hover:text-primary dark:text-primary" href="#">
                      App Center
                      <svg className= "flex-shrink-0 h-5 w-5 text-gray-300 dark:text-white/10 mx-2" width="16" height="16"
                        viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                        <path d="M6 13L10 3" stroke="currentColor" strokeLinecap="round" />
                      </svg>
                    </a>
                  </li>

                  <li className= "text-sm text-gray-500 dark:text-white/70 hover:text-primary truncate" aria-current="page">
                    Application
                  </li>
                </ol>
              </div>
            </div>
          </div>
          <div className= "col-span-12">
            <div className= "box">
              <div className= "box-header">
                <h5 className= "box-title">Breadcrumb With Icons </h5>
              </div>
              <div className= "box-body">
                <ol className= "flex items-center whitespace-nowrap min-w-0">
                  <li className= "text-sm">
                    <a className= "flex items-center text-primary hover:text-primary dark:text-primary" href="#">
                      <svg className= "flex-shrink-0 ltr:mr-3 rtl:ml-3 h-4 w-4 text-primary hover:text-primary dark:text-primary" width="16" height="16"
                        fill="currentColor" viewBox="0 0 16 16">
                        <path fillRule="evenodd"
                          d="M2 13.5V7h1v6.5a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5V7h1v6.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5zm11-11V6l-2-2V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5z" />
                        <path fillRule="evenodd"
                          d="M7.293 1.5a1 1 0 0 1 1.414 0l6.647 6.646a.5.5 0 0 1-.708.708L8 2.207 1.354 8.854a.5.5 0 1 1-.708-.708L7.293 1.5z" />
                      </svg>
                      Home
                      <svg className= "flex-shrink-0 mx-3 overflow-visible h-2.5 w-2.5 text-gray-300 dark:text-white/10 rtl:rotate-180"
                        width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5 1L10.6869 7.16086C10.8637 7.35239 10.8637 7.64761 10.6869 7.83914L5 14"
                          stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                      </svg>
                    </a>
                  </li>
                  <li className= "text-sm">
                    <a className= "flex items-center text-primary hover:text-primary dark:text-primary" href="#">
                      App Center
                      <svg className= "flex-shrink-0 mx-3 overflow-visible h-2.5 w-2.5 text-gray-300 dark:text-white/10 rtl:rotate-180"
                        width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5 1L10.6869 7.16086C10.8637 7.35239 10.8637 7.64761 10.6869 7.83914L5 14"
                          stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                      </svg>
                    </a>
                  </li>
                  <li className= "text-sm text-gray-500 dark:text-white/70 hover:text-primary truncate" aria-current="page">
                    Application
                  </li>
                </ol>
              </div>
            </div>
          </div>
          <div className= "col-span-12">
            <div className= "box">
              <div className= "box-header">
                <h5 className= "box-title">Breadcrumb-style-3 </h5>
              </div>
              <div className= "box-body">
                <ol className= "flex items-center whitespace-nowrap min-w-0 pb-2">
                  <li className= "text-sm">
                    <a className= "flex items-center text-primary hover:text-primary dark:text-primary" href="#">
                      <svg className= "flex-shrink-0 ltr:mr-3 rtl:ml-3 h-4 w-4 text-primary hover:text-primary dark:text-primary" width="16" height="16"
                        fill="currentColor" viewBox="0 0 16 16">
                        <path fillRule="evenodd"
                          d="M2 13.5V7h1v6.5a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5V7h1v6.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5zm11-11V6l-2-2V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5z" />
                        <path fillRule="evenodd"
                          d="M7.293 1.5a1 1 0 0 1 1.414 0l6.647 6.646a.5.5 0 0 1-.708.708L8 2.207 1.354 8.854a.5.5 0 1 1-.708-.708L7.293 1.5z" />
                      </svg>
                      Home
                    </a>
                  </li>
                </ol>
                <ol className= "flex items-center whitespace-nowrap min-w-0 pb-2">
                  <li className= "text-sm">
                    <a className= "flex items-center text-primary hover:text-primary dark:text-primary" href="#">
                      <svg className= "flex-shrink-0 ltr:mr-3 rtl:ml-3 h-4 w-4 text-primary hover:text-primary dark:text-primary" width="16" height="16"
                        fill="currentColor" viewBox="0 0 16 16">
                        <path fillRule="evenodd"
                          d="M2 13.5V7h1v6.5a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5V7h1v6.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5zm11-11V6l-2-2V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5z" />
                        <path fillRule="evenodd"
                          d="M7.293 1.5a1 1 0 0 1 1.414 0l6.647 6.646a.5.5 0 0 1-.708.708L8 2.207 1.354 8.854a.5.5 0 1 1-.708-.708L7.293 1.5z" />
                      </svg>
                      Home
                      <svg className= "flex-shrink-0 mx-3 overflow-visible h-2.5 w-2.5 text-gray-300 dark:text-white/10 rtl:rotate-180"
                        width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5 1L10.6869 7.16086C10.8637 7.35239 10.8637 7.64761 10.6869 7.83914L5 14"
                          stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                      </svg>
                    </a>
                  </li>
                  <li className= "text-sm">
                    <a className= "flex items-center text-gray-500 dark:text-white/70 hover:text-primary" href="#">
                      Library
                    </a>
                  </li>
                </ol>
                <ol className= "flex items-center whitespace-nowrap min-w-0 pb-2">
                  <li className= "text-sm">
                    <a className= "flex items-center text-primary hover:text-primary dark:text-primary" href="#">
                      <svg className= "flex-shrink-0 ltr:mr-3 rtl:ml-3 h-4 w-4 text-primary hover:text-primary dark:text-primary" width="16" height="16"
                        fill="currentColor" viewBox="0 0 16 16">
                        <path fillRule="evenodd"
                          d="M2 13.5V7h1v6.5a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5V7h1v6.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5zm11-11V6l-2-2V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5z" />
                        <path fillRule="evenodd"
                          d="M7.293 1.5a1 1 0 0 1 1.414 0l6.647 6.646a.5.5 0 0 1-.708.708L8 2.207 1.354 8.854a.5.5 0 1 1-.708-.708L7.293 1.5z" />
                      </svg>
                      Home
                      <svg className= "flex-shrink-0 mx-3 overflow-visible h-2.5 w-2.5 text-gray-300 dark:text-white/10 rtl:rotate-180"
                        width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5 1L10.6869 7.16086C10.8637 7.35239 10.8637 7.64761 10.6869 7.83914L5 14"
                          stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                      </svg>
                    </a>
                  </li>
                  <li className= "text-sm">
                    <a className= "flex items-center text-primary hover:text-primary dark:text-primary" href="#">
                      Library
                      <svg className= "flex-shrink-0 mx-3 overflow-visible h-2.5 w-2.5 text-gray-300 dark:text-white/10 rtl:rotate-180"
                        width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5 1L10.6869 7.16086C10.8637 7.35239 10.8637 7.64761 10.6869 7.83914L5 14"
                          stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                      </svg>
                    </a>
                  </li>
                  <li className= "text-sm">
                    <a className= "flex items-center text-gray-500 dark:text-white/70 hover:text-primary" href="#">
                      Data
                    </a>
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}
export default Breadcrumbs;