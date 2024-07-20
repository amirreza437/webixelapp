
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react'



export default function FAQ() {
  return (
    <div className="container mx-auto max-w-[1288px] mb-10 p-10">
        <span className="flex justify-center">
            <svg className="w-32 h-32 dark:text-[#EEEEEE]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 400 400">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-opacity=".9" stroke-width="16" d="M142 125.853c13.049-27.965 38.62-43.088 58.381-47.377 26.808-5.819 49.478 5.575 57.243 34.052 2.678 9.824 1.593 25.6-4.543 35.989-5.655 9.575-13.177 17.425-25.526 27.964-2.304 1.966-10.166 8.537-10.906 9.162-16.8 14.175-25.082 23.509-29.839 35.329-4.757 11.82-4.505 48.517 29.839 45.378M198.744 315.68v7.02"/>
            </svg>
        </span>
        <div className="flex flex-col gap-y-7 rounded-3xl">
            <h2 className="font-black text-2xl min-[700px]:text-4xl text-[#393646] text-center dark:text-[#EEEEEE]">سوالات متداول</h2>
            <div className="bg-[#ECEEF0] mx-auto w-full divide-y divide-black/10 rounded-3xl dark:bg-[#0E2338] dark:divide-[#EEEEEE]/10">
                <Disclosure as="div" className="p-2" defaultOpen={false}>
                    <DisclosureButton className="group flex justify-between items-center w-full p-3 rounded-md">
                        <div className="flex justify-between items-center text-lg font-black text-black/70 group-data-[hover]:text-black/80 dark:text-[#EEEEEE] dark:group-data-[hover]:text-[#FF0060]">
                            آیا در وبیکسل آموزش رایگان هم داریم؟
                        </div>
                        <svg className="w-5 h-5 group-data-[open]:rotate-[270deg] dark:text-[#EEEEEE]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <path fill="currentColor" fill-rule="evenodd" d="M15.707 4.293a1 1 0 0 1 0 1.414L9.414 12l6.293 6.293a1 1 0 0 1-1.414 1.414l-7-7a1 1 0 0 1 0-1.414l7-7a1 1 0 0 1 1.414 0Z" clip-rule="evenodd"/>
                        </svg>
                    </DisclosureButton>
                    <DisclosurePanel className="mt-2 text-base text-black p-3 dark:text-[#EEEEEE]">
                        بله. در وبیکسل آموزش رایگان داریم
                    </DisclosurePanel>
                </Disclosure>
                <Disclosure as="div" className="p-2" defaultOpen={false}>
                    <DisclosureButton className="group flex justify-between items-center w-full p-3 rounded-md">
                        <div className="flex justify-between items-center text-lg font-black text-black/70 group-data-[hover]:text-black/80 dark:text-[#EEEEEE] dark:group-data-[hover]:text-[#FF0060]">
                            آیا در وبیکسل آموزش رایگان هم داریم؟
                        </div>
                        <svg className="w-5 h-5 group-data-[open]:rotate-[270deg] dark:text-[#EEEEEE]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <path fill="currentColor" fill-rule="evenodd" d="M15.707 4.293a1 1 0 0 1 0 1.414L9.414 12l6.293 6.293a1 1 0 0 1-1.414 1.414l-7-7a1 1 0 0 1 0-1.414l7-7a1 1 0 0 1 1.414 0Z" clip-rule="evenodd"/>
                        </svg>
                    </DisclosureButton>
                    <DisclosurePanel className="mt-2 text-base text-black p-3 dark:text-[#EEEEEE]">
                        بله. در وبیکسل آموزش رایگان داریم
                    </DisclosurePanel>
                </Disclosure>
                <Disclosure as="div" className="p-2" defaultOpen={false}>
                    <DisclosureButton className="group flex justify-between items-center w-full p-3 rounded-md">
                        <div className="flex justify-between items-center text-lg font-black text-black/70 group-data-[hover]:text-black/80 dark:text-[#EEEEEE] dark:group-data-[hover]:text-[#FF0060]">
                            آیا در وبیکسل آموزش رایگان هم داریم؟
                        </div>
                        <svg className="w-5 h-5 group-data-[open]:rotate-[270deg] dark:text-[#EEEEEE]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <path fill="currentColor" fill-rule="evenodd" d="M15.707 4.293a1 1 0 0 1 0 1.414L9.414 12l6.293 6.293a1 1 0 0 1-1.414 1.414l-7-7a1 1 0 0 1 0-1.414l7-7a1 1 0 0 1 1.414 0Z" clip-rule="evenodd"/>
                        </svg>
                    </DisclosureButton>
                    <DisclosurePanel className="mt-2 text-base text-black p-3 dark:text-[#EEEEEE]">
                        بله. در وبیکسل آموزش رایگان داریم
                    </DisclosurePanel>
                </Disclosure>
            </div>
        </div>
    </div>
  )
}