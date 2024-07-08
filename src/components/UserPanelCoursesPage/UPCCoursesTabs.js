import { Tab, TabGroup, TabList, TabPanel, TabPanels } from '@headlessui/react'


import Image from "next/image"
import a from '@/assets/images/a.png'

export default function UPCCoursesTabs() {
  return (
      <TabGroup className="mt-10 hidden sm:block">
        <TabList className="bg-white rounded-lg inline-flex justify-start gap-x-10 p-4 dark:bg-[#0E2338]">
        <Tab className="flex gap-x-2 text-slate-500 text-opacity-45 font-medium text-sm md:text-base lg:text-lg data-[hover]:text-slate-700  data-[selected]:bg-[#0079FF] data-[selected]:text-white data-[selected]:outline-none p-2 rounded-lg dark:text-[#EEEEEE] dark:data-[hover]:text-white">دوره های جاری
          <svg className="w-8 h-8 -order-last" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
          <path fill="currentColor" fill-rule="evenodd" d="M9.451 3.25h.098c1.602 0 2.872 0 3.876.119 1.03.122 1.88.377 2.588.96.24.197.461.417.659.658.582.709.837 1.557.96 2.588.027.232.048.478.064.739.786-.392 1.452-.714 2.007-.896.652-.213 1.343-.299 1.98.095s.87 1.05.97 1.728c.097.655.097 1.516.097 2.551v.416c0 1.035 0 1.896-.097 2.55-.1.679-.333 1.335-.97 1.729-.637.394-1.328.308-1.98.095-.555-.182-1.221-.504-2.007-.896-.016.261-.037.507-.065.739-.122 1.03-.377 1.88-.96 2.588-.197.24-.417.461-.658.659-.709.582-1.557.837-2.588.96-1.005.118-2.274.118-3.876.118H9.45c-1.602 0-2.872 0-3.876-.119-1.03-.122-1.88-.377-2.588-.96a4.751 4.751 0 0 1-.659-.658c-.582-.709-.837-1.557-.96-2.588-.118-1.005-.118-2.274-.118-3.876V11.45c0-1.602 0-2.872.119-3.876.122-1.03.377-1.88.96-2.588a4.75 4.75 0 0 1 .658-.659c.709-.582 1.557-.837 2.588-.96C6.58 3.25 7.85 3.25 9.451 3.25Zm6.799 9.25v-1c0-1.662-.001-2.843-.108-3.749-.105-.889-.304-1.415-.63-1.813a3.256 3.256 0 0 0-.45-.45c-.398-.326-.924-.525-1.813-.63-.906-.107-2.087-.108-3.749-.108s-2.843.001-3.749.108c-.889.105-1.415.304-1.813.63a3.25 3.25 0 0 0-.45.45c-.326.398-.525.924-.63 1.813-.107.906-.108 2.087-.108 3.749v1c0 1.662.001 2.843.108 3.749.105.889.304 1.415.63 1.813.135.164.286.315.45.45.398.326.924.525 1.813.63.906.107 2.087.108 3.749.108s2.843-.001 3.749-.108c.889-.105 1.415-.304 1.813-.63.164-.135.315-.286.45-.45.326-.398.525-.924.63-1.813.107-.906.108-2.087.108-3.749Zm1.5 1.537.244.121c.995.498 1.666.831 2.176.998.499.163.65.1.724.055.074-.046.198-.153.275-.673.079-.53.081-1.28.081-2.392v-.292c0-1.113-.002-1.862-.08-2.392-.078-.52-.202-.627-.276-.673-.074-.046-.225-.108-.724.055-.51.167-1.18.5-2.176.998l-.244.122v4.072ZM13.03 7.97a.75.75 0 1 0-1.06 1.06.75.75 0 0 0 1.06-1.06ZM10.91 6.909a2.25 2.25 0 1 1 3.182 3.182 2.25 2.25 0 0 1-3.182-3.182Z" clip-rule="evenodd"/>
          </svg>
        </Tab>
        <Tab className="flex gap-x-2 text-slate-500 text-opacity-45 font-medium text-sm md:text-base lg:text-lg data-[hover]:text-slate-700  data-[selected]:bg-[#0079FF] data-[selected]:text-white data-[selected]:outline-none p-2 rounded-lg dark:text-[#EEEEEE] dark:data-[hover]:text-white">دوره های خریداری شده
          <svg className="w-8 h-8 -order-last" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <path fill="currentColor" fill-rule="evenodd" d="M9.451 3.25h.098c1.602 0 2.872 0 3.876.119 1.03.122 1.88.377 2.588.96.24.197.461.417.659.658.582.709.837 1.557.96 2.588.027.232.048.478.064.739.786-.392 1.452-.714 2.007-.896.652-.213 1.343-.299 1.98.095s.87 1.05.97 1.728c.097.655.097 1.516.097 2.551v.416c0 1.035 0 1.896-.097 2.55-.1.679-.333 1.335-.97 1.729-.637.394-1.328.308-1.98.095-.555-.182-1.221-.504-2.007-.896-.016.261-.037.507-.065.739-.122 1.03-.377 1.88-.96 2.588-.197.24-.417.461-.658.659-.709.582-1.557.837-2.588.96-1.005.118-2.274.118-3.876.118H9.45c-1.602 0-2.872 0-3.876-.119-1.03-.122-1.88-.377-2.588-.96a4.751 4.751 0 0 1-.659-.658c-.582-.709-.837-1.557-.96-2.588-.118-1.005-.118-2.274-.118-3.876V11.45c0-1.602 0-2.872.119-3.876.122-1.03.377-1.88.96-2.588a4.75 4.75 0 0 1 .658-.659c.709-.582 1.557-.837 2.588-.96C6.58 3.25 7.85 3.25 9.451 3.25Zm6.799 9.25v-1c0-1.662-.001-2.843-.108-3.749-.105-.889-.304-1.415-.63-1.813a3.256 3.256 0 0 0-.45-.45c-.398-.326-.924-.525-1.813-.63-.906-.107-2.087-.108-3.749-.108s-2.843.001-3.749.108c-.889.105-1.415.304-1.813.63a3.25 3.25 0 0 0-.45.45c-.326.398-.525.924-.63 1.813-.107.906-.108 2.087-.108 3.749v1c0 1.662.001 2.843.108 3.749.105.889.304 1.415.63 1.813.135.164.286.315.45.45.398.326.924.525 1.813.63.906.107 2.087.108 3.749.108s2.843-.001 3.749-.108c.889-.105 1.415-.304 1.813-.63.164-.135.315-.286.45-.45.326-.398.525-.924.63-1.813.107-.906.108-2.087.108-3.749Zm1.5 1.537.244.121c.995.498 1.666.831 2.176.998.499.163.65.1.724.055.074-.046.198-.153.275-.673.079-.53.081-1.28.081-2.392v-.292c0-1.113-.002-1.862-.08-2.392-.078-.52-.202-.627-.276-.673-.074-.046-.225-.108-.724.055-.51.167-1.18.5-2.176.998l-.244.122v4.072ZM9.5 8.75a.75.75 0 0 1 .75.75v1.75H12a.75.75 0 0 1 0 1.5h-1.75v1.75a.75.75 0 0 1-1.5 0v-1.75H7a.75.75 0 0 1 0-1.5h1.75V9.5a.75.75 0 0 1 .75-.75Z" clip-rule="evenodd"/>
          </svg>
        </Tab>
        <Tab className="flex gap-x-2 text-slate-500 text-opacity-45 font-medium text-sm md:text-base lg:text-lg data-[hover]:text-slate-700  data-[selected]:bg-[#0079FF] data-[selected]:text-white data-[selected]:outline-none p-2 rounded-lg dark:text-[#EEEEEE] dark:data-[hover]:text-white">دوره های گذرانده شده
          <svg className="w-8 h-8 -order-last" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <path fill="currentColor" fill-rule="evenodd" d="M9.451 3.25h.098c1.602 0 2.872 0 3.876.119 1.03.122 1.88.377 2.588.96.24.197.461.417.659.658.582.709.837 1.557.96 2.588.027.232.048.478.064.739.786-.392 1.452-.714 2.007-.896.652-.213 1.343-.299 1.98.095s.87 1.05.97 1.728c.097.655.097 1.516.097 2.551v.416c0 1.035 0 1.896-.097 2.55-.1.679-.333 1.335-.97 1.729-.637.394-1.328.308-1.98.095-.555-.182-1.221-.504-2.007-.896-.016.261-.037.507-.065.739-.122 1.03-.377 1.88-.96 2.588-.197.24-.417.461-.658.659-.709.582-1.557.837-2.588.96-1.005.118-2.274.118-3.876.118H9.45c-1.602 0-2.872 0-3.876-.119-1.03-.122-1.88-.377-2.588-.96a4.751 4.751 0 0 1-.659-.658c-.582-.709-.837-1.557-.96-2.588-.118-1.005-.118-2.274-.118-3.876V11.45c0-1.602 0-2.872.119-3.876.122-1.03.377-1.88.96-2.588a4.75 4.75 0 0 1 .658-.659c.709-.582 1.557-.837 2.588-.96C6.58 3.25 7.85 3.25 9.451 3.25Zm6.799 9.25v-1c0-1.662-.001-2.843-.108-3.749-.105-.889-.304-1.415-.63-1.813a3.256 3.256 0 0 0-.45-.45c-.398-.326-.924-.525-1.813-.63-.906-.107-2.087-.108-3.749-.108s-2.843.001-3.749.108c-.889.105-1.415.304-1.813.63a3.25 3.25 0 0 0-.45.45c-.326.398-.525.924-.63 1.813-.107.906-.108 2.087-.108 3.749v1c0 1.662.001 2.843.108 3.749.105.889.304 1.415.63 1.813.135.164.286.315.45.45.398.326.924.525 1.813.63.906.107 2.087.108 3.749.108s2.843-.001 3.749-.108c.889-.105 1.415-.304 1.813-.63.164-.135.315-.286.45-.45.326-.398.525-.924.63-1.813.107-.906.108-2.087.108-3.749Zm1.5 1.537.244.121c.995.498 1.666.831 2.176.998.499.163.65.1.724.055.074-.046.198-.153.275-.673.079-.53.081-1.28.081-2.392v-.292c0-1.113-.002-1.862-.08-2.392-.078-.52-.202-.627-.276-.673-.074-.046-.225-.108-.724.055-.51.167-1.18.5-2.176.998l-.244.122v4.072Z" clip-rule="evenodd"/>
          </svg>
        </Tab>
        <Tab className="flex gap-x-2 text-slate-500 text-opacity-45 font-medium text-sm md:text-base lg:text-lg data-[hover]:text-slate-700  data-[selected]:bg-[#0079FF] data-[selected]:text-white data-[selected]:outline-none p-2 rounded-lg dark:text-[#EEEEEE] dark:data-[hover]:text-white">دوره های منسوخ شده
          <svg className="w-8 h-8 -order-last" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <path fill="currentColor" fill-rule="evenodd" d="M6.89 1.258c-.991.015-1.827.058-2.525.193-.737.143-1.366.398-1.89.87-.578.52-.878 1.169-1.036 1.94-.15.733-.18 1.623-.187 2.68a.763.763 0 0 0 0 .109c-.002.298-.002.615-.002.949v6.011c0 .683 0 1.297.014 1.842a.754.754 0 0 0 .012.345c.06 1.472.266 2.643 1.199 3.482.524.472 1.153.727 1.89.87.698.136 1.534.178 2.525.193a.75.75 0 0 0 .2.003c.479.005 1.003.005 1.573.005h2.587V21c0 .966.784 1.75 1.75 1.75h2.337c.57 0 1.094 0 1.573-.005a.747.747 0 0 0 .2-.003c.991-.015 1.827-.058 2.525-.193.737-.143 1.366-.398 1.89-.87.933-.84 1.139-2.01 1.199-3.482a.754.754 0 0 0 .011-.345c.015-.545.015-1.159.015-1.842V9.998c0-.333 0-.65-.002-.948a.748.748 0 0 0 0-.11c-.008-1.056-.038-1.946-.187-2.678-.158-.772-.458-1.42-1.036-1.94-.524-.473-1.153-.728-1.89-.87-.698-.136-1.534-.18-2.525-.194a.755.755 0 0 0-.2-.003c-.479-.005-1.003-.005-1.573-.005H12.75V3A1.75 1.75 0 0 0 11 1.25H8.663c-.57 0-1.094 0-1.573.005a.757.757 0 0 0-.2.003Zm5.86 3.492v3.5h3.5v-3.5h-3.5ZM11.25 3a.25.25 0 0 0-.25-.25H8.667l-.917.001V6.25h3.5V3Zm0 4.75v7.5H2.754c-.004-.379-.004-.793-.004-1.25V7.75h8.5Zm-8.488-1.5H6.25V2.774c-.655.023-1.174.067-1.599.15-.562.109-.911.277-1.173.512-.276.249-.456.573-.57 1.126-.088.437-.128.98-.146 1.688Zm.052 10.5H6.25v2.476c-.655-.023-1.174-.067-1.599-.15-.562-.109-.911-.277-1.173-.512-.372-.335-.574-.81-.664-1.814Zm8.436 0v2.5h-3.5v-2.5h3.5Zm6.5-11.976V8.25h3.488c-.018-.708-.058-1.251-.147-1.688-.113-.553-.293-.877-.569-1.126-.262-.235-.61-.403-1.173-.512-.425-.083-.944-.127-1.599-.15Zm3.5 4.976h-8.5v7.5h8.496c.004-.379.004-.793.004-1.25V9.75Zm-5 9h-3.5V21c0 .138.112.25.25.25h3.25v-2.5Zm4.936 0H17.75v2.476c.655-.023 1.174-.067 1.599-.15.562-.109.911-.277 1.173-.512.372-.335.574-.81.664-1.814Z" clip-rule="evenodd"/>
          </svg>
        </Tab>
      </TabList>
      <TabPanels className="mt-20">
        <TabPanel>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="rounded-md">
                    <div className="bg-white grid rounded-lg gap-y-4 p-4 dark:bg-[#0E2338]">
                        <div className="relative pt-32">
                            <div className="absolute w-full -top-12">
                                <a className="inline-block h-40 overflow-hidden w-full rounded-lg">
                                    <Image className="w-full h-full object-cover transform transition duration-200 hover:scale-110" src={a} />
                                </a>
                            </div>
                            <div className="grid grid-cols-1 gap-y-2">
                                <span className="text-blue-500 flex justify-start items-center gap-x-1 text-sm font-base">در حال برگزاری
                                    <svg class="-order-last" width="7" height="7" viewBox="0 0 7 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="3.57789" cy="3.28785" r="2.74867" fill="currentColor"></circle>
                                    </svg>
                                </span>
                                <h4 className="text-center min-[280px]:text-right font-black text-lg text-[#393646] dark:text-[#EEEEEE]">اسم دوره</h4>
                                <p className="text-sm font-light dark:text-[#EEEEEE]">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در...</p>
                                <div className="grid grid-cols-1 place-items-center gap-y-4 min-[325px]:flex justify-between items-center">
                                    <div className="flex justify-between items-center gap-x-2">
                                        <a href="#" className="bg-gray-400 bg-opacity-20 flex items-center text-gray-500 gap-x-1 px-1 rounded">3:18:35
                                            <svg className="w-4 h-4 text-[#A3B0C6]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                                <path fill="currentColor" fill-rule="evenodd" d="M6.25 2c0-.41.34-.75.75-.75h10a.75.75 0 0 1 0 1.5H7A.75.75 0 0 1 6.25 2Zm5.7 2.25h.1c1.36 0 2.45 0 3.31.09.89.09 1.63.28 2.28.71.52.35.96.8 1.3 1.31.44.65.63 1.39.72 2.28.09.86.09 1.95.09 3.32v.08c0 1.37 0 2.46-.09 3.32a4.83 4.83 0 0 1-.71 2.28c-.35.52-.8.96-1.31 1.3-.65.44-1.39.63-2.28.72-.86.09-1.95.09-3.32.09h-.08c-1.37 0-2.46 0-3.32-.09a4.83 4.83 0 0 1-2.28-.71c-.52-.35-.96-.8-1.3-1.31a4.83 4.83 0 0 1-.72-2.28c-.09-.86-.09-1.95-.09-3.32v-.08c0-1.37 0-2.46.09-3.32.09-.89.28-1.63.71-2.28.35-.52.8-.96 1.31-1.3a4.83 4.83 0 0 1 2.28-.72c.86-.09 1.95-.09 3.32-.09ZM8.8 5.83c-.77.08-1.23.23-1.6.47-.35.23-.66.54-.9.9-.23.36-.38.82-.46 1.59-.08.78-.08 1.79-.08 3.21s0 2.43.08 3.21c.08.77.23 1.23.47 1.6.23.35.54.66.9.9.36.23.82.38 1.59.46.78.08 1.79.08 3.21.08s2.43 0 3.21-.08a3.37 3.37 0 0 0 1.6-.47c.35-.23.66-.54.9-.9.23-.36.38-.82.46-1.59.08-.78.08-1.79.08-3.21s0-2.43-.08-3.21a3.37 3.37 0 0 0-.47-1.6 3.25 3.25 0 0 0-.9-.9 3.37 3.37 0 0 0-1.59-.46c-.78-.08-1.79-.08-3.21-.08s-2.43 0-3.21.08ZM12 8.25c.41 0 .75.34.75.75v2.76l1.77 1.7a.75.75 0 1 1-1.04 1.08L11.86 13c-.3-.3-.45-.44-.53-.63-.08-.19-.08-.4-.08-.82V9c0-.41.34-.75.75-.75ZM6.25 22c0-.41.34-.75.75-.75h10a.75.75 0 0 1 0 1.5H7a.75.75 0 0 1-.75-.75Z" clip-rule="evenodd"/>
                                            </svg>
                                        </a>
                                        <button className="bg-red-700 bg-opacity-20 flex items-center text-red-700 gap-x-1 px-1 rounded hover:bg-red-500 hover:text-white">0
                                            <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                                <path fill="currentColor" fill-rule="evenodd" d="M5.62 4.42a5.14 5.14 0 0 0-2.87 4.72c0 2.2.9 3.89 2.19 5.34 1.06 1.2 2.35 2.19 3.6 3.15l.89.7c.52.4 1 .77 1.44 1.03.46.27.82.39 1.13.39.31 0 .67-.12 1.13-.39.45-.26.92-.62 1.44-1.04l.89-.69c1.25-.96 2.54-1.95 3.6-3.15a7.8 7.8 0 0 0 2.19-5.34 5.14 5.14 0 0 0-2.87-4.72c-1.62-.73-3.78-.54-5.84 1.6a.75.75 0 0 1-1.08 0C9.4 3.88 7.24 3.7 5.62 4.42Zm6.38.04C9.69 2.39 7.1 2.1 5 3.06a6.64 6.64 0 0 0-3.75 6.08 9.3 9.3 0 0 0 2.57 6.34 27.46 27.46 0 0 0 3.85 3.38l.83.64c.51.4 1.06.83 1.62 1.16.55.33 1.19.59 1.88.59s1.33-.26 1.88-.59c.56-.33 1.11-.76 1.62-1.16l.83-.64a27.47 27.47 0 0 0 3.85-3.38 9.3 9.3 0 0 0 2.57-6.34A6.64 6.64 0 0 0 19 3.06c-2.1-.96-4.69-.67-7 1.4Z" clip-rule="evenodd"/>
                                            </svg>
                                        </button>
                                    </div>
                                    <div className="grid grid-cols-1 place-items-center min-[864px]:flex min-[864px]:justify-center">
                                        <p className="text-slate-700 text-xl font-bold mr-5 dark:text-[#EEEEEE]">790,000 <span className="text-gray-800 text-opacity-20 dark:text-[#EEEEEE]">ت</span></p>
                                    </div>
                                </div>
                                <div className="flex justify-center border-t border-t-gray-300 border-opacity-45 py-2 pt-4">
                                    <a className="group flex items-center text-blue-500 text-sm font-black hover:text-slate-700 dark:hover:text-[#EEEEEE]" href="#">مشاهده اطلاعات دوره
                                    <svg class="text-blue-500 group-hover:text-slate-700 mr-1 -mt-0.5 dark:group-hover:text-[#EEEEEE]" width="26" height="25" viewBox="0 0 26 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fill="currentColor" opacity="0.4" d="M16.7544 11.5347L20.5098 11.2026C21.3525 11.2026 22.0358 11.8925 22.0358 12.7435C22.0358 13.5945 21.3525 14.2844 20.5098 14.2844L16.7544 13.9523C16.0933 13.9523 15.5573 13.4111 15.5573 12.7435C15.5573 12.0748 16.0933 11.5347 16.7544 11.5347Z">
                                        </path>
                                        <path fill="currentColor" d="M4.14372 11.5957C4.20242 11.5365 4.42169 11.286 4.62767 11.078C5.82925 9.77526 8.96663 7.64503 10.6079 6.9931C10.857 6.8891 11.4872 6.66769 11.8249 6.65204C12.1472 6.65204 12.4551 6.72696 12.7485 6.87457C13.1151 7.08144 13.4075 7.40796 13.5692 7.79263C13.6722 8.05877 13.8338 8.85831 13.8338 8.87285C13.9944 9.74619 14.0819 11.1663 14.0819 12.7363C14.0819 14.2303 13.9944 15.5923 13.8626 16.4802C13.8482 16.4958 13.6866 17.4877 13.5105 17.8276C13.1882 18.4494 12.5581 18.8341 11.8836 18.8341H11.8249C11.3853 18.8195 10.4617 18.4337 10.4617 18.4203C8.90794 17.7684 5.84475 15.741 4.61328 14.3936C4.61328 14.3936 4.26554 14.0469 4.11493 13.8311C3.88015 13.5202 3.76276 13.1355 3.76276 12.7509C3.76276 12.3215 3.89455 11.9223 4.14372 11.5957Z">
                                        </path>
                                    </svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
            </div>
            <div className="rounded-md">
                    <div className="bg-white grid rounded-lg gap-y-4 p-4 dark:bg-[#0E2338]">
                        <div className="relative pt-32">
                            <div className="absolute w-full -top-12">
                                <a className="inline-block h-40 overflow-hidden w-full rounded-lg">
                                    <Image className="w-full h-full object-cover transform transition duration-200 hover:scale-110" src={a} />
                                </a>
                            </div>
                            <div className="grid grid-cols-1 gap-y-2">
                                <span className="text-blue-500 flex justify-start items-center gap-x-1 text-sm font-base">در حال برگزاری
                                    <svg class="-order-last" width="7" height="7" viewBox="0 0 7 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="3.57789" cy="3.28785" r="2.74867" fill="currentColor"></circle>
                                    </svg>
                                </span>
                                <h4 className="text-center min-[280px]:text-right font-black text-lg text-[#393646] dark:text-[#EEEEEE]">اسم دوره</h4>
                                <p className="text-sm font-light dark:text-[#EEEEEE]">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در...</p>
                                <div className="grid grid-cols-1 place-items-center gap-y-4 min-[325px]:flex justify-between items-center">
                                    <div className="flex justify-between items-center gap-x-2">
                                        <a href="#" className="bg-gray-400 bg-opacity-20 flex items-center text-gray-500 gap-x-1 px-1 rounded">3:18:35
                                            <svg className="w-4 h-4 text-[#A3B0C6]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                                <path fill="currentColor" fill-rule="evenodd" d="M6.25 2c0-.41.34-.75.75-.75h10a.75.75 0 0 1 0 1.5H7A.75.75 0 0 1 6.25 2Zm5.7 2.25h.1c1.36 0 2.45 0 3.31.09.89.09 1.63.28 2.28.71.52.35.96.8 1.3 1.31.44.65.63 1.39.72 2.28.09.86.09 1.95.09 3.32v.08c0 1.37 0 2.46-.09 3.32a4.83 4.83 0 0 1-.71 2.28c-.35.52-.8.96-1.31 1.3-.65.44-1.39.63-2.28.72-.86.09-1.95.09-3.32.09h-.08c-1.37 0-2.46 0-3.32-.09a4.83 4.83 0 0 1-2.28-.71c-.52-.35-.96-.8-1.3-1.31a4.83 4.83 0 0 1-.72-2.28c-.09-.86-.09-1.95-.09-3.32v-.08c0-1.37 0-2.46.09-3.32.09-.89.28-1.63.71-2.28.35-.52.8-.96 1.31-1.3a4.83 4.83 0 0 1 2.28-.72c.86-.09 1.95-.09 3.32-.09ZM8.8 5.83c-.77.08-1.23.23-1.6.47-.35.23-.66.54-.9.9-.23.36-.38.82-.46 1.59-.08.78-.08 1.79-.08 3.21s0 2.43.08 3.21c.08.77.23 1.23.47 1.6.23.35.54.66.9.9.36.23.82.38 1.59.46.78.08 1.79.08 3.21.08s2.43 0 3.21-.08a3.37 3.37 0 0 0 1.6-.47c.35-.23.66-.54.9-.9.23-.36.38-.82.46-1.59.08-.78.08-1.79.08-3.21s0-2.43-.08-3.21a3.37 3.37 0 0 0-.47-1.6 3.25 3.25 0 0 0-.9-.9 3.37 3.37 0 0 0-1.59-.46c-.78-.08-1.79-.08-3.21-.08s-2.43 0-3.21.08ZM12 8.25c.41 0 .75.34.75.75v2.76l1.77 1.7a.75.75 0 1 1-1.04 1.08L11.86 13c-.3-.3-.45-.44-.53-.63-.08-.19-.08-.4-.08-.82V9c0-.41.34-.75.75-.75ZM6.25 22c0-.41.34-.75.75-.75h10a.75.75 0 0 1 0 1.5H7a.75.75 0 0 1-.75-.75Z" clip-rule="evenodd"/>
                                            </svg>
                                        </a>
                                        <button className="bg-red-700 bg-opacity-20 flex items-center text-red-700 gap-x-1 px-1 rounded hover:bg-red-500 hover:text-white">0
                                            <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                                <path fill="currentColor" fill-rule="evenodd" d="M5.62 4.42a5.14 5.14 0 0 0-2.87 4.72c0 2.2.9 3.89 2.19 5.34 1.06 1.2 2.35 2.19 3.6 3.15l.89.7c.52.4 1 .77 1.44 1.03.46.27.82.39 1.13.39.31 0 .67-.12 1.13-.39.45-.26.92-.62 1.44-1.04l.89-.69c1.25-.96 2.54-1.95 3.6-3.15a7.8 7.8 0 0 0 2.19-5.34 5.14 5.14 0 0 0-2.87-4.72c-1.62-.73-3.78-.54-5.84 1.6a.75.75 0 0 1-1.08 0C9.4 3.88 7.24 3.7 5.62 4.42Zm6.38.04C9.69 2.39 7.1 2.1 5 3.06a6.64 6.64 0 0 0-3.75 6.08 9.3 9.3 0 0 0 2.57 6.34 27.46 27.46 0 0 0 3.85 3.38l.83.64c.51.4 1.06.83 1.62 1.16.55.33 1.19.59 1.88.59s1.33-.26 1.88-.59c.56-.33 1.11-.76 1.62-1.16l.83-.64a27.47 27.47 0 0 0 3.85-3.38 9.3 9.3 0 0 0 2.57-6.34A6.64 6.64 0 0 0 19 3.06c-2.1-.96-4.69-.67-7 1.4Z" clip-rule="evenodd"/>
                                            </svg>
                                        </button>
                                    </div>
                                    <div className="grid grid-cols-1 place-items-center min-[864px]:flex min-[864px]:justify-center">
                                        <p className="text-slate-700 text-xl font-bold mr-5 dark:text-[#EEEEEE]">790,000 <span className="text-gray-800 text-opacity-20 dark:text-[#EEEEEE]">ت</span></p>
                                    </div>
                                </div>
                                <div className="flex justify-center border-t border-t-gray-300 border-opacity-45 py-2 pt-4">
                                    <a className="group flex items-center text-blue-500 text-sm font-black hover:text-slate-700 dark:hover:text-[#EEEEEE]" href="#">مشاهده اطلاعات دوره
                                    <svg class="text-blue-500 group-hover:text-slate-700 mr-1 -mt-0.5 dark:group-hover:text-[#EEEEEE]" width="26" height="25" viewBox="0 0 26 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fill="currentColor" opacity="0.4" d="M16.7544 11.5347L20.5098 11.2026C21.3525 11.2026 22.0358 11.8925 22.0358 12.7435C22.0358 13.5945 21.3525 14.2844 20.5098 14.2844L16.7544 13.9523C16.0933 13.9523 15.5573 13.4111 15.5573 12.7435C15.5573 12.0748 16.0933 11.5347 16.7544 11.5347Z">
                                        </path>
                                        <path fill="currentColor" d="M4.14372 11.5957C4.20242 11.5365 4.42169 11.286 4.62767 11.078C5.82925 9.77526 8.96663 7.64503 10.6079 6.9931C10.857 6.8891 11.4872 6.66769 11.8249 6.65204C12.1472 6.65204 12.4551 6.72696 12.7485 6.87457C13.1151 7.08144 13.4075 7.40796 13.5692 7.79263C13.6722 8.05877 13.8338 8.85831 13.8338 8.87285C13.9944 9.74619 14.0819 11.1663 14.0819 12.7363C14.0819 14.2303 13.9944 15.5923 13.8626 16.4802C13.8482 16.4958 13.6866 17.4877 13.5105 17.8276C13.1882 18.4494 12.5581 18.8341 11.8836 18.8341H11.8249C11.3853 18.8195 10.4617 18.4337 10.4617 18.4203C8.90794 17.7684 5.84475 15.741 4.61328 14.3936C4.61328 14.3936 4.26554 14.0469 4.11493 13.8311C3.88015 13.5202 3.76276 13.1355 3.76276 12.7509C3.76276 12.3215 3.89455 11.9223 4.14372 11.5957Z">
                                        </path>
                                    </svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
            </div>
          </div>
        </TabPanel>
        <TabPanel>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="rounded-md">
                    <div className="bg-white grid rounded-lg gap-y-4 p-4 dark:bg-[#0E2338]">
                        <div className="relative pt-32">
                            <div className="absolute w-full -top-12">
                                <a className="inline-block h-40 overflow-hidden w-full rounded-lg">
                                    <Image className="w-full h-full object-cover transform transition duration-200 hover:scale-110" src={a} />
                                </a>
                            </div>
                            <div className="grid grid-cols-1 gap-y-2">
                                <span className="text-blue-500 flex justify-start items-center gap-x-1 text-sm font-base">در حال برگزاری
                                    <svg class="-order-last" width="7" height="7" viewBox="0 0 7 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="3.57789" cy="3.28785" r="2.74867" fill="currentColor"></circle>
                                    </svg>
                                </span>
                                <h4 className="text-center min-[280px]:text-right font-black text-lg text-[#393646] dark:text-[#EEEEEE]">اسم دوره</h4>
                                <p className="text-sm font-light dark:text-[#EEEEEE]">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در...</p>
                                <div className="grid grid-cols-1 place-items-center gap-y-4 min-[325px]:flex justify-between items-center">
                                    <div className="flex justify-between items-center gap-x-2">
                                        <a href="#" className="bg-gray-400 bg-opacity-20 flex items-center text-gray-500 gap-x-1 px-1 rounded">3:18:35
                                            <svg className="w-4 h-4 text-[#A3B0C6]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                                <path fill="currentColor" fill-rule="evenodd" d="M6.25 2c0-.41.34-.75.75-.75h10a.75.75 0 0 1 0 1.5H7A.75.75 0 0 1 6.25 2Zm5.7 2.25h.1c1.36 0 2.45 0 3.31.09.89.09 1.63.28 2.28.71.52.35.96.8 1.3 1.31.44.65.63 1.39.72 2.28.09.86.09 1.95.09 3.32v.08c0 1.37 0 2.46-.09 3.32a4.83 4.83 0 0 1-.71 2.28c-.35.52-.8.96-1.31 1.3-.65.44-1.39.63-2.28.72-.86.09-1.95.09-3.32.09h-.08c-1.37 0-2.46 0-3.32-.09a4.83 4.83 0 0 1-2.28-.71c-.52-.35-.96-.8-1.3-1.31a4.83 4.83 0 0 1-.72-2.28c-.09-.86-.09-1.95-.09-3.32v-.08c0-1.37 0-2.46.09-3.32.09-.89.28-1.63.71-2.28.35-.52.8-.96 1.31-1.3a4.83 4.83 0 0 1 2.28-.72c.86-.09 1.95-.09 3.32-.09ZM8.8 5.83c-.77.08-1.23.23-1.6.47-.35.23-.66.54-.9.9-.23.36-.38.82-.46 1.59-.08.78-.08 1.79-.08 3.21s0 2.43.08 3.21c.08.77.23 1.23.47 1.6.23.35.54.66.9.9.36.23.82.38 1.59.46.78.08 1.79.08 3.21.08s2.43 0 3.21-.08a3.37 3.37 0 0 0 1.6-.47c.35-.23.66-.54.9-.9.23-.36.38-.82.46-1.59.08-.78.08-1.79.08-3.21s0-2.43-.08-3.21a3.37 3.37 0 0 0-.47-1.6 3.25 3.25 0 0 0-.9-.9 3.37 3.37 0 0 0-1.59-.46c-.78-.08-1.79-.08-3.21-.08s-2.43 0-3.21.08ZM12 8.25c.41 0 .75.34.75.75v2.76l1.77 1.7a.75.75 0 1 1-1.04 1.08L11.86 13c-.3-.3-.45-.44-.53-.63-.08-.19-.08-.4-.08-.82V9c0-.41.34-.75.75-.75ZM6.25 22c0-.41.34-.75.75-.75h10a.75.75 0 0 1 0 1.5H7a.75.75 0 0 1-.75-.75Z" clip-rule="evenodd"/>
                                            </svg>
                                        </a>
                                        <button className="bg-red-700 bg-opacity-20 flex items-center text-red-700 gap-x-1 px-1 rounded hover:bg-red-500 hover:text-white">0
                                            <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                                <path fill="currentColor" fill-rule="evenodd" d="M5.62 4.42a5.14 5.14 0 0 0-2.87 4.72c0 2.2.9 3.89 2.19 5.34 1.06 1.2 2.35 2.19 3.6 3.15l.89.7c.52.4 1 .77 1.44 1.03.46.27.82.39 1.13.39.31 0 .67-.12 1.13-.39.45-.26.92-.62 1.44-1.04l.89-.69c1.25-.96 2.54-1.95 3.6-3.15a7.8 7.8 0 0 0 2.19-5.34 5.14 5.14 0 0 0-2.87-4.72c-1.62-.73-3.78-.54-5.84 1.6a.75.75 0 0 1-1.08 0C9.4 3.88 7.24 3.7 5.62 4.42Zm6.38.04C9.69 2.39 7.1 2.1 5 3.06a6.64 6.64 0 0 0-3.75 6.08 9.3 9.3 0 0 0 2.57 6.34 27.46 27.46 0 0 0 3.85 3.38l.83.64c.51.4 1.06.83 1.62 1.16.55.33 1.19.59 1.88.59s1.33-.26 1.88-.59c.56-.33 1.11-.76 1.62-1.16l.83-.64a27.47 27.47 0 0 0 3.85-3.38 9.3 9.3 0 0 0 2.57-6.34A6.64 6.64 0 0 0 19 3.06c-2.1-.96-4.69-.67-7 1.4Z" clip-rule="evenodd"/>
                                            </svg>
                                        </button>
                                    </div>
                                    <div className="grid grid-cols-1 place-items-center min-[864px]:flex min-[864px]:justify-center">
                                        <p className="text-slate-700 text-xl font-bold mr-5 dark:text-[#EEEEEE]">790,000 <span className="text-gray-800 text-opacity-20 dark:text-[#EEEEEE]">ت</span></p>
                                    </div>
                                </div>
                                <div className="flex justify-center border-t border-t-gray-300 border-opacity-45 py-2 pt-4">
                                    <a className="group flex items-center text-blue-500 text-sm font-black hover:text-slate-700 dark:hover:text-[#EEEEEE]" href="#">مشاهده اطلاعات دوره
                                    <svg class="text-blue-500 group-hover:text-slate-700 mr-1 -mt-0.5 dark:group-hover:text-[#EEEEEE]" width="26" height="25" viewBox="0 0 26 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fill="currentColor" opacity="0.4" d="M16.7544 11.5347L20.5098 11.2026C21.3525 11.2026 22.0358 11.8925 22.0358 12.7435C22.0358 13.5945 21.3525 14.2844 20.5098 14.2844L16.7544 13.9523C16.0933 13.9523 15.5573 13.4111 15.5573 12.7435C15.5573 12.0748 16.0933 11.5347 16.7544 11.5347Z">
                                        </path>
                                        <path fill="currentColor" d="M4.14372 11.5957C4.20242 11.5365 4.42169 11.286 4.62767 11.078C5.82925 9.77526 8.96663 7.64503 10.6079 6.9931C10.857 6.8891 11.4872 6.66769 11.8249 6.65204C12.1472 6.65204 12.4551 6.72696 12.7485 6.87457C13.1151 7.08144 13.4075 7.40796 13.5692 7.79263C13.6722 8.05877 13.8338 8.85831 13.8338 8.87285C13.9944 9.74619 14.0819 11.1663 14.0819 12.7363C14.0819 14.2303 13.9944 15.5923 13.8626 16.4802C13.8482 16.4958 13.6866 17.4877 13.5105 17.8276C13.1882 18.4494 12.5581 18.8341 11.8836 18.8341H11.8249C11.3853 18.8195 10.4617 18.4337 10.4617 18.4203C8.90794 17.7684 5.84475 15.741 4.61328 14.3936C4.61328 14.3936 4.26554 14.0469 4.11493 13.8311C3.88015 13.5202 3.76276 13.1355 3.76276 12.7509C3.76276 12.3215 3.89455 11.9223 4.14372 11.5957Z">
                                        </path>
                                    </svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
            </div>
          </div>
        </TabPanel>
        <TabPanel>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="rounded-md">
                    <div className="bg-white grid rounded-lg gap-y-4 p-4 dark:bg-[#0E2338]">
                        <div className="relative pt-32">
                            <div className="absolute w-full -top-12">
                                <a className="inline-block h-40 overflow-hidden w-full rounded-lg">
                                    <Image className="w-full h-full object-cover transform transition duration-200 hover:scale-110" src={a} />
                                </a>
                            </div>
                            <div className="grid grid-cols-1 gap-y-2">
                                <span className="text-blue-500 flex justify-start items-center gap-x-1 text-sm font-base">در حال برگزاری
                                    <svg class="-order-last" width="7" height="7" viewBox="0 0 7 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="3.57789" cy="3.28785" r="2.74867" fill="currentColor"></circle>
                                    </svg>
                                </span>
                                <h4 className="text-center min-[280px]:text-right font-black text-lg text-[#393646] dark:text-[#EEEEEE]">اسم دوره</h4>
                                <p className="text-sm font-light dark:text-[#EEEEEE]">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در...</p>
                                <div className="grid grid-cols-1 place-items-center gap-y-4 min-[325px]:flex justify-between items-center">
                                    <div className="flex justify-between items-center gap-x-2">
                                        <a href="#" className="bg-gray-400 bg-opacity-20 flex items-center text-gray-500 gap-x-1 px-1 rounded">3:18:35
                                            <svg className="w-4 h-4 text-[#A3B0C6]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                                <path fill="currentColor" fill-rule="evenodd" d="M6.25 2c0-.41.34-.75.75-.75h10a.75.75 0 0 1 0 1.5H7A.75.75 0 0 1 6.25 2Zm5.7 2.25h.1c1.36 0 2.45 0 3.31.09.89.09 1.63.28 2.28.71.52.35.96.8 1.3 1.31.44.65.63 1.39.72 2.28.09.86.09 1.95.09 3.32v.08c0 1.37 0 2.46-.09 3.32a4.83 4.83 0 0 1-.71 2.28c-.35.52-.8.96-1.31 1.3-.65.44-1.39.63-2.28.72-.86.09-1.95.09-3.32.09h-.08c-1.37 0-2.46 0-3.32-.09a4.83 4.83 0 0 1-2.28-.71c-.52-.35-.96-.8-1.3-1.31a4.83 4.83 0 0 1-.72-2.28c-.09-.86-.09-1.95-.09-3.32v-.08c0-1.37 0-2.46.09-3.32.09-.89.28-1.63.71-2.28.35-.52.8-.96 1.31-1.3a4.83 4.83 0 0 1 2.28-.72c.86-.09 1.95-.09 3.32-.09ZM8.8 5.83c-.77.08-1.23.23-1.6.47-.35.23-.66.54-.9.9-.23.36-.38.82-.46 1.59-.08.78-.08 1.79-.08 3.21s0 2.43.08 3.21c.08.77.23 1.23.47 1.6.23.35.54.66.9.9.36.23.82.38 1.59.46.78.08 1.79.08 3.21.08s2.43 0 3.21-.08a3.37 3.37 0 0 0 1.6-.47c.35-.23.66-.54.9-.9.23-.36.38-.82.46-1.59.08-.78.08-1.79.08-3.21s0-2.43-.08-3.21a3.37 3.37 0 0 0-.47-1.6 3.25 3.25 0 0 0-.9-.9 3.37 3.37 0 0 0-1.59-.46c-.78-.08-1.79-.08-3.21-.08s-2.43 0-3.21.08ZM12 8.25c.41 0 .75.34.75.75v2.76l1.77 1.7a.75.75 0 1 1-1.04 1.08L11.86 13c-.3-.3-.45-.44-.53-.63-.08-.19-.08-.4-.08-.82V9c0-.41.34-.75.75-.75ZM6.25 22c0-.41.34-.75.75-.75h10a.75.75 0 0 1 0 1.5H7a.75.75 0 0 1-.75-.75Z" clip-rule="evenodd"/>
                                            </svg>
                                        </a>
                                        <button className="bg-red-700 bg-opacity-20 flex items-center text-red-700 gap-x-1 px-1 rounded hover:bg-red-500 hover:text-white">0
                                            <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                                <path fill="currentColor" fill-rule="evenodd" d="M5.62 4.42a5.14 5.14 0 0 0-2.87 4.72c0 2.2.9 3.89 2.19 5.34 1.06 1.2 2.35 2.19 3.6 3.15l.89.7c.52.4 1 .77 1.44 1.03.46.27.82.39 1.13.39.31 0 .67-.12 1.13-.39.45-.26.92-.62 1.44-1.04l.89-.69c1.25-.96 2.54-1.95 3.6-3.15a7.8 7.8 0 0 0 2.19-5.34 5.14 5.14 0 0 0-2.87-4.72c-1.62-.73-3.78-.54-5.84 1.6a.75.75 0 0 1-1.08 0C9.4 3.88 7.24 3.7 5.62 4.42Zm6.38.04C9.69 2.39 7.1 2.1 5 3.06a6.64 6.64 0 0 0-3.75 6.08 9.3 9.3 0 0 0 2.57 6.34 27.46 27.46 0 0 0 3.85 3.38l.83.64c.51.4 1.06.83 1.62 1.16.55.33 1.19.59 1.88.59s1.33-.26 1.88-.59c.56-.33 1.11-.76 1.62-1.16l.83-.64a27.47 27.47 0 0 0 3.85-3.38 9.3 9.3 0 0 0 2.57-6.34A6.64 6.64 0 0 0 19 3.06c-2.1-.96-4.69-.67-7 1.4Z" clip-rule="evenodd"/>
                                            </svg>
                                        </button>
                                    </div>
                                    <div className="grid grid-cols-1 place-items-center min-[864px]:flex min-[864px]:justify-center">
                                        <p className="text-slate-700 text-xl font-bold mr-5 dark:text-[#EEEEEE]">790,000 <span className="text-gray-800 text-opacity-20 dark:text-[#EEEEEE]">ت</span></p>
                                    </div>
                                </div>
                                <div className="flex justify-center border-t border-t-gray-300 border-opacity-45 py-2 pt-4">
                                    <a className="group flex items-center text-blue-500 text-sm font-black hover:text-slate-700 dark:hover:text-[#EEEEEE]" href="#">مشاهده اطلاعات دوره
                                    <svg class="text-blue-500 group-hover:text-slate-700 mr-1 -mt-0.5 dark:group-hover:text-[#EEEEEE]" width="26" height="25" viewBox="0 0 26 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fill="currentColor" opacity="0.4" d="M16.7544 11.5347L20.5098 11.2026C21.3525 11.2026 22.0358 11.8925 22.0358 12.7435C22.0358 13.5945 21.3525 14.2844 20.5098 14.2844L16.7544 13.9523C16.0933 13.9523 15.5573 13.4111 15.5573 12.7435C15.5573 12.0748 16.0933 11.5347 16.7544 11.5347Z">
                                        </path>
                                        <path fill="currentColor" d="M4.14372 11.5957C4.20242 11.5365 4.42169 11.286 4.62767 11.078C5.82925 9.77526 8.96663 7.64503 10.6079 6.9931C10.857 6.8891 11.4872 6.66769 11.8249 6.65204C12.1472 6.65204 12.4551 6.72696 12.7485 6.87457C13.1151 7.08144 13.4075 7.40796 13.5692 7.79263C13.6722 8.05877 13.8338 8.85831 13.8338 8.87285C13.9944 9.74619 14.0819 11.1663 14.0819 12.7363C14.0819 14.2303 13.9944 15.5923 13.8626 16.4802C13.8482 16.4958 13.6866 17.4877 13.5105 17.8276C13.1882 18.4494 12.5581 18.8341 11.8836 18.8341H11.8249C11.3853 18.8195 10.4617 18.4337 10.4617 18.4203C8.90794 17.7684 5.84475 15.741 4.61328 14.3936C4.61328 14.3936 4.26554 14.0469 4.11493 13.8311C3.88015 13.5202 3.76276 13.1355 3.76276 12.7509C3.76276 12.3215 3.89455 11.9223 4.14372 11.5957Z">
                                        </path>
                                    </svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
            </div>
            <div className="rounded-md">
                    <div className="bg-white grid rounded-lg gap-y-4 p-4 dark:bg-[#0E2338]">
                        <div className="relative pt-32">
                            <div className="absolute w-full -top-12">
                                <a className="inline-block h-40 overflow-hidden w-full rounded-lg">
                                    <Image className="w-full h-full object-cover transform transition duration-200 hover:scale-110" src={a} />
                                </a>
                            </div>
                            <div className="grid grid-cols-1 gap-y-2">
                                <span className="text-blue-500 flex justify-start items-center gap-x-1 text-sm font-base">در حال برگزاری
                                    <svg class="-order-last" width="7" height="7" viewBox="0 0 7 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="3.57789" cy="3.28785" r="2.74867" fill="currentColor"></circle>
                                    </svg>
                                </span>
                                <h4 className="text-center min-[280px]:text-right font-black text-lg text-[#393646] dark:text-[#EEEEEE]">اسم دوره</h4>
                                <p className="text-sm font-light dark:text-[#EEEEEE]">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در...</p>
                                <div className="grid grid-cols-1 place-items-center gap-y-4 min-[325px]:flex justify-between items-center">
                                    <div className="flex justify-between items-center gap-x-2">
                                        <a href="#" className="bg-gray-400 bg-opacity-20 flex items-center text-gray-500 gap-x-1 px-1 rounded">3:18:35
                                            <svg className="w-4 h-4 text-[#A3B0C6]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                                <path fill="currentColor" fill-rule="evenodd" d="M6.25 2c0-.41.34-.75.75-.75h10a.75.75 0 0 1 0 1.5H7A.75.75 0 0 1 6.25 2Zm5.7 2.25h.1c1.36 0 2.45 0 3.31.09.89.09 1.63.28 2.28.71.52.35.96.8 1.3 1.31.44.65.63 1.39.72 2.28.09.86.09 1.95.09 3.32v.08c0 1.37 0 2.46-.09 3.32a4.83 4.83 0 0 1-.71 2.28c-.35.52-.8.96-1.31 1.3-.65.44-1.39.63-2.28.72-.86.09-1.95.09-3.32.09h-.08c-1.37 0-2.46 0-3.32-.09a4.83 4.83 0 0 1-2.28-.71c-.52-.35-.96-.8-1.3-1.31a4.83 4.83 0 0 1-.72-2.28c-.09-.86-.09-1.95-.09-3.32v-.08c0-1.37 0-2.46.09-3.32.09-.89.28-1.63.71-2.28.35-.52.8-.96 1.31-1.3a4.83 4.83 0 0 1 2.28-.72c.86-.09 1.95-.09 3.32-.09ZM8.8 5.83c-.77.08-1.23.23-1.6.47-.35.23-.66.54-.9.9-.23.36-.38.82-.46 1.59-.08.78-.08 1.79-.08 3.21s0 2.43.08 3.21c.08.77.23 1.23.47 1.6.23.35.54.66.9.9.36.23.82.38 1.59.46.78.08 1.79.08 3.21.08s2.43 0 3.21-.08a3.37 3.37 0 0 0 1.6-.47c.35-.23.66-.54.9-.9.23-.36.38-.82.46-1.59.08-.78.08-1.79.08-3.21s0-2.43-.08-3.21a3.37 3.37 0 0 0-.47-1.6 3.25 3.25 0 0 0-.9-.9 3.37 3.37 0 0 0-1.59-.46c-.78-.08-1.79-.08-3.21-.08s-2.43 0-3.21.08ZM12 8.25c.41 0 .75.34.75.75v2.76l1.77 1.7a.75.75 0 1 1-1.04 1.08L11.86 13c-.3-.3-.45-.44-.53-.63-.08-.19-.08-.4-.08-.82V9c0-.41.34-.75.75-.75ZM6.25 22c0-.41.34-.75.75-.75h10a.75.75 0 0 1 0 1.5H7a.75.75 0 0 1-.75-.75Z" clip-rule="evenodd"/>
                                            </svg>
                                        </a>
                                        <button className="bg-red-700 bg-opacity-20 flex items-center text-red-700 gap-x-1 px-1 rounded hover:bg-red-500 hover:text-white">0
                                            <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                                <path fill="currentColor" fill-rule="evenodd" d="M5.62 4.42a5.14 5.14 0 0 0-2.87 4.72c0 2.2.9 3.89 2.19 5.34 1.06 1.2 2.35 2.19 3.6 3.15l.89.7c.52.4 1 .77 1.44 1.03.46.27.82.39 1.13.39.31 0 .67-.12 1.13-.39.45-.26.92-.62 1.44-1.04l.89-.69c1.25-.96 2.54-1.95 3.6-3.15a7.8 7.8 0 0 0 2.19-5.34 5.14 5.14 0 0 0-2.87-4.72c-1.62-.73-3.78-.54-5.84 1.6a.75.75 0 0 1-1.08 0C9.4 3.88 7.24 3.7 5.62 4.42Zm6.38.04C9.69 2.39 7.1 2.1 5 3.06a6.64 6.64 0 0 0-3.75 6.08 9.3 9.3 0 0 0 2.57 6.34 27.46 27.46 0 0 0 3.85 3.38l.83.64c.51.4 1.06.83 1.62 1.16.55.33 1.19.59 1.88.59s1.33-.26 1.88-.59c.56-.33 1.11-.76 1.62-1.16l.83-.64a27.47 27.47 0 0 0 3.85-3.38 9.3 9.3 0 0 0 2.57-6.34A6.64 6.64 0 0 0 19 3.06c-2.1-.96-4.69-.67-7 1.4Z" clip-rule="evenodd"/>
                                            </svg>
                                        </button>
                                    </div>
                                    <div className="grid grid-cols-1 place-items-center min-[864px]:flex min-[864px]:justify-center">
                                        <p className="text-slate-700 text-xl font-bold mr-5 dark:text-[#EEEEEE]">790,000 <span className="text-gray-800 text-opacity-20 dark:text-[#EEEEEE]">ت</span></p>
                                    </div>
                                </div>
                                <div className="flex justify-center border-t border-t-gray-300 border-opacity-45 py-2 pt-4">
                                    <a className="group flex items-center text-blue-500 text-sm font-black hover:text-slate-700 dark:hover:text-[#EEEEEE]" href="#">مشاهده اطلاعات دوره
                                    <svg class="text-blue-500 group-hover:text-slate-700 mr-1 -mt-0.5 dark:group-hover:text-[#EEEEEE]" width="26" height="25" viewBox="0 0 26 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fill="currentColor" opacity="0.4" d="M16.7544 11.5347L20.5098 11.2026C21.3525 11.2026 22.0358 11.8925 22.0358 12.7435C22.0358 13.5945 21.3525 14.2844 20.5098 14.2844L16.7544 13.9523C16.0933 13.9523 15.5573 13.4111 15.5573 12.7435C15.5573 12.0748 16.0933 11.5347 16.7544 11.5347Z">
                                        </path>
                                        <path fill="currentColor" d="M4.14372 11.5957C4.20242 11.5365 4.42169 11.286 4.62767 11.078C5.82925 9.77526 8.96663 7.64503 10.6079 6.9931C10.857 6.8891 11.4872 6.66769 11.8249 6.65204C12.1472 6.65204 12.4551 6.72696 12.7485 6.87457C13.1151 7.08144 13.4075 7.40796 13.5692 7.79263C13.6722 8.05877 13.8338 8.85831 13.8338 8.87285C13.9944 9.74619 14.0819 11.1663 14.0819 12.7363C14.0819 14.2303 13.9944 15.5923 13.8626 16.4802C13.8482 16.4958 13.6866 17.4877 13.5105 17.8276C13.1882 18.4494 12.5581 18.8341 11.8836 18.8341H11.8249C11.3853 18.8195 10.4617 18.4337 10.4617 18.4203C8.90794 17.7684 5.84475 15.741 4.61328 14.3936C4.61328 14.3936 4.26554 14.0469 4.11493 13.8311C3.88015 13.5202 3.76276 13.1355 3.76276 12.7509C3.76276 12.3215 3.89455 11.9223 4.14372 11.5957Z">
                                        </path>
                                    </svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
            </div>
          </div>        
        </TabPanel>
        <TabPanel>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="rounded-md">
                    <div className="bg-white grid rounded-lg gap-y-4 p-4 dark:bg-[#0E2338]">
                        <div className="relative pt-32">
                            <div className="absolute w-full -top-12">
                                <a className="inline-block h-40 overflow-hidden w-full rounded-lg">
                                    <Image className="w-full h-full object-cover transform transition duration-200 hover:scale-110" src={a} />
                                </a>
                            </div>
                            <div className="grid grid-cols-1 gap-y-2">
                                <span className="text-blue-500 flex justify-start items-center gap-x-1 text-sm font-base">در حال برگزاری
                                    <svg class="-order-last" width="7" height="7" viewBox="0 0 7 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="3.57789" cy="3.28785" r="2.74867" fill="currentColor"></circle>
                                    </svg>
                                </span>
                                <h4 className="text-center min-[280px]:text-right font-black text-lg text-[#393646] dark:text-[#EEEEEE]">اسم دوره</h4>
                                <p className="text-sm font-light dark:text-[#EEEEEE]">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در...</p>
                                <div className="grid grid-cols-1 place-items-center gap-y-4 min-[325px]:flex justify-between items-center">
                                    <div className="flex justify-between items-center gap-x-2">
                                        <a href="#" className="bg-gray-400 bg-opacity-20 flex items-center text-gray-500 gap-x-1 px-1 rounded">3:18:35
                                            <svg className="w-4 h-4 text-[#A3B0C6]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                                <path fill="currentColor" fill-rule="evenodd" d="M6.25 2c0-.41.34-.75.75-.75h10a.75.75 0 0 1 0 1.5H7A.75.75 0 0 1 6.25 2Zm5.7 2.25h.1c1.36 0 2.45 0 3.31.09.89.09 1.63.28 2.28.71.52.35.96.8 1.3 1.31.44.65.63 1.39.72 2.28.09.86.09 1.95.09 3.32v.08c0 1.37 0 2.46-.09 3.32a4.83 4.83 0 0 1-.71 2.28c-.35.52-.8.96-1.31 1.3-.65.44-1.39.63-2.28.72-.86.09-1.95.09-3.32.09h-.08c-1.37 0-2.46 0-3.32-.09a4.83 4.83 0 0 1-2.28-.71c-.52-.35-.96-.8-1.3-1.31a4.83 4.83 0 0 1-.72-2.28c-.09-.86-.09-1.95-.09-3.32v-.08c0-1.37 0-2.46.09-3.32.09-.89.28-1.63.71-2.28.35-.52.8-.96 1.31-1.3a4.83 4.83 0 0 1 2.28-.72c.86-.09 1.95-.09 3.32-.09ZM8.8 5.83c-.77.08-1.23.23-1.6.47-.35.23-.66.54-.9.9-.23.36-.38.82-.46 1.59-.08.78-.08 1.79-.08 3.21s0 2.43.08 3.21c.08.77.23 1.23.47 1.6.23.35.54.66.9.9.36.23.82.38 1.59.46.78.08 1.79.08 3.21.08s2.43 0 3.21-.08a3.37 3.37 0 0 0 1.6-.47c.35-.23.66-.54.9-.9.23-.36.38-.82.46-1.59.08-.78.08-1.79.08-3.21s0-2.43-.08-3.21a3.37 3.37 0 0 0-.47-1.6 3.25 3.25 0 0 0-.9-.9 3.37 3.37 0 0 0-1.59-.46c-.78-.08-1.79-.08-3.21-.08s-2.43 0-3.21.08ZM12 8.25c.41 0 .75.34.75.75v2.76l1.77 1.7a.75.75 0 1 1-1.04 1.08L11.86 13c-.3-.3-.45-.44-.53-.63-.08-.19-.08-.4-.08-.82V9c0-.41.34-.75.75-.75ZM6.25 22c0-.41.34-.75.75-.75h10a.75.75 0 0 1 0 1.5H7a.75.75 0 0 1-.75-.75Z" clip-rule="evenodd"/>
                                            </svg>
                                        </a>
                                        <button className="bg-red-700 bg-opacity-20 flex items-center text-red-700 gap-x-1 px-1 rounded hover:bg-red-500 hover:text-white">0
                                            <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                                <path fill="currentColor" fill-rule="evenodd" d="M5.62 4.42a5.14 5.14 0 0 0-2.87 4.72c0 2.2.9 3.89 2.19 5.34 1.06 1.2 2.35 2.19 3.6 3.15l.89.7c.52.4 1 .77 1.44 1.03.46.27.82.39 1.13.39.31 0 .67-.12 1.13-.39.45-.26.92-.62 1.44-1.04l.89-.69c1.25-.96 2.54-1.95 3.6-3.15a7.8 7.8 0 0 0 2.19-5.34 5.14 5.14 0 0 0-2.87-4.72c-1.62-.73-3.78-.54-5.84 1.6a.75.75 0 0 1-1.08 0C9.4 3.88 7.24 3.7 5.62 4.42Zm6.38.04C9.69 2.39 7.1 2.1 5 3.06a6.64 6.64 0 0 0-3.75 6.08 9.3 9.3 0 0 0 2.57 6.34 27.46 27.46 0 0 0 3.85 3.38l.83.64c.51.4 1.06.83 1.62 1.16.55.33 1.19.59 1.88.59s1.33-.26 1.88-.59c.56-.33 1.11-.76 1.62-1.16l.83-.64a27.47 27.47 0 0 0 3.85-3.38 9.3 9.3 0 0 0 2.57-6.34A6.64 6.64 0 0 0 19 3.06c-2.1-.96-4.69-.67-7 1.4Z" clip-rule="evenodd"/>
                                            </svg>
                                        </button>
                                    </div>
                                    <div className="grid grid-cols-1 place-items-center min-[864px]:flex min-[864px]:justify-center">
                                        <p className="text-slate-700 text-xl font-bold mr-5 dark:text-[#EEEEEE]">790,000 <span className="text-gray-800 text-opacity-20 dark:text-[#EEEEEE]">ت</span></p>
                                    </div>
                                </div>
                                <div className="flex justify-center border-t border-t-gray-300 border-opacity-45 py-2 pt-4">
                                    <a className="group flex items-center text-blue-500 text-sm font-black hover:text-slate-700 dark:hover:text-[#EEEEEE]" href="#">مشاهده اطلاعات دوره
                                    <svg class="text-blue-500 group-hover:text-slate-700 mr-1 -mt-0.5 dark:group-hover:text-[#EEEEEE]" width="26" height="25" viewBox="0 0 26 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fill="currentColor" opacity="0.4" d="M16.7544 11.5347L20.5098 11.2026C21.3525 11.2026 22.0358 11.8925 22.0358 12.7435C22.0358 13.5945 21.3525 14.2844 20.5098 14.2844L16.7544 13.9523C16.0933 13.9523 15.5573 13.4111 15.5573 12.7435C15.5573 12.0748 16.0933 11.5347 16.7544 11.5347Z">
                                        </path>
                                        <path fill="currentColor" d="M4.14372 11.5957C4.20242 11.5365 4.42169 11.286 4.62767 11.078C5.82925 9.77526 8.96663 7.64503 10.6079 6.9931C10.857 6.8891 11.4872 6.66769 11.8249 6.65204C12.1472 6.65204 12.4551 6.72696 12.7485 6.87457C13.1151 7.08144 13.4075 7.40796 13.5692 7.79263C13.6722 8.05877 13.8338 8.85831 13.8338 8.87285C13.9944 9.74619 14.0819 11.1663 14.0819 12.7363C14.0819 14.2303 13.9944 15.5923 13.8626 16.4802C13.8482 16.4958 13.6866 17.4877 13.5105 17.8276C13.1882 18.4494 12.5581 18.8341 11.8836 18.8341H11.8249C11.3853 18.8195 10.4617 18.4337 10.4617 18.4203C8.90794 17.7684 5.84475 15.741 4.61328 14.3936C4.61328 14.3936 4.26554 14.0469 4.11493 13.8311C3.88015 13.5202 3.76276 13.1355 3.76276 12.7509C3.76276 12.3215 3.89455 11.9223 4.14372 11.5957Z">
                                        </path>
                                    </svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
            </div>
          </div> 
        </TabPanel>
      </TabPanels>
      </TabGroup>
  )
}