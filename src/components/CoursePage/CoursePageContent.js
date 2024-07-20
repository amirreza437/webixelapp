import Video from 'next-video';
import Sample from '/videos/SampleVideo_1280x720_5mb.mp4'

import Link from 'next/link';

import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react'


export default function CoursePageContent() {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-12">
            <div className="col-span-9 bg-white rounded-tr-md rounded-br-md dark:bg-[#0E2338]">
                <div className="mb-1 py-1 px-4">
                    <Link href='/' className="text-slate-700 text-base font-light dark:text-[#EEEEEE]">بازگشت به خانه</Link>
                    <p className="text-lg font-semibold dark:text-[#EEEEEE]">اسم ویدیو</p>
                </div>
                <Video src={Sample} accentColor="#FF0060" width='918px' height='482px' className="fixed" />
                <div className="px-6 py-4">
                    <div className="flex justify-start items-center gap-x-1 mt-2">
                        <svg className="w-4 h-4 text-emerald-500 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <path fill="currentColor" d="M12 6.25a.75.75 0 0 1 .75.75v6a.75.75 0 0 1-1.5 0V7a.75.75 0 0 1 .75-.75ZM12 17a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"/>
                            <path fill="currentColor" fillRule="evenodd" d="M1.25 12C1.25 6.063 6.063 1.25 12 1.25S22.75 6.063 22.75 12 17.937 22.75 12 22.75 1.25 17.937 1.25 12ZM12 2.75a9.25 9.25 0 1 0 0 18.5 9.25 9.25 0 0 0 0-18.5Z" clipRule="evenodd"/>
                        </svg>
                        <p className="text-emerald-500 text-sm font-bold">ویدیو ها رو بدون استفاده از فیلترشکن تماشا کنید</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:flex lg:justify-between items-center gap-x-6 mt-4">
                        <div className="grid grid-cols-1 sm:flex justify-center md:justify-start items-center gap-x-4">
                            <button className="w-fit bg-[#F4CE14] text-white py-1 px-4 text-base font-light hover:bg-transparent hover:outline-[#F4CE14] hover:outline hover:outline-1 hover:text-[#F4CE14] rounded-sm duration-200 dark:bg-transparent dark:text-[#F4CE14] dark:outline dark:outline-1 dark:hover:text-[#EEEEEE]">لینک دانلود</button>
                            <ul className="flex justify-center sm:justify-between gap-x-4 mt-4 sm:mt-0">
                                <li className="flex justify-center items-center gap-x-1">0
                                    <svg className="w-6 h-6 text-[#95A0B1] hover:text-[#FF0060] duration-200 -order-last" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                                        <path fill="currentColor" fillRsule="evenodd" d="M5.624 4.424C3.965 5.182 2.75 6.986 2.75 9.137c0 2.197.9 3.891 2.188 5.343 1.063 1.196 2.349 2.188 3.603 3.154.298.23.594.459.885.688.526.415.995.778 1.448 1.043.452.264.816.385 1.126.385.31 0 .674-.12 1.126-.385.453-.265.922-.628 1.448-1.043.29-.23.587-.458.885-.688 1.254-.966 2.54-1.958 3.603-3.154 1.289-1.452 2.188-3.146 2.188-5.343 0-2.15-1.215-3.955-2.874-4.713-1.612-.737-3.778-.542-5.836 1.597a.75.75 0 0 1-1.08 0C9.402 3.882 7.236 3.687 5.624 4.424ZM12 4.46C9.688 2.39 7.099 2.1 5 3.059 2.786 4.074 1.25 6.426 1.25 9.138c0 2.665 1.11 4.699 2.567 6.339 1.166 1.313 2.593 2.412 3.854 3.382.286.22.563.434.826.642.513.404 1.063.834 1.62 1.16.557.325 1.193.59 1.883.59s1.326-.265 1.883-.59c.558-.326 1.107-.756 1.62-1.16.263-.208.54-.422.826-.642 1.26-.97 2.688-2.07 3.854-3.382 1.457-1.64 2.567-3.674 2.567-6.339 0-2.712-1.535-5.064-3.75-6.077-2.099-.96-4.688-.67-7 1.399Z" clipRsule="evenodd"/>
                                    </svg>
                                </li>
                                <li className="flex justify-center items-center gap-x-1">0
                                    <svg className="w-6 h-6 text-[#95A0B1] hover:text-[#0079FF] duration-200 -order-last" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                        <path fill="currentColor" fillRule="evenodd" d="m13.629 20.472-.542.916c-.483.816-1.69.816-2.174 0l-.542-.916c-.42-.71-.63-1.066-.968-1.262-.338-.197-.763-.204-1.613-.219-1.256-.021-2.043-.098-2.703-.372a5 5 0 0 1-2.706-2.706C2 14.995 2 13.83 2 11.5v-1c0-3.273 0-4.91.737-6.112a5 5 0 0 1 1.65-1.651C5.59 2 7.228 2 10.5 2h3c3.273 0 4.91 0 6.113.737a5 5 0 0 1 1.65 1.65C22 5.59 22 7.228 22 10.5v1c0 2.33 0 3.495-.38 4.413a5 5 0 0 1-2.707 2.706c-.66.274-1.447.35-2.703.372-.85.015-1.275.022-1.613.219-.338.196-.548.551-.968 1.262ZM8 11.75a.75.75 0 0 0 0 1.5h5.5a.75.75 0 0 0 0-1.5H8ZM7.25 9A.75.75 0 0 1 8 8.25h8a.75.75 0 0 1 0 1.5H8A.75.75 0 0 1 7.25 9Z" clipRule="evenodd"/>
                                    </svg>
                                </li>
                                <li className="flex justify-center items-center gap-x-1">0
                                    <svg className="w-6 h-6 text-[#95A0B1] hover:text-[#00DFA2] duration-200 -order-last" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                        <path fill="currentColor" d="M8.352 20.242A4.63 4.63 0 0 0 12 22a4.63 4.63 0 0 0 3.648-1.758 27.158 27.158 0 0 1-7.296 0ZM18.75 9v.704c0 .845.24 1.671.692 2.374l1.108 1.723c1.011 1.574.239 3.713-1.52 4.21a25.794 25.794 0 0 1-14.06 0c-1.759-.497-2.531-2.636-1.52-4.21l1.108-1.723c.452-.703.693-1.529.693-2.374V9c0-3.866 3.022-7 6.749-7s6.75 3.134 6.75 7Z"/>
                                    </svg>
                                </li>
                            </ul>
                        </div>
                        <div className="hidden md:flex justify-end items-center gap-x-4">
                            <span>اشتراک گذاری :</span>
                            <svg id="telegram" class="h-6 w-6 text-[#95A0B1] hover:text-[#0079FF] duration-200" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                <path d="m20.665 3.717-17.73 6.837c-1.21.486-1.203 1.161-.222 1.462l4.552 1.42 10.532-6.645c.498-.303.953-.14.579.192l-8.533 7.701h-.002l.002.001-.314 4.692c.46 0 .663-.211.921-.46l2.211-2.15 4.599 3.397c.848.467 1.457.227 1.668-.785l3.019-14.228c.309-1.239-.473-1.8-1.282-1.434z"/>
                            </svg>
                            <svg id="twitter" class="h-6 w-6 text-[#95A0B1] hover:text-[#0079FF] duration-200"  viewBox="0 0 24 24"  fill="currentColor"  stroke="currentColor"  strokeWidth="1"  strokeLinecap="round"  strokeLinejoin="round">
                                <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-span-3 bg-white rounded-tl-md rounded-l-md dark:bg-[#172B3F]">
                <div className="text-center py-1 px-4">
                    <span>جلسه اول از پنجم</span>
                </div>
                <div className="mt-8 overflow-y-auto max-h-[608px]">
                    <Disclosure as="div" className="" defaultOpen={false}>
                        <DisclosureButton className="bg-[#F0F4F9] group flex justify-between items-center w-full p-3 dark:bg-[#0E2338]">
                            <div className="flex justify-between items-center text-base font-bold text-black/70 group-data-[hover]:text-black/80 dark:text-[#EEEEEE] dark:group-data-[hover]:text-[#FF0060]">
                                بخش اول                            
                            </div>
                            <svg className="w-4 h-4 group-data-[open]:rotate-[270deg] dark:text-[#EEEEEE]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                <path fill="currentColor" fillRule="evenodd" d="M15.707 4.293a1 1 0 0 1 0 1.414L9.414 12l6.293 6.293a1 1 0 0 1-1.414 1.414l-7-7a1 1 0 0 1 0-1.414l7-7a1 1 0 0 1 1.414 0Z" clipRule="evenodd"/>
                            </svg>
                        </DisclosureButton>
                        <DisclosurePanel className="text-base text-black p-3 dark:text-[#EEEEEE] dark:bg-[#162F48]">
                            <ul className="space-y-3">
                                <li className="space-y-2 hover:bg-gray-100 p-2 dark:hover:bg-[#0E2338]">
                                    <p className="text-sm font-light">معرفی دوره</p>
                                    <div className="flex justify-start items-center text-xs font-light">
                                        <p>ویدیوی آموزشی</p>
                                        <i class="sm:flex hidden mx-5 h-3 border-l border-gray-350 border-opacity-30"></i>
                                        <span>4:32</span>
                                    </div>
                                </li>
                                <li className="space-y-2 hover:bg-gray-100 p-2 dark:hover:bg-[#0E2338]">
                                    <p className="text-sm font-light">معرفی دوره</p>
                                    <div className="flex justify-start items-center text-xs font-light">
                                        <p>ویدیوی آموزشی</p>
                                        <i class="sm:flex hidden mx-5 h-3 border-l border-gray-350 border-opacity-30"></i>
                                        <span>4:32</span>
                                    </div>
                                </li>
                                <li className="space-y-2 hover:bg-gray-100 p-2 dark:hover:bg-[#0E2338]">
                                    <p className="text-sm font-light">معرفی دوره</p>
                                    <div className="flex justify-start items-center text-xs font-light">
                                        <p>ویدیوی آموزشی</p>
                                        <i class="sm:flex hidden mx-5 h-3 border-l border-gray-350 border-opacity-30"></i>
                                        <span>4:32</span>
                                    </div>
                                </li>
                                <li className="space-y-2 hover:bg-gray-100 p-2 dark:hover:bg-[#0E2338]">
                                    <p className="text-sm font-light">معرفی دوره</p>
                                    <div className="flex justify-start items-center text-xs font-light">
                                        <p>ویدیوی آموزشی</p>
                                        <i class="sm:flex hidden mx-5 h-3 border-l border-gray-350 border-opacity-30"></i>
                                        <span>4:32</span>
                                    </div>
                                </li>
                            </ul>
                        </DisclosurePanel>
                    </Disclosure>
                    <Disclosure as="div" className="" defaultOpen={false}>
                        <DisclosureButton className="bg-[#F0F4F9] group flex justify-between items-center w-full p-3 dark:bg-[#0E2338]">
                            <div className="flex justify-between items-center text-base font-bold text-black/70 group-data-[hover]:text-black/80 dark:text-[#EEEEEE] dark:group-data-[hover]:text-[#FF0060]">
                                بخش اول                            
                            </div>
                            <svg className="w-4 h-4 group-data-[open]:rotate-[270deg] dark:text-[#EEEEEE]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                <path fill="currentColor" fillRule="evenodd" d="M15.707 4.293a1 1 0 0 1 0 1.414L9.414 12l6.293 6.293a1 1 0 0 1-1.414 1.414l-7-7a1 1 0 0 1 0-1.414l7-7a1 1 0 0 1 1.414 0Z" clipRule="evenodd"/>
                            </svg>
                        </DisclosureButton>
                        <DisclosurePanel className="text-base text-black p-3 dark:text-[#EEEEEE] dark:bg-[#162F48]">
                            <ul className="space-y-3">
                                <li className="space-y-2 hover:bg-gray-100 p-2 dark:hover:bg-[#0E2338]">
                                    <p className="text-sm font-light">معرفی دوره</p>
                                    <div className="flex justify-start items-center text-xs font-light">
                                        <p>ویدیوی آموزشی</p>
                                        <i class="sm:flex hidden mx-5 h-3 border-l border-gray-350 border-opacity-30"></i>
                                        <span>4:32</span>
                                    </div>
                                </li>
                                <li className="space-y-2 hover:bg-gray-100 p-2 dark:hover:bg-[#0E2338]">
                                    <p className="text-sm font-light">معرفی دوره</p>
                                    <div className="flex justify-start items-center text-xs font-light">
                                        <p>ویدیوی آموزشی</p>
                                        <i class="sm:flex hidden mx-5 h-3 border-l border-gray-350 border-opacity-30"></i>
                                        <span>4:32</span>
                                    </div>
                                </li>
                                <li className="space-y-2 hover:bg-gray-100 p-2 dark:hover:bg-[#0E2338]">
                                    <p className="text-sm font-light">معرفی دوره</p>
                                    <div className="flex justify-start items-center text-xs font-light">
                                        <p>ویدیوی آموزشی</p>
                                        <i class="sm:flex hidden mx-5 h-3 border-l border-gray-350 border-opacity-30"></i>
                                        <span>4:32</span>
                                    </div>
                                </li>
                                <li className="space-y-2 hover:bg-gray-100 p-2 dark:hover:bg-[#0E2338]">
                                    <p className="text-sm font-light">معرفی دوره</p>
                                    <div className="flex justify-start items-center text-xs font-light">
                                        <p>ویدیوی آموزشی</p>
                                        <i class="sm:flex hidden mx-5 h-3 border-l border-gray-350 border-opacity-30"></i>
                                        <span>4:32</span>
                                    </div>
                                </li>
                            </ul>
                        </DisclosurePanel>
                    </Disclosure>
                    <Disclosure as="div" className="" defaultOpen={false}>
                        <DisclosureButton className="bg-[#F0F4F9] group flex justify-between items-center w-full p-3 dark:bg-[#0E2338]">
                            <div className="flex justify-between items-center text-base font-bold text-black/70 group-data-[hover]:text-black/80 dark:text-[#EEEEEE] dark:group-data-[hover]:text-[#FF0060]">
                                بخش اول                            
                            </div>
                            <svg className="w-4 h-4 group-data-[open]:rotate-[270deg] dark:text-[#EEEEEE]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                <path fill="currentColor" fillRule="evenodd" d="M15.707 4.293a1 1 0 0 1 0 1.414L9.414 12l6.293 6.293a1 1 0 0 1-1.414 1.414l-7-7a1 1 0 0 1 0-1.414l7-7a1 1 0 0 1 1.414 0Z" clipRule="evenodd"/>
                            </svg>
                        </DisclosureButton>
                        <DisclosurePanel className="text-base text-black p-3 dark:text-[#EEEEEE] dark:bg-[#162F48]">
                            <ul className="space-y-3">
                                <li className="space-y-2 hover:bg-gray-100 p-2 dark:hover:bg-[#0E2338]">
                                    <p className="text-sm font-light">معرفی دوره</p>
                                    <div className="flex justify-start items-center text-xs font-light">
                                        <p>ویدیوی آموزشی</p>
                                        <i class="sm:flex hidden mx-5 h-3 border-l border-gray-350 border-opacity-30"></i>
                                        <span>4:32</span>
                                    </div>
                                </li>
                                <li className="space-y-2 hover:bg-gray-100 p-2 dark:hover:bg-[#0E2338]">
                                    <p className="text-sm font-light">معرفی دوره</p>
                                    <div className="flex justify-start items-center text-xs font-light">
                                        <p>ویدیوی آموزشی</p>
                                        <i class="sm:flex hidden mx-5 h-3 border-l border-gray-350 border-opacity-30"></i>
                                        <span>4:32</span>
                                    </div>
                                </li>
                                <li className="space-y-2 hover:bg-gray-100 p-2 dark:hover:bg-[#0E2338]">
                                    <p className="text-sm font-light">معرفی دوره</p>
                                    <div className="flex justify-start items-center text-xs font-light">
                                        <p>ویدیوی آموزشی</p>
                                        <i class="sm:flex hidden mx-5 h-3 border-l border-gray-350 border-opacity-30"></i>
                                        <span>4:32</span>
                                    </div>
                                </li>
                                <li className="space-y-2 hover:bg-gray-100 p-2 dark:hover:bg-[#0E2338]">
                                    <p className="text-sm font-light">معرفی دوره</p>
                                    <div className="flex justify-start items-center text-xs font-light">
                                        <p>ویدیوی آموزشی</p>
                                        <i class="sm:flex hidden mx-5 h-3 border-l border-gray-350 border-opacity-30"></i>
                                        <span>4:32</span>
                                    </div>
                                </li>
                            </ul>
                        </DisclosurePanel>
                    </Disclosure>
                </div>
            </div>
        </div>
    )
}